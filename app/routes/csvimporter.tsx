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

// zod/yup sprawdzajacy zgodnosc obiektu, loguje error jak sie nie zgadza i idzie dalej do pozostalych obiektow w petli

const theme = createTheme()

export const action = async ({ request }: ActionArgs) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createMemoryUploadHandler()
  )

  const formData = await unstable_parseMultipartFormData(request, uploadHandler)

  const filename = formData.get("upload")
  if (!filename) return null
  const text = await (filename as Blob).text()

  const parsedData: any = Papa.parse(text, { header: true })

  try {
    for (const couple of parsedData.data) {
      let almaEvent = await db.almaEvent.findFirst({
        where: {
          year: parseInt(couple["kiedy na Almie"].split(".")[0]),
          month: parseInt(couple["kiedy na Almie"].split(".")[1]),
        },
      })

      if (!almaEvent) {
        almaEvent = await db.almaEvent.create({
          data: {
            year: parseInt(couple["kiedy na Almie"].split(".")[0]),
            month: parseInt(couple["kiedy na Almie"].split(".")[1]),
            organizationUnitId: parseInt(couple["nr bazy"]),
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
      parsedData.data,
      "pojawił się problem z dodaniem niektórych par"
    )
  }

  // await db.couple.create({
  //   data: {
  //     comments: String(formData.get("Grupa")),
  //     coupleId: randomId(),
  //     almaEvent: {
  //       connect: {
  //         id: "030b2a79-bd49-41af-9081-837d8e817e9d",
  //       },
  //     },
  //     organizationUnit: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //     attendanceNumber: 17,
  //     city: "data.miejscowość",
  //     group: "A",
  //     postalCode: "data.kodpocztowy",
  //     weddingYear: 2002,
  //     invitedBy: {
  //       connect: {
  //         id: "5a926019-9202-461e-9fd1-934db1f19051",
  //       },
  //     },
  //     wife: {
  //       create: {
  //         vocative: "data.wołaczmąż",
  //         church: 2,
  //         email: "data.mailmąż",
  //         lastName: "data.nazwiskomęża",
  //         firstName: String(data),
  //         phoneNumber: "data.telefonmąż",
  //         birthYear: 2001,
  //       },
  //     },
  //     husband: {
  //       create: {
  //         vocative: "data.wołaczżona",
  //         church: 3,
  //         email: "data.mailżona",
  //         lastName: "data.nazwiskożony",
  //         firstName: "data.imiężona",
  //         phoneNumber: "data.telefonżona",
  //         birthYear: 1999,
  //       },
  //     },
  //   },
  // })
  //
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
