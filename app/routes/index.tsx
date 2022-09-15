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
import MyTable from "../components/table"
import Box from "@mui/material/Box"

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
          firstName: "Grazyna",
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

        <MyTable />
        {loaderData.couples.map((couple: any) => (
          <div key={couple.id}>
            <h2>
              {couple.wife.firstName} {couple.wife.lastName} &{" "}
              {couple.husband.firstName} {couple.husband.lastName}
            </h2>
            <p>
              {couple.city}, {couple.postalCode}
            </p>
            <p>{couple.wife.email}</p>
            <p>{couple.husband.email}</p>
          </div>
        ))}

        <Button variant="contained" component={Link} to="/about">
          Go to the about page
        </Button>
      </div>
    </Box>
  )
}
