import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { redirect, type ActionArgs } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { db } from "~/db/db.server"
import { useState } from "react"
import { Group } from "@prisma/client"

export const groups = (group: string) => {
  switch (group) {
    case "A":
      return Group.A
    case "B":
      return Group.B
    case "C":
      return Group.C
    case "D":
      return Group.D
    case "S":
      return Group.S
    case "X":
      return Group.X
    default:
      return Group.A
  }
}
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()

  const formObject = Object.fromEntries(formData.entries())

  await db.couple.create({
    data: {
      // TODO: calculate ID according to our rules
      id: "c123312",
      // TODO: add this to form and all hardcoded values
      attendanceNumber: Number(formObject.attendanceNumber),
      city: String(formObject.city),
      group: formObject.group as Group,
      postalCode: String(formObject.postalCode),
      weddingYear: Number(formObject.weddingYear),
      wife: {
        create: {
          // TODO: calculate ID according to our rules + suffix "-wife"
          id: "calculate id wife1",
          email: String(formObject.wifeEmail),
          lastName: String(formObject.wifeLastName),
          firstName: String(formObject.wifeFirstName),
          phoneNumber: String(formObject.wifePhoneNumber),
          birthYear: Number(formObject.wifeBirthYear),
        },
      },
      husband: {
        create: {
          // TODO: calculate ID according to our rules + suffix "-husband"
          id: "calc id husband1",
          email: String(formObject.husbandEmail),
          lastName: String(formObject.husbandLastName),
          firstName: String(formObject.husbandFirstName),
          phoneNumber: String(formObject.husbandPhoneNumber),
          birthYear: Number(formObject.husbandBirthYear),
        },
      },
      // TODO: handle invited by
    },
  })

  return redirect("/")
}

export default function Create() {
  const [group, setGroup] = useState("")
  const handleChange = (event: any) => {
    setGroup(event.target.value)

    console.log("group value is:", event.target.value)
  }

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
                maxLength: 4, //not working on type number
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
          <TextField
            type="number"
            // InputProps={{
            //   inputProps: {
            //     maxLength: 4, //not working on type number
            //     max: 1,
            //     min: 100,
            //   },
            // }}
            name="attendanceNumber"
            id="attendanceNumber"
            label="Numer indentyfikacyjny"
            variant="outlined"
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="group">Grupa</InputLabel>
              <Select
                name="group"
                labelId="group-label"
                id="group"
                label="Grupa"
                onChange={handleChange}
                value={group}
              >
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
                <MenuItem value={"C"}>C</MenuItem>
                <MenuItem value={"D"}>D</MenuItem>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"X"}>X</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
      {/* <p>{groups()}</p> */}
    </div>
  )
}
