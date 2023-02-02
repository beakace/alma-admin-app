import { Button } from "@mui/material"
import { randomId } from "@mui/x-data-grid-generator"
import {
  ActionArgs,
  redirect,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node"
import { Form } from "@remix-run/react"
import { db } from "~/db/db.server"
import Papa from "papaparse"

export const action = async ({ request }: ActionArgs) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      file: ({ filename }) => filename,
    })
  )
  const formData = await unstable_parseMultipartFormData(request, uploadHandler)
  const filename = formData.get("upload")
  const parsedData = () => {
    Papa.parse(filename)
  }

  await db.couple.create({
    data: {
      comments: String(formData.get("Grupa")),
      coupleId: randomId(),
      almaEvent: {
        connect: {
          id: "030b2a79-bd49-41af-9081-837d8e817e9d",
        },
      },
      organizationUnit: {
        connect: {
          id: 1,
        },
      },
      attendanceNumber: 17,
      city: "data.miejscowość",
      group: "A",
      postalCode: "data.kodpocztowy",
      weddingYear: 2002,
      invitedBy: {
        connect: {
          id: "5a926019-9202-461e-9fd1-934db1f19051",
        },
      },
      wife: {
        create: {
          vocative: "data.wołaczmąż",
          church: 2,
          email: "data.mailmąż",
          lastName: "data.nazwiskomęża",
          firstName: String(data),
          phoneNumber: "data.telefonmąż",
          birthYear: 2001,
        },
      },
      husband: {
        create: {
          vocative: "data.wołaczżona",
          church: 3,
          email: "data.mailżona",
          lastName: "data.nazwiskożony",
          firstName: "data.imiężona",
          phoneNumber: "data.telefonżona",
          birthYear: 1999,
        },
      },
    },
  })

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
