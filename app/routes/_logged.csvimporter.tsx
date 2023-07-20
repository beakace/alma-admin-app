import { Box, Button, createTheme, CssBaseline } from "@mui/material"
import type { ActionArgs } from "@remix-run/node"
import {
  redirect,
  unstable_composeUploadHandlers,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node"
import { Form } from "@remix-run/react"
import { parse } from "papaparse"
import { db } from "~/db/db.server"
import { Container } from "@mui/system"
import { ThemeProvider } from "@emotion/react"
import { useState } from "react"
import UploadIcon from "@mui/icons-material/Upload"
import AddIcon from "@mui/icons-material/Add"
import { z } from "zod"
import { Group } from "@prisma/client"

const theme = createTheme()
const groupSchema = zodEnumFromObjKeys(Group)

const parsedDataSchema = z.object({
  data: z.array(
    z.object({
      "nazwisko męża": z.string(),
      "imię męża": z.string(),
      "wołacz mąż": z.string().nullable(), //wiele pustych
      "nazwisko żony": z.string(),
      "imię żony": z.string(),
      "wołacz żona": z.string().nullable(), //wiele pustych
      "telefon mąż": z.string().optional(),
      "telefon żona": z.string().optional(),
      "kod pocztowy": z.string(), //kilka pustych
      "miejsce zamieszkania": z.string().nullable(), //2 puste rekodry
      Grupa: groupSchema,
      zapraszający: z.string().nullable(), //wiele pustych
      "nr bazy": z.coerce.number(),
      "nr Almy": z.string(),
      "kiedy na Almie": z.string(),
      nr: z.coerce.number(),
      "data ur mąż": z.string(), //kilka "Invalid date"
      "data ur żona": z.string(), //kilka "Invalid date"
      "data ślubu": z.string(), //kilka "Invalid date"
      "mail mąż": z.string().optional(), //wiele pustych
      "mail żona": z.string().optional(), //wiele pustych
      "kościół mąż": z.coerce.number().nullable(), //1 pusty rekord - Alma
      "kościół żona": z.coerce.number().nullable(), //1 pusty rekord - Alma
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
    parsedData = parsedDataSchema.parse(
      parse(text, { header: true, skipEmptyLines: true })
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
            organizationUnitId: couple["nr bazy"],
          },
        })
      }
      // TODO mam takie odczucie ze latwiej sie to wszystko czyta jak są przerwy pomiędzy blokami :)
      const clearedInviters = removeTextInParentheses(couple["zapraszający"])
      const invitedBy = await db.couple.findFirst({
        where: {
          organizationUnitId: clearedInviters
            ? Number(clearedInviters?.split(" ")[3])
            : 0,
          husband: {
            firstName: clearedInviters ? clearedInviters?.split(" ")[1] : "-",
            lastName: clearedInviters ? clearedInviters?.split(" ")[0] : "-",
          },
          wife: {
            firstName: clearedInviters ? clearedInviters.split(" ")[2] : "-",
          },
        },
      })

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
            couple["nr Almy"] +
            "-" +
            almaEvent.organizationUnitId +
            "-" +
            almaEvent.year +
            "." +
            almaEvent.month +
            "-" +
            String(couple["nr"]),
          postalCode: couple["kod pocztowy"],
          city: couple["miejsce zamieszkania"] ?? "-",
          group: couple["Grupa"],
          invitedById: invitedBy?.id,
          attendanceNumber: couple["nr"],
          weddingYear: extractFullYearFromString(couple["data ślubu"]),
          organizationUnitId: almaEvent.organizationUnitId,
          almaEventId: almaEvent.id,
          comments:
            (!invitedBy
              ? couple["zapraszający"]
                ? "Zaproszeni przez: " + couple["zapraszający"] + "/"
                : ""
              : "") + couple["UWAGI"],
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
      </ThemeProvider>
    </Form>
  )
}

function zodEnumFromObjKeys<K extends string>(
  obj: Record<K, any>
): z.ZodEnum<[K, ...K[]]> {
  const [firstKey, ...otherKeys] = Object.keys(obj) as K[]
  return z.enum([firstKey, ...otherKeys])
}

function extractFullYearFromString(dateStr: string): number {
  const dateObj = new Date(dateStr)

  if (!isNaN(dateObj.getTime())) {
    return dateObj.getFullYear()
  }

  return 0
}

function removeTextInParentheses(input: string | null): string | null {
  if (!input) return null
  const regex = /\([^)]+\)|\s{2,}/g

  const cleanedText = input.replace(regex, " ")

  return cleanedText.trim()
}
