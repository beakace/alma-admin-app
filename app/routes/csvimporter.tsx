import { Box, Button, createTheme, CssBaseline, Input } from "@mui/material"
import { randomId } from "@mui/x-data-grid-generator"
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
import type { Prisma } from "@prisma/client"
import { Container } from "@mui/system"
import { ThemeProvider } from "@emotion/react"

// 1. sprawdzic rozne case'y w csv czy wszystko dziala
// 2. prawidłowe ID
// 3. try catch przy kazdym couple, gdyby sie wywalil to zeby dalej dzialalo dla innych
// 4. przeniesc import/export nad tabelę
// 5. zod/yup sprawdzajacy zgodnosc obiektu, loguje error jak sie nie zgadza i idzie dalej do pozostalych obiektow w petli

const theme = createTheme()

export const action = async ({ request }: ActionArgs) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createMemoryUploadHandler()
  )

  const formData = await unstable_parseMultipartFormData(request, uploadHandler)
  console.log(formData)

  const filename = formData.get("upload")
  if (!filename) return null
  const text = await (filename as Blob).text()
  console.log("text", text)

  const parsedData: any = Papa.parse(text, { header: true })

  console.log(parsedData)
  console.log(parsedData.data[0]["nazwisko męża"])

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
    console.log("oto event", almaEvent)
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
    console.log("oto para zapr", invitedBy)
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
        coupleId: randomId(),
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
            <label htmlFor="upload-input"></label>
            <input id="upload-input" type="file" name="upload" />
            <Button type="submit">Upload</Button>
          </Box>
        </Container>
      </ThemeProvider>{" "}
    </Form>
  )
}
