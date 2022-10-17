import * as React from "react"
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

export default function Edit() {
  const [inputs, setInputs] = React.useState({
    wifeFirstName: "",
    wifeLastName: "",
    wifePhoneNumber: "",
    wifeEmail: "",
    husbandFirstName: "",
    husbandLastName: "",
    husbandPhoneNumber: "",
    husbandEmail: "",
    wifeBirthYear: "",
    husbandBirthYear: "",
    weddingYear: "",
    city: "",
  })
  const handleInputChange = (e: any) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(inputs)
  }
  return (
    <div>
      {" "}
      <Form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <h1>Żona</h1>
          <TextField
            onChange={handleInputChange}
            name="wifeFirstName"
            value={inputs.wifeFirstName}
            id="wife.firstName"
            label="Imię"
            variant="outlined"
            required
          />
          <TextField
            name="wifeLastName"
            value={inputs.wifeLastName}
            onChange={handleInputChange}
            id="wife.lastName"
            label="Nazwisko"
            variant="outlined"
            required
          />
          <TextField
            name="wifePhoneNumber"
            value={inputs.wifePhoneNumber}
            onChange={handleInputChange}
            type="tel"
            id="wife.phoneNumber"
            label="Nr telefonu"
            variant="outlined"
            required
          />
          <TextField
            name="wifeEmail"
            value={inputs.wifeEmail}
            onChange={handleInputChange}
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
            value={inputs.wifeBirthYear}
            onChange={handleInputChange}
            id="wife.birthYear"
            label="Rok urodzenia"
            variant="outlined"
            required
          />

          <h1>Mąż</h1>
          <TextField
            name="husbandFirstName"
            value={inputs.husbandFirstName}
            onChange={handleInputChange}
            id="husband.firstName"
            label="Imię"
            variant="outlined"
            required
          />
          <TextField
            name="husbandLastName"
            value={inputs.husbandLastName}
            onChange={handleInputChange}
            id="husband.lastName"
            label="Nazwisko"
            variant="outlined"
            required
          />
          <TextField
            name="husbandPhoneNumber"
            value={inputs.husbandPhoneNumber}
            onChange={handleInputChange}
            type="tel"
            id="husband.phoneNumber"
            label="Nr telefonu"
            variant="outlined"
            required
          />
          <TextField
            name="husbandEmail"
            value={inputs.husbandEmail}
            onChange={handleInputChange}
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
            value={inputs.husbandBirthYear}
            onChange={handleInputChange}
            id="husband.birthYear"
            label="Rok urodzenia"
            variant="outlined"
            required
          />
          <h1>Wspólne</h1>

          <TextField
            type="number"
            InputProps={{
              inputProps: {
                maxLength: 4, //not working on type number
                max: 2010,
                min: 1920,
              },
            }}
            name="weddingYear"
            value={inputs.weddingYear}
            onChange={handleInputChange}
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
                value={inputs.city}
                label="Oddział"
                onChange={handleInputChange}
              >
                <MenuItem value={1}>Wrocław</MenuItem>
                <MenuItem value={2}>Warszawa</MenuItem>
                <MenuItem value={3}>Białystok</MenuItem>
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
                value={inputs.city}
                label="Zaproszeni przez"
                onChange={handleInputChange}
              >
                <MenuItem value={4}>Tu</MenuItem>
                <MenuItem value={5}>Będą</MenuItem>
                <MenuItem value={6}>Rózne pary</MenuItem>
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
