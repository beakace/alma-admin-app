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
  const [checkboxA, setCheckboxA] = useState<string>("")
  const [checkboxB, setCheckboxB] = useState<string>("")
  const [checkboxC, setCheckboxC] = useState<string>("")
  const [checkboxD, setCheckboxD] = useState<string>("")
  const [checkboxSX, setCheckboxSX] = useState<string[]>([""])
  const [checkboxNoMail, setCheckboxNoMail] = useState<string>("")
  const [isCheckedA, setIsCheckedA] = useState(false)
  const [isCheckedB, setIsCheckedB] = useState(false)
  const [isCheckedC, setIsCheckedC] = useState(false)
  const [isCheckedD, setIsCheckedD] = useState(false)
  const [isCheckedSX, setIsCheckedSX] = useState(false)
  const [isCheckedNoMail, setIsCheckedNoMail] = useState(false)

  const handleClearClick = () => {
    setIsCheckedA(false)
    setIsCheckedB(false)
    setIsCheckedC(false)
    setIsCheckedD(false)
    setIsCheckedSX(false)
    setIsCheckedNoMail(false)
    setCheckboxA("")
    setCheckboxB("")
    setCheckboxC("")
    setCheckboxD("")
    setSearch("")
  }

  const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkboxA == "A" ? setCheckboxA("") : setCheckboxA("A")
    checkboxA == "A" ? setIsCheckedA(false) : setIsCheckedA(true)
  }
  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkboxB == "B" ? setCheckboxB("") : setCheckboxB("B")
    checkboxB == "B" ? setIsCheckedB(false) : setIsCheckedB(true)
  }
  const handleChangeC = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkboxC == "C" ? setCheckboxC("") : setCheckboxC("C")
    checkboxC == "C" ? setIsCheckedC(false) : setIsCheckedC(true)
  }
  const handleChangeD = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkboxD == "D" ? setCheckboxD("") : setCheckboxD("D")
    checkboxD == "D" ? setIsCheckedD(false) : setIsCheckedD(true)
  }
  const handleChangeSX = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkboxSX == ["S", "X"] ? setCheckboxSX([""]) : setCheckboxSX(["S", "X"])
    checkboxSX == ["S", "X"] ? setIsCheckedSX(false) : setIsCheckedSX(true)
  }

  const couples = useLoaderData().couples
  // const handleChangeNoMail = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // checkboxNoMail.length === 0
  //   //   ? setCheckboxNoMail("")
  //   //   : setCheckboxNoMail("email_true")
  //   couples.wife.email.length === 0
  //     ? setIsCheckedNoMail(false)
  //     : setIsCheckedNoMail(true)
  // }
  const searchFilters = couples.filter(
    (c: CoupleWithSpouses) =>
      c.group.toLowerCase().includes(checkboxA.toLowerCase()) &&
      c.group.toLowerCase().includes(checkboxB.toLowerCase()) &&
      c.group.toLowerCase().includes(checkboxC.toLowerCase()) &&
      c.group.toLowerCase().includes(checkboxD.toLowerCase()) &&
      (c.city.toLowerCase().includes(search.toLowerCase()) ||
        c.wife.firstName.toLowerCase().includes(search.toLowerCase()) ||
        c.wife.lastName.toLowerCase().includes(search.toLowerCase()) ||
        c.wife.email.toLowerCase().includes(search.toLowerCase()) ||
        c.husband.firstName.toLowerCase().includes(search.toLowerCase()) ||
        c.husband.lastName.toLowerCase().includes(search.toLowerCase()) ||
        c.husband.email.toLowerCase().includes(search.toLowerCase()))
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
                  disabled={
                    isCheckedA ||
                    isCheckedB ||
                    isCheckedC ||
                    isCheckedD ||
                    isCheckedNoMail ||
                    isCheckedSX
                      ? false
                      : true
                  }
                  onClick={handleClearClick}
                  size="small"
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
                        checked={isCheckedNoMail}
                        // onChange={handleChangeNoMail}
                        id="isCheckedNoMail"
                      />
                    }
                    label="Bez maila"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="A"
                    control={
                      <Checkbox
                        checked={isCheckedA}
                        onChange={handleChangeA}
                        id="isCheckedA"
                      />
                    }
                    label="A"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="B"
                    control={
                      <Checkbox
                        onChange={handleChangeB}
                        checked={isCheckedB}
                        id="isCheckedB"
                      />
                    }
                    label="B"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="C"
                    control={
                      <Checkbox
                        checked={isCheckedC}
                        onChange={handleChangeC}
                        id="isCheckedC"
                      />
                    }
                    label="C"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="D"
                    control={
                      <Checkbox
                        checked={isCheckedD}
                        onChange={handleChangeD}
                        id="isCheckedD"
                      />
                    }
                    label="D"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="S/X"
                    control={
                      <Checkbox onChange={handleChangeSX} id="isCheckedSX" />
                    }
                    label="S/X"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Box>

          <DataTable couples={searchFilters} />
        </Box>
      </div>
    </Box>
  )
}
