import AddIcon from "@mui/icons-material/Add"
import ClearIcon from "@mui/icons-material/Clear"
import EventIcon from "@mui/icons-material/Event"
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Link, useLoaderData } from "@remix-run/react"
import { AlmaEvents } from "~/db/almaEvents-db.server"
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
    <Box style={{ margin: "5rem" }}>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Alma</h1>
        <p></p>
        <Button
          style={{
            paddingLeft: "0.2rem",
          }}
          color="secondary"
          size="small"
          variant="contained"
          component={Link}
          to="/createalmaevent"
        >
          <EventIcon sx={{ margin: "0", marginRight: "3px" }} />
          Dodaj nowe wydarzenie Alma
        </Button>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <EventsTable almaEvents={almaEvents} />
          </Box>
        </Box>
      </div>
    </Box>
  )
}
