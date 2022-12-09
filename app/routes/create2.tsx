import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material"
import { Form } from "@remix-run/react"
import { ActionFunction, redirect } from "@remix-run/cloudflare"
import { createCouple } from "~/db/in-memory-db"
import { randomId } from "@mui/x-data-grid-generator"

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const formObject = Object.fromEntries(formData.entries())

  createCouple({
    id: randomId(),
    city: String(formObject.city),
    husband: {
      email: String(formObject.husbandEmail),
      lastName: String(formObject.husbandLastName),
      firstName: String(formObject.husbandFirstName),
      phoneNumber: String(formObject.husbandPhoneNumber),
      id: "123",
      birthYear: Number(formObject.husbandBirthYear),
    },
    wife: {
      email: String(formObject.wifeEmail),
      lastName: String(formObject.wifeLastName),
      firstName: String(formObject.wifeFirstName),
      phoneNumber: String(formObject.wifePhoneNumber),
      id: "123",
      birthYear: Number(formObject.wifeBirthYear),
    },
    group: "A",
    wifeId: "123",
    husbandId: "123",
    postalCode: String(formObject.postalCode),
    invitedById: "!23",
    weddingYear: Number(formObject.weddingYear),
  })
  return redirect("/")
}

export default function Create() {
  return (
    <div>
      <Form method="post">
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <h1>Żona</h1>
          <TextField
            name="wifeFirstName"
            id="wife.firstName"
            label="Imię"
            variant="outlined"
            required
          />
          <TextField
            name="wifeLastName"
            id="wife.lastName"
            label="Nazwisko"
            variant="outlined"
            required
          />
          <TextField
            name="wifePhoneNumber"
            type="tel"
            id="wife.phoneNumber"
            label="Nr telefonu"
            variant="outlined"
            required
          />
          <TextField
            name="wifeEmail"
            type="email"
            id="wife.email"
            label="Email"
            variant="outlined"
            required
          />
          <TextField
            type="number"
            InputProps={{
              inputProps: {
                max: 2010,
                min: 1920,
              },
            }}
            name="wifeBirthYear"
            id="wife.birthYear"
            label="Rok urodzenia"
            variant="outlined"
            required
          />

          <h1>Mąż</h1>
          <TextField
            name="husbandFirstName"
            id="husband.firstName"
            label="Imię"
            variant="outlined"
            required
          />
          <TextField
            name="husbandLastName"
            id="husband.lastName"
            label="Nazwisko"
            variant="outlined"
            required
          />
          <TextField
            name="husbandPhoneNumber"
            type="tel"
            id="husband.phoneNumber"
            label="Nr telefonu"
            variant="outlined"
            required
          />
          <TextField
            name="husbandEmail"
            type="email"
            id="husband.email"
            label="Email"
            variant="outlined"
            required
          />

          <TextField
            type="number"
            InputProps={{
              inputProps: {
                max: 2010,
                min: 1920,
              },
            }}
            name="husbandBirthYear"
            id="husband.birthYear"
            label="Rok urodzenia"
            variant="outlined"
            required
          />
          <h1>Wspólne</h1>
          <TextField
            name="postalCode"
            id="postalCode"
            label="Kod pocztowy"
            variant="outlined"
            required
          />
          <TextField
            type="number"
            InputProps={{
              inputProps: {
                maxLength: 4,
                max: 2010,
                min: 1920,
              },
            }}
            name="weddingYear"
            id="wife.weddingYear"
            label="Rok ślubu"
            variant="outlined"
            required
          />

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="city-label">Oddział</InputLabel>
              <Select
                name="city"
                labelId="city-label"
                id="city"
                label="Oddział"
              >
                <MenuItem value={"Wrocław"}>Wrocław</MenuItem>
                <MenuItem value={"Warszawa"}>Warszawa</MenuItem>
                <MenuItem value={"Białystok"}>Białystok</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="invitedBy-select-label">
                Zaproszeni przez
              </InputLabel>
              <Select
                labelId="invitedBy-select-label"
                id="invitedBy-select"
                label="Zaproszeni przez"
              >
                <MenuItem value={"Tu"}>Tu</MenuItem>
                <MenuItem value={"Będą"}>Będą</MenuItem>
                <MenuItem value={"Rózne pary"}>Rózne pary</MenuItem>
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
