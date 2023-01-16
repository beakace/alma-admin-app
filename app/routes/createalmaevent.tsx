import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { randomId } from "@mui/x-data-grid-generator"
import { redirect, type ActionArgs } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { useState } from "react"
import { db } from "~/db/db.server"

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
    <div>
      <Form method="post">
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <Box sx={{ minWidth: 120 }}>
            <TextField
              type="number"
              InputProps={{
                inputProps: {
                  maxLength: 4, //not working on type number
                  max: 2100,
                  min: 1920,
                },
              }}
              name="year"
              id="year"
              label="Rok"
              variant="outlined"
              defaultValue={2000}
              required
            />
            <FormControl fullWidth>
              <InputLabel id="month">Miesiąc</InputLabel>
              <Select
                name="month"
                labelId="month-label"
                id="month"
                label="month"
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
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="organizationUnit-label">Oddział</InputLabel>
              <Select
                name="organizationUnit"
                labelId="organizationUnit-label"
                id="organizationUnit"
                label="Oddział"
              >
                <MenuItem value={1}>Wrocław</MenuItem>
                <MenuItem value={2}>Warszawa</MenuItem>
                <MenuItem value={3}>Olsztyn</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Button size="large" variant="outlined" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
