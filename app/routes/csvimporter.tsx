import { Box, Button, createTheme, CssBaseline } from "@mui/material"
import type { ActionArgs } from "@remix-run/node"
import {
  redirect,
  unstable_composeUploadHandlers,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node"
import { Form } from "@remix-run/react"
import Papa from "papaparse"
import { db } from "~/db/db.server"
import { Container } from "@mui/system"
import { ThemeProvider } from "@emotion/react"
import { useState } from "react"
import UploadIcon from "@mui/icons-material/Upload"
import AddIcon from "@mui/icons-material/Add"
import * as z from "zod"

const theme = createTheme()

const parsedDataSchema = z.object({
  data: z.array(
    z.object({
      "kiedy na Almie": z.string(),
      "nr bazy": z.string().transform(Number),
      "nr Almy": z.string(),
      "zapraszający nr bazy": z.string().transform(Number),
      zapraszający: z.string(),
      "wołacz mąż": z.string(),
      "mail mąż": z.string().optional(),
      "imię mąż": z.string(),
      "nazwisko męża": z.string(),
      "telefon mąż": z.string().optional(),
      "rok ur mąż": z.string().transform(Number),
      "kościół mąż": z.string().transform(Number),
      "wołacz żona": z.string(),
      "mail żona": z.string().optional(),
      "imię żona": z.string(),
      "nazwisko żony": z.string(),
      "telefon żona": z.string().optional(),
      "rok ur żona": z.string().transform(Number),
      "kościół żona": z.string().transform(Number),
      nr: z.string().transform(Number),
      "Kod Pocztowy": z.string(),
      Miejscowość: z.string(),
      Grupa: z.string(),
      "rok ślubu": z.string().optional().transform(Number),
      UWAGI: z.string().optional(),
    })
  ),
})

export const action = async ({ request }: ActionArgs) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createMemoryUploadHandler()
  )

  const formData = await unstable_parseMultipartFormData(request, uploadHandler)

  const filename = formData.get("upload")
  if (!filename) return null
  const text = await (filename as Blob).text()

  let parsedData
  try {
    parsedData = parsedDataSchema.parse(Papa.parse(text, { header: true }))
  } catch (error) {
    console.log(`Invalid data format: ${(error as z.ZodError).message}`)
    return null
  }

  try {
    for (const couple of parsedData.data) {
      let almaEvent = await db.almaEvent.findFirst({
        where: {
          year: Number(couple["kiedy na Almie"].split(".")[0]),
          month: Number(couple["kiedy na Almie"].split(".")[1]),
        },
      })

      if (!almaEvent) {
        almaEvent = await db.almaEvent.create({
          data: {
            year: Number(couple["kiedy na Almie"].split(".")[0]),
            month: Number(couple["kiedy na Almie"].split(".")[1]),
            organizationUnitId: Number(couple["nr bazy"]),
          },
        })
      }
      const invitedBy = await db.couple.findFirst({
        where: {
          organizationUnitId: Number(couple["zapraszający nr bazy"]),
          husband: {
            firstName: couple["zapraszający"].split(" ")[1],
            lastName: couple["zapraszający"].split(" ")[0],
          },
          wife: {
            firstName: couple["zapraszający"].split(" ")[2],
          },
        },
      })
      const husband = await db.person.create({
        data: {
          vocative: String(couple["wołacz mąż"]),
          email: String(couple["mail mąż"]),
          firstName: String(couple["imię mąż"]),
          lastName: String(couple["nazwisko męża"]),
          phoneNumber: String(couple["telefon mąż"]),
          birthYear: Number(couple["rok ur mąż"]),
          church: Number(couple["kościół mąż"]),
        },
      })
      const wife = await db.person.create({
        data: {
          vocative: String(couple["wołacz żona"]),
          email: String(couple["mail żona"]),
          firstName: String(couple["imię żona"]),
          lastName: String(couple["nazwisko żony"]),
          phoneNumber: String(couple["telefon żona"]),
          birthYear: Number(couple["rok ur żona"]),
          church: Number(couple["kościół żona"]),
        },
      })

      await db.couple.create({
        data: {
          husbandId: husband.id,
          wifeId: wife.id,
          coupleId:
            String(couple["nr Almy"]) +
            "-" +
            almaEvent.organizationUnitId +
            "-" +
            almaEvent.year +
            "." +
            almaEvent.month +
            "-" +
            String(couple["nr"]),
          postalCode: String(couple["Kod Pocztowy"]),
          city: String(couple["Miejscowość"]),
          group: couple["Grupa"],
          invitedById: invitedBy?.id,
          attendanceNumber: Number(couple["nr"]),
          weddingYear: Number(couple["rok ślubu"]),
          organizationUnitId: almaEvent.organizationUnitId,
          almaEventId: almaEvent.id,
          comments: String(couple["UWAGI"]),
        },
      })
    }
  } catch (error) {
    console.log(
      `There was an error creating an object: ${(error as Error).message}`
    )
  }

  return redirect("/couples")
}

export default function UploadRoute() {
  const [fileName, setFileName] = useState("")

  const handleFileInputChange = (event: any) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      const fileName = selectedFile.name
      setFileName(fileName)
      console.log(`Selected file: ${fileName}`)
    }
  }
  return (
    <Form method="post" encType="multipart/form-data">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label htmlFor="upload-input">
              <input
                id="upload-input"
                type="file"
                name="upload"
                style={{ display: "none", cursor: "pointer" }}
                onChange={handleFileInputChange}
              />
              <Button
                size="large"
                color="primary"
                variant="contained"
                component="span"
                sx={{
                  margin: "2rem",
                }}
              >
                <UploadIcon
                  sx={{
                    margin: "0",
                    paddingRight: "0.1rem",
                    marginRight: "0.8rem",
                    marginLeft: "0.15rem",
                  }}
                />
                {fileName ? `Wybrany plik: ${fileName}` : "Wybierz plik"}
              </Button>
            </label>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="success"
              disabled={!fileName}
            >
              <AddIcon
                sx={{
                  margin: "0",
                  paddingRight: "0.1rem",
                  marginRight: "0.8rem",
                  marginLeft: "0.15rem",
                }}
              />
              importuj dane z wybranego pliku
            </Button>
          </Box>
        </Container>
      </ThemeProvider>{" "}
    </Form>
  )
}
