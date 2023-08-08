import EventIcon from "@mui/icons-material/Event"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import EventsTable from "~/components/eventstable"
import { db } from "~/db/db.server"
import { requireUser } from "~/db/session.server"

export const loader = async ({ request }: LoaderArgs) => {
  const { organizationUnitId } = await requireUser(request)

  return json({
    almaEvents: await db.almaEvent.findMany({
      include: {
        organizationUnit: true,
      },
      where: { organizationUnitId },
    }),
  })
}

export default function Events() {
  const { almaEvents } = useLoaderData<typeof loader>()

  return (
    <Box
      sx={{
        margin: "3rem",
        marginLeft: "25%",
        marginRight: "25%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            paddingLeft: "0.2rem",
            marginBottom: "0.5rem",
            display: "flex",
            alignItems: "flex-end",
          }}
          color="secondary"
          size="small"
          variant="contained"
          component={Link}
          to="/events/add"
        >
          <EventIcon sx={{ margin: "0", marginRight: "0.1rem" }} />
          Dodaj nowe wydarzenie Alma
        </Button>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EventsTable almaEvents={almaEvents} />
      </Box>
    </Box>
  )
}
