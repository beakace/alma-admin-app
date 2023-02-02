import { Button } from "@mui/material"
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

export const action = async ({ request }: ActionArgs) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createMemoryUploadHandler()
  )

  const formData = await unstable_parseMultipartFormData(request, uploadHandler)

  const filename = formData.get("upload")
  if (!filename) return null
  const text = await (filename as Blob).text()

  const parsedData: any = Papa.parse(text, { header: true })

  // console.log(parsedData)
  console.log(parsedData.data[0]["nazwisko męża"])

  const couples: Prisma.CoupleCreateManyInput[] = []

  for (const couple of parsedData.data) {
    // check if alma event exists (findMany) if not create it
    /*
    {
      'nazwisko męża': 'Kowalczyk',
      'imię mąż': 'Asdkjasddasdsapko',
      'wołacz mąż': 'Saddas',
      'nazwisko żony': 'Kowsaddsaalczyk',
      'imię żona': 'Janina',
      'wołacz żona': 'Asddas',
      'telefon mąż': '4102984',
      'telefon żona': '574190',
      'Kod Pocztowy': '90909',
      'Miejscowość': 'Białystok',
      Grupa: 'A',
      'zapraszający': 'Kowalski Bogdan Bożena',
      'zapraszający nr bazy': '2',
      'nr bazy': '2',
      'nr Almy': '2',
      'kiedy na Almie': '1997.11',
      nr: '18',
      'rok ur mąż': '1965',
      'rok ur żona': '1990',
      'rok ślubu': '2008',
      'mail mąż': 'jan@onet.pl',
      'mail żona': 'ania@wp.pl',
      'kościół mąż': '2',
      'kościół żona': '2',
      UWAGI: 'Bardzo ważne uwagi sprawdzamy jak się wyświetlają'
    }
     */
    const almaEvent = await db.almaEvent.findFirst({
      where: {
        year: couple["kiedy na Almie"].split(".")[0],
        month: couple["kiedy na Almie"].split(".")[1],
      },
    })

    const husband = await db.person.create({
      data: {
        //...
      },
    })

    couples.push({
      city: couple["Miejscowość"],
      group: couple["Grupa"],
      almaEventId: "", // create or find this ID!!
      husbandId: husband.id,
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
      <label htmlFor="upload-input"></label>
      <input id="upload-input" type="file" name="upload" />
      <Button type="submit">Upload</Button>
    </Form>
  )
}
