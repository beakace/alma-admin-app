import EventIcon from "@mui/icons-material/Event"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link, useLoaderData } from "@remix-run/react"
import type { AlmaEvents } from "~/db/almaEvents-db.server"
import { db } from "~/db/db.server"
import EventsTable from "../components/eventstable"

export const loader = async (): Promise<LoaderData> => {
  return {
    almaEvents: await db.almaEvent.findMany({
      include: {
        organizationUnit: true,
      },
    }),
  }
}

type LoaderData = {
  almaEvents: AlmaEvents[]
}

export default function Events() {
  const almaEvents = useLoaderData().almaEvents

  return (
    <Box sx={{ margin: "3rem" }}>
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
          to="/createalmaevent"
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
