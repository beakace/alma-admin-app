import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  Typography,
} from "@mui/material"
import EventIcon from "@mui/icons-material/Event"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { randomId } from "@mui/x-data-grid-generator"
import { redirect, type ActionArgs } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { useState } from "react"
import { db } from "~/db/db.server"

const theme = createTheme()

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const formObject = Object.fromEntries(formData.entries())

  await db.almaEvent.create({
    data: {
      id: randomId(),
      year: Number(formObject.year),
      month: Number(formObject.month),
      organizationUnit: {
        connect: {
          id: Number(formObject.organizationUnit),
        },
      },
    },
  })

  return redirect("/events")
}

export default function Create() {
  const [month, setMonth] = useState("")
  const handleChange = (event: any) => {
    setMonth(event.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(227,242,253,0.1)",
            boxShadow: "5px 5px 5px 5px rgba(144,202,249,0.2)",
          }}
        >
          <Form method="post">
            <Box
              sx={{
                "& > :not(style)": { m: 0.5, width: "18rem" },
                margin: "3rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <EventIcon fontSize="large" />
              <Typography
                align="center"
                fontWeight="bold"
                component="h1"
                variant="h5"
              >
                ALMA EVENT
              </Typography>

              <InputLabel id="year-label">Rok</InputLabel>
              <TextField
                type="number"
                InputProps={{
                  inputProps: {
                    max: 2100,
                    min: 1920,
                  },
                }}
                name="year"
                id="year"
                variant="outlined"
                required
              />

              <InputLabel id="month">Miesiąc</InputLabel>
              <Select
                name="month"
                labelId="month-label"
                id="month"
                onChange={handleChange}
                value={month}
              >
                <MenuItem value={1}>Styczeń</MenuItem>
                <MenuItem value={2}>Luty</MenuItem>
                <MenuItem value={3}>Marzec</MenuItem>
                <MenuItem value={4}>Kwiecień</MenuItem>
                <MenuItem value={5}>Maj</MenuItem>
                <MenuItem value={6}>Czerwiec</MenuItem>
                <MenuItem value={7}>Lipiec</MenuItem>
                <MenuItem value={8}>Sierpień</MenuItem>
                <MenuItem value={9}>Wrzesień</MenuItem>
                <MenuItem value={10}>Październik</MenuItem>
                <MenuItem value={11}>Listopad</MenuItem>
                <MenuItem value={12}>Grudzień</MenuItem>
              </Select>
              <InputLabel id="organizationUnit-label">Oddział</InputLabel>
              <Select
                name="organizationUnit"
                labelId="organizationUnit-label"
                id="organizationUnit"
              >
                <MenuItem value={1}>Wrocław</MenuItem>
                <MenuItem value={2}>Warszawa</MenuItem>
                <MenuItem value={3}>Olsztyn</MenuItem>
              </Select>
              <Button size="large" variant="contained" type="submit" fullWidth>
                DODAJ WYDARZENIE
              </Button>
            </Box>
          </Form>{" "}
        </Box>
      </Container>
    </ThemeProvider>
  )
}
