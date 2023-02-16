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

  const couples: Prisma.CoupleCreateManyInput[] = []

  for (const couple of parsedData.data) {
    // check if alma event exists (findMany) if not create it
    // if (couple !== undefined) {
    const almaEvent = await db.almaEvent.findFirst({
      where: {
        year: parseInt(couple["kiedy na Almie"].split(".")[0]),
        month: parseInt(couple["kiedy na Almie"].split(".")[1]),
      },
    })

    // if (almaEvent) {
    // } else {
    //   const newAlmaEvent = await db.almaEvent.create({
    //     data: {
    //       year: parseInt(couple["kiedy na Almie"].split(".")[0]),
    //       month: parseInt(couple["kiedy na Almie"].split(".")[1]),
    //     },
    //   })
    // }
    console.log("oto event", almaEvent)
    const invitedBy = await db.couple.findFirst({
      where: {
        organizationUnitId: Number(couple["zapraszający nr bazy"]),
      },
    })
    console.log("oto para zapr", invitedBy)
    const husband = await db.person.create({
      data: {
        vocative: String(parsedData.data[couple]["wołacz mąż"]),
        email: String(parsedData.data[couple]["mail mąż"]),
        firstName: String(parsedData.data[couple]["imię mąż"]),
        lastName: String(parsedData.data[couple]["nazwisko męża"]),
        phoneNumber: String(parsedData.data[couple]["telefon mąż"]),
        birthYear: Number(parsedData.data[couple]["rok ur mąż"]),
        church: Number(parsedData.data[couple]["kościół mąż"]),
      },
    })
    const wife = await db.person.create({
      data: {
        vocative: String(parsedData.data[couple]["wołacz żona"]),
        email: String(parsedData.data[couple]["mail żona"]),
        firstName: String(parsedData.data[couple]["imię żona"]),
        lastName: String(parsedData.data[couple]["nazwisko żony"]),
        phoneNumber: String(parsedData.data[couple]["telefon żona"]),
        birthYear: Number(parsedData.data[couple]["rok ur żona"]),
        church: Number(parsedData.data[couple]["kościół żona"]),
      },
    })

    await db.couple.create({
      data: {
        husbandId: husband.id,
        wifeId: wife.id,
        coupleId: randomId(),
        postalCode: String(parsedData.data[couple]["Kod Pocztowy"]),
        city: String(parsedData.data[couple]["Miejscowość"]),
        group: parsedData.data[couple]["Grupa"],
        id: randomId(),
        invitedById: invitedBy?.id,
        attendanceNumber: Number(parsedData.data[couple]["nr"]),
        weddingYear: Number(parsedData.data[couple]["rok ślubu"]),
        organizationUnitId: almaEvent?.organizationUnitId,
        almaEventId: almaEvent?.id,
        comments: String(parsedData.data[couple]["UWAGI"]),
      },
    })

      couples.push({
        city: couple["city"],
        group: couple["group"],
        almaEventId: "", // create or find this ID!!
        husbandId: husband.id,
        postalCode: couple["postalCode"],
        attendanceNumber: couple["attendanceNumber"],
        weddingYear: couple["weddingYear"],
        comments: couple["comments"],
        coupleId: randomId(),
        wifeId: wife.id,
        organizationUnitId: 23,
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
