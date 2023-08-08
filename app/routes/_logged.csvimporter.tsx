import { ThemeProvider } from "@emotion/react"
import AddIcon from "@mui/icons-material/Add"
import UploadIcon from "@mui/icons-material/Upload"
import { Box, Button, createTheme, CssBaseline } from "@mui/material"
import { Container } from "@mui/system"
import { Group } from "@prisma/client"
import type { ActionArgs } from "@remix-run/node"
import {
  redirect,
  unstable_composeUploadHandlers,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node"
import { Form } from "@remix-run/react"
import { parse } from "papaparse"
import type { ChangeEvent } from "react"
import { useState } from "react"
import { z } from "zod"
import { db } from "~/db/db.server"
import {
  decodeFile,
  extractFullYearFromString,
  zodEnumFromObjKeys,
} from "~/lib/csvImporter"
const theme = createTheme()
const groupSchema = zodEnumFromObjKeys(Group)

const parsedDataSchema = z.object({
  data: z.array(
    z.object({
      "nazwisko męża": z.string(),
      "imię męża": z.string(),
      "wołacz mąż": z.string().nullable(),
      "nazwisko żony": z.string(),
      "imię żony": z.string(),
      "wołacz żona": z.string().nullable(),
      "telefon mąż": z.string().optional(),
      "telefon żona": z.string().optional(),
      "kod pocztowy": z.string(),
      "miejsce zamieszkania": z.string().nullable(),
      Grupa: groupSchema,
      zapraszający: z.string().nullable(),
      "nr bazy": z.coerce.number(),
      "nr Almy": z.coerce.number(),
      "kiedy na Almie": z.string(),
      nr: z.coerce.number(),
      "data ur mąż": z.string(),
      "data ur żona": z.string(),
      "data ślubu": z.string(),
      "mail mąż": z.string().optional(),
      "mail żona": z.string().optional(),
      "kościół mąż": z.coerce.number().nullable(),
      "kościół żona": z.coerce.number().nullable(),
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
  const blob = await (filename as Blob)
  const decodedFile = await decodeFile(blob)

  let parsedData
  try {
    parsedData = parsedDataSchema.parse(
      parse(decodedFile, { header: true, skipEmptyLines: true })
    )
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
            organizationUnitId: couple["nr Almy"],
          },
        })
      }

      const husband = await db.person.create({
        data: {
          vocative: couple["wołacz mąż"] ?? "-",
          email: couple["mail mąż"] ?? "-",
          firstName: couple["imię męża"],
          lastName: couple["nazwisko męża"],
          phoneNumber: couple["telefon mąż"] ?? "-",
          birthYear: extractFullYearFromString(couple["data ur mąż"]),
          church: couple["kościół mąż"] ?? 0,
        },
      })
      const wife = await db.person.create({
        data: {
          vocative: couple["wołacz żona"] ?? "-",
          email: couple["mail żona"] ?? "-",
          firstName: couple["imię żony"],
          lastName: couple["nazwisko żony"],
          phoneNumber: couple["telefon żona"] ?? "-",
          birthYear: extractFullYearFromString(couple["data ur żona"]),
          church: couple["kościół żona"] ?? 0,
        },
      })

      await db.couple.create({
        data: {
          husbandId: husband.id,
          wifeId: wife.id,
          coupleId:
            almaEvent.organizationUnitId +
            "-" +
            couple["nr Almy"] +
            "-" +
            almaEvent.year +
            "." +
            almaEvent.month.toString().padStart(2, "0") +
            "-" +
            String(couple["nr"]),
          postalCode: couple["kod pocztowy"],
          city: couple["miejsce zamieszkania"] ?? "-",
          group: couple["Grupa"],
          invitedBy: couple["zapraszający"] ? couple["zapraszający"] : "-",
          attendanceNumber: couple["nr"],
          weddingDate:
            couple["data ślubu"] === "Invalid date" ? "" : couple["data ślubu"],
          organizationUnitId: almaEvent.organizationUnitId,
          almaEventId: almaEvent.id,
          comments: couple["UWAGI"],
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

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      </ThemeProvider>
    </Form>
  )
}
