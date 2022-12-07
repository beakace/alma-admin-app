import { LoaderFunction } from "@remix-run/cloudflare"
import { useLoaderData, Link } from "@remix-run/react"
import { CoupleWithSpouses } from "~/db/couples-db.server"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import ClearIcon from "@mui/icons-material/Clear"
import AddIcon from "@mui/icons-material/Add"
import Box from "@mui/material/Box"
import DataTable from "../components/datatable"
import { useState } from "react"
import { randomId } from "@mui/x-data-grid-generator"
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material"

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
          id: randomId(),
          email: "email@email-wife.com",
          lastName: "Kowalska",
          firstName: "Anna",
          birthYear: 1980,
          phoneNumber: "123456789",
        },
        husband: {
          id: randomId(),
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
          id: randomId(),
          email: "email2@email-wife.com",
          lastName: "Nowak",
          firstName: "Grażyna",
          birthYear: 1981,
          phoneNumber: "123456780",
        },
        husband: {
          id: randomId(),
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
          id: randomId(),
          email: "email32@email-wife.com",
          lastName: "Lewandowska",
          firstName: "Barbara",
          birthYear: 1965,
          phoneNumber: "923456780",
        },
        husband: {
          id: randomId(),
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
          id: randomId(),
          email: "email312@email-wife.com",
          lastName: "Leszczyńska",
          firstName: "Oliwia",
          birthYear: 1991,
          phoneNumber: "913456780",
        },
        husband: {
          id: randomId(),
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
          id: randomId(),
          email: "email232@email-wife.com",
          lastName: "Kaczyński",
          firstName: "Kot",
          birthYear: 2002,
          phoneNumber: "323456780",
        },
        husband: {
          id: randomId(),
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
          id: randomId(),
          email: "email342@email-wife.com",
          lastName: "Dziuba",
          firstName: "Sara",
          birthYear: 1993,
          phoneNumber: "423456780",
        },
        husband: {
          id: randomId(),
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
  const [search, setSearch] = useState<string>("")
  const [checkboxFilters, setCheckboxFilters] = useState({
    isCheckedA: true,
    isCheckedB: true,
    isCheckedC: true,
    isCheckedD: false,
    isCheckedSX: false,
    isCheckedNoMail: false,
  })

  const handleCheckboxFilterChange = (e: any) => {
    setCheckboxFilters((checkboxFilters) => ({
      ...checkboxFilters,
      [e.target.id]: e.target.checked,
    }))
  }
  const couples = useLoaderData().couples

  const handleClearClick = () => {
    setCheckboxFilters({
      isCheckedA: true,
      isCheckedB: true,
      isCheckedC: true,
      isCheckedD: false,
      isCheckedSX: false,
      isCheckedNoMail: false,
    })
  }

  const filteredCouples = couples
    .filter(
      (c: CoupleWithSpouses) =>
        c.city.toLowerCase().includes(search.toLowerCase()) ||
        c.wife.firstName.toLowerCase().includes(search.toLowerCase()) ||
        c.wife.lastName.toLowerCase().includes(search.toLowerCase()) ||
        c.wife.email.toLowerCase().includes(search.toLowerCase()) ||
        c.husband.firstName.toLowerCase().includes(search.toLowerCase()) ||
        c.husband.lastName.toLowerCase().includes(search.toLowerCase()) ||
        c.husband.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter((c: CoupleWithSpouses) => {
      const selectedGroups = ["A", "B", "C", "D", "S", "X"].filter((group) => {
        switch (group) {
          case "A":
            return checkboxFilters.isCheckedA
          case "B":
            return checkboxFilters.isCheckedB
          case "C":
            return checkboxFilters.isCheckedC
          case "D":
            return checkboxFilters.isCheckedD
          case "S":
          case "X":
            return checkboxFilters.isCheckedSX
        }
      })

      return selectedGroups.includes(c.group)
    })

  return (
    <Box style={{ margin: "5rem" }}>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Alma</h1>
        <p></p>

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
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Szukaj..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="small"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                mt: "1rem",
                height: "3rem",
              }}
            />{" "}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <FormControl
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
                component="fieldset"
              >
                <FormLabel component="legend"></FormLabel>
                <Button
                  style={{
                    paddingLeft: "0.2rem",
                  }}
                  size="small"
                  variant="contained"
                  component={Link}
                  to="/create"
                >
                  <AddIcon sx={{ margin: "0" }} /> Dodaj nowe małżeństwo
                </Button>{" "}
                <Button
                  size="small"
                  disabled={
                    !checkboxFilters.isCheckedA ||
                    !checkboxFilters.isCheckedB ||
                    !checkboxFilters.isCheckedC ||
                    checkboxFilters.isCheckedD ||
                    checkboxFilters.isCheckedNoMail ||
                    checkboxFilters.isCheckedSX
                  }
                  onClick={handleClearClick}
                  variant="outlined"
                  startIcon={<ClearIcon />}
                >
                  Wyczyść filtry
                </Button>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="Bez maila"
                    control={
                      <Checkbox
                        onChange={handleCheckboxFilterChange}
                        id="isCheckedNoMail"
                        checked={checkboxFilters.isCheckedNoMail}
                      />
                    }
                    label="Bez maila"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="A"
                    control={
                      <Checkbox
                        onChange={handleCheckboxFilterChange}
                        id="isCheckedA"
                        checked={checkboxFilters.isCheckedA}
                      />
                    }
                    label="A"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="B"
                    control={
                      <Checkbox
                        onChange={handleCheckboxFilterChange}
                        id="isCheckedB"
                        checked={checkboxFilters.isCheckedB}
                      />
                    }
                    label="B"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="C"
                    control={
                      <Checkbox
                        onChange={handleCheckboxFilterChange}
                        id="isCheckedC"
                        checked={checkboxFilters.isCheckedC}
                      />
                    }
                    label="C"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="D"
                    control={
                      <Checkbox
                        onChange={handleCheckboxFilterChange}
                        id="isCheckedD"
                        checked={checkboxFilters.isCheckedD}
                      />
                    }
                    label="D"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="S/X"
                    control={
                      <Checkbox
                        onChange={handleCheckboxFilterChange}
                        id="isCheckedSX"
                        checked={checkboxFilters.isCheckedSX}
                      />
                    }
                    label="S/X"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Box>

          <DataTable couples={filteredCouples} />
        </Box>
      </div>
    </Box>
  )
}
