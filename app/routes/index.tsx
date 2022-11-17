import { LoaderFunction } from "@remix-run/cloudflare"
import { useLoaderData, Link, useSearchParams } from "@remix-run/react"
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
import { Controller, useForm } from "react-hook-form"

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
          lastName: "Błaszczak",
          firstName: "Mariusz",
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
          email: "",
          lastName: "Dziuba",
          firstName: "Sara",
          birthYear: 1993,
          phoneNumber: "423456780",
        },
        husband: {
          id: randomId(),
          email: "",
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
  const defaultNames = [""]
  const { control } = useForm({
    defaultValues: { names: defaultNames },
  })

  const [checkedValues, setCheckedValues] = useState(defaultNames)

  function handleSelectCheckbox(checkedName: any) {
    const newNames = checkedValues?.includes(checkedName)
      ? checkedValues?.filter((name) => name !== checkedName)
      : [...(checkedValues ?? []), checkedName]
    setCheckedValues(newNames)
    console.log(checkedValues.toString())

    return newNames
  }
  function handleClearClick() {
    setCheckedValues(defaultNames)
    setSearch("")
  }
  const couples = useLoaderData().couples

  const checkedString = checkedValues.toString().replace(/,/g, "")
  console.log("string ", { checkedString })

  const searchFilters = couples.filter(
    (c: CoupleWithSpouses) =>
      [
        c.city,
        c.wife.firstName,
        c.wife.lastName,
        c.wife.email,
        c.husband.firstName,
        c.husband.lastName,
        c.husband.email,
      ]
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      c.group.toLowerCase().includes(checkedString.toLowerCase())
  )

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
                  disabled={checkedString === "" && search === ""}
                  onClick={handleClearClick}
                  size="small"
                  variant="outlined"
                  startIcon={<ClearIcon />}
                >
                  Wyczyść filtry
                </Button>
                <form>
                  {["A", "B", "C", "D", "S/X"].map((name) => (
                    <FormControlLabel
                      control={
                        <Controller
                          name="names"
                          render={(renderProps) => {
                            return (
                              <Checkbox
                                checked={checkedValues.includes(name)}
                                onChange={() =>
                                  renderProps.field.onChange(
                                    handleSelectCheckbox(name)
                                  )
                                }
                              />
                            )
                          }}
                          control={control}
                        />
                      }
                      key={name}
                      label={name}
                    />
                  ))}
                </form>
                <FormGroup aria-label="position" row></FormGroup>
              </FormControl>
            </Box>
          </Box>

          <DataTable couples={searchFilters} />
        </Box>
      </div>
    </Box>
  )
}
