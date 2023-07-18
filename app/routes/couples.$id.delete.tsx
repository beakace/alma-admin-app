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
import { redirect, type ActionArgs } from "@remix-run/node"
import { Form, useLoaderData, useParams } from "@remix-run/react"
import { db } from "~/db/db.server"

export const loader = async ({ params }: any): Promise<any> => {
  const id = params.id

  const almaEvents = await db.almaEvent.findMany({
    select: {
      id: true,
      year: true,
      month: true,
      organizationUnitId: true,
    },
  })

  const organizationUnits = await db.organizationUnit.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  const couple = await db.couple.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      organizationUnitId: true,
      husband: true,
      wife: true,
      city: true,
      group: true,
      postalCode: true,
      weddingYear: true,
      comments: true,
      attendanceNumber: true,
      almaEventId: true,
      invitedById: true,
    },
  })

  return {
    almaEvents: almaEvents.map(({ id, year, month, organizationUnitId }) => {
      return {
        id: id,
        label: `${organizationUnitId}-${year}-${month}`,
      }
    }),
    organizationUnits: organizationUnits.map(({ id }) => {
      return { id: id, label: `${id}` }
    }),

    couple,
  }
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
  const theme = createTheme()
  const couple = useLoaderData().couple
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
                {" "}
                {couple.husband.lastName} {couple.husband.firstName}{" "}
                {couple.wife.firstName}
                {", nr almy "}
                {couple.organizationUnitId}
                {", nr pary "}
                {couple.attendanceNumber}
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
