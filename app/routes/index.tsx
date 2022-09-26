import { LoaderFunction } from "@remix-run/cloudflare"
import { useLoaderData, Link } from "@remix-run/react"
import { CoupleWithSpouses } from "~/db/couples-db.server"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ClearIcon from "@mui/icons-material/Clear"
import IconButton from "@mui/material/IconButton"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import DataTable from "../components/datatable"

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  return {
    couples: [
      {
        id: "2-1-2005.01-15",
        city: "Wrocław",
        group: "A",
        postalCode: "50-123",
        weddingYear: 2000,
        wifeId: "1234",
        husbandId: "5678",
        invitedById: null,
        wife: {
          id: "1234",
          email: "email@email-wife.com",
          lastName: "Kowalska",
          firstName: "Anna",
          birthYear: 1980,
          phoneNumber: "123456789",
        },
        husband: {
          id: "123",
          email: "husband@email.com",
          lastName: "Kowalski",
          firstName: "Jan",
          birthYear: 1975,
          phoneNumber: "987654321",
        },
      },
      {
        id: "2-1-2006.01-15",
        city: "Wrocław",
        group: "B",
        postalCode: "50-123",
        weddingYear: 2001,
        wifeId: "12340",
        husbandId: "56780",
        invitedById: null,
        wife: {
          id: "12340",
          email: "email2@email-wife.com",
          lastName: "Nowak",
          firstName: "Grażyna",
          birthYear: 1981,
          phoneNumber: "123456780",
        },
        husband: {
          id: "1230",
          email: "husband2@email.com",
          lastName: "Nowak",
          firstName: "Janusz",
          birthYear: 1976,
          phoneNumber: "987654320",
        },
      },
      {
        id: "1-2-2010.02-13",
        city: "Warszawa",
        group: "S",
        postalCode: "00-001",
        weddingYear: 2003,
        wifeId: "92340",
        husbandId: "96780",
        invitedById: null,
        wife: {
          id: "92340",
          email: "email32@email-wife.com",
          lastName: "Lewandowska",
          firstName: "Barbara",
          birthYear: 1965,
          phoneNumber: "923456780",
        },
        husband: {
          id: "9230",
          email: "husband23@email.com",
          lastName: "Lewandowski",
          firstName: "Andrzej",
          birthYear: 1966,
          phoneNumber: "187654320",
        },
      },
      {
        id: "2-2-2011.01-14",
        city: "Warszawa",
        group: "C",
        postalCode: "00-001",
        weddingYear: 2003,
        wifeId: "921340",
        husbandId: "961780",
        invitedById: null,
        wife: {
          id: "921340",
          email: "email312@email-wife.com",
          lastName: "Leszczyńska",
          firstName: "Oliwia",
          birthYear: 1991,
          phoneNumber: "913456780",
        },
        husband: {
          id: "92130",
          email: "husband213@email.com",
          lastName: "Leszczyński",
          firstName: "Dawid",
          birthYear: 1936,
          phoneNumber: "117654320",
        },
      },
      {
        id: "1-2-2010.02-14",
        city: "Wrocław",
        group: "X",
        postalCode: "00-001",
        weddingYear: 2002,
        wifeId: "292340",
        husbandId: "296780",
        invitedById: null,
        wife: {
          id: "292340",
          email: "email232@email-wife.com",
          lastName: "Kaczyński",
          firstName: "Kot",
          birthYear: 2002,
          phoneNumber: "323456780",
        },
        husband: {
          id: "93230",
          email: "husband323@email.com",
          lastName: "Kaczyński",
          firstName: "Jarosław",
          birthYear: 1959,
          phoneNumber: "387654320",
        },
      },
      {
        id: "1-2-2010.02-15",
        city: "Wrocław",
        group: "D",
        postalCode: "50-123",
        weddingYear: 2000,
        wifeId: "42340",
        husbandId: "46780",
        invitedById: null,
        wife: {
          id: "42340",
          email: "email342@email-wife.com",
          lastName: "Dziuba",
          firstName: "Sara",
          birthYear: 1993,
          phoneNumber: "423456780",
        },
        husband: {
          id: "49230",
          email: "husband243@email.com",
          lastName: "Dziuba",
          firstName: "Michał",
          birthYear: 1994,
          phoneNumber: "487654320",
        },
      },
    ],
  }
}

type LoaderData = {
  couples: CoupleWithSpouses[]
}

export default function Index() {
  const loaderData = useLoaderData()
  return (
    <Box style={{ margin: "5rem" }}>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Alma</h1>
        <TextField
          style={{ marginRight: "1rem", marginBottom: "2rem" }}
          id="outlined-basic"
          label="Szukaj..."
          variant="standard"
        />
        <p></p>
        <FormControl
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
          component="fieldset"
        >
          <FormLabel component="legend"></FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="Bez maila"
              control={<Checkbox />}
              label="Bez maila"
              labelPlacement="end"
            />
            <FormControlLabel
              value="A"
              control={<Checkbox />}
              label="A"
              labelPlacement="end"
            />
            <FormControlLabel
              value="B"
              control={<Checkbox />}
              label="B"
              labelPlacement="end"
            />
            <FormControlLabel
              value="C"
              control={<Checkbox />}
              label="C"
              labelPlacement="end"
            />
            <FormControlLabel
              value="D"
              control={<Checkbox />}
              label="D"
              labelPlacement="end"
            />
            <FormControlLabel
              value="S/X"
              control={<Checkbox />}
              label="S/X"
              labelPlacement="end"
            />
            <Button variant="outlined" startIcon={<ClearIcon />}>
              Wyczyść filtry
            </Button>
          </FormGroup>
        </FormControl>

        <DataTable loaderData={loaderData} />

        <Button variant="contained" component={Link} to="/about">
          Go to the about page
        </Button>
      </div>
    </Box>
  )
}
