import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  Typography,
} from "@mui/material"
import Box from "@mui/material/Box"
import type { Person } from "@prisma/client"
import type { ActionArgs, LoaderArgs } from "@remix-run/node"
import { json, redirect } from "@remix-run/node"
import { Form, useLoaderData, useParams } from "@remix-run/react"
import { db } from "~/db/db.server"

export const loader = async ({ params }: LoaderArgs) => {
  const coupleId = params.id

  const couple = await db.couple.findUnique({
    where: {
      id: coupleId,
    },
    select: {
      husband: true,
      wife: true,
      organizationUnitId: true,
      attendanceNumber: true,
    },
  })
  if (!couple) return redirect("/couples")

  return json({
    couple,
  })
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const formObject = Object.fromEntries(formData.entries())

  await db.couple.delete({
    where: {
      id: String(formObject.id),
    },
  })

  return redirect("/couples")
}

export default function DeleteCouple() {
  const { couple } = useLoaderData<typeof loader>()
  const theme = createTheme()
  const { id } = useParams()

  return (
    <Form method="post">
      <ThemeProvider theme={theme}>
        <Container component="main">
          <CssBaseline />
          <GlobalStyles styles={{ h4: { color: "black" } }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input type="hidden" name="id" value={id} />
            <Box sx={{ margin: "1rem" }}>
              <Typography
                variant="inherit"
                sx={{ margin: "1rem", fontWeight: "bold", color: "red" }}
              >
                CZY NA PEWNO CHCESZ USUNĄĆ TO MAŁŻEŃSTWO Z BAZY?
              </Typography>
              <Typography sx={{ margin: "1rem" }}>
                {buildDeleteCoupleMessage(couple)}
              </Typography>
              <Button
                sx={{ margin: "1rem" }}
                size="large"
                variant="contained"
                type="submit"
                color="error"
              >
                Tak, usuń to małżeństwo z bazy
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Form>
  )
}

const buildDeleteCoupleMessage = (
  couple: {
    husband: Person
    wife: Person
    organizationUnitId: number
    attendanceNumber: number
  } | null
) => {
  return (
    [
      couple?.husband.lastName,
      couple?.husband.firstName,
      couple?.wife.firstName,
    ].join(" ") +
    ", nr almy " +
    couple?.organizationUnitId +
    ", nr pary " +
    couple?.attendanceNumber
  )
}
