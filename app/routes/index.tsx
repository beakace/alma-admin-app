import AddIcon from "@mui/icons-material/Add"
import ClearIcon from "@mui/icons-material/Clear"
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { LoaderFunction } from "@remix-run/cloudflare"
import { Link, useLoaderData } from "@remix-run/react"
import { useState } from "react"
import { CoupleWithSpouses } from "~/db/couples-db.server"
import { readCouples } from "~/db/in-memory-db"
import DataTable from "../components/datatable"

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  return {
    couples: readCouples(),
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
    .filter((c: CoupleWithSpouses) =>
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
        .includes(search.toLowerCase())
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
    .filter((c: CoupleWithSpouses) => {
      const emptyEmails = [c.wife.email].filter((email) => {
        switch (email) {
          case "":
            return checkboxFilters.isCheckedNoMail
          default:
            return !checkboxFilters.isCheckedNoMail
        }
      })
      return (
        emptyEmails.includes(c.wife.email) ||
        emptyEmails.includes(c.husband.email)
      )
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
                  to="/create2"
                >
                  <AddIcon sx={{ margin: "0" }} /> Dodaj nowe małżeństwo
                </Button>{" "}
                <Button
                  size="small"
                  disabled={
                    !checkboxFilters.isCheckedD ||
                    !checkboxFilters.isCheckedNoMail ||
                    !checkboxFilters.isCheckedSX
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
