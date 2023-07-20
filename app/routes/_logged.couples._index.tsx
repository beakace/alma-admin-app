import AddIcon from "@mui/icons-material/Add"
import ClearIcon from "@mui/icons-material/Clear"
import DownloadIcon from "@mui/icons-material/Download"
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
import { Link, NavLink, useLoaderData } from "@remix-run/react"
import { useState } from "react"
import CSVExporter from "~/components/csvexporter"
import DataTable from "~/components/datatable"
import type { CoupleWithSpouses } from "~/db/couples-db.server"
import { db } from "~/db/db.server"

export const loader = async (): Promise<LoaderData> => {
  return {
    couples: await db.couple.findMany({
      include: {
        husband: true,
        wife: true,
        invitedBy: { include: { husband: true, wife: true } },
        organizationUnit: true,
        almaEvent: true,
      },
    }),
  }
}

type LoaderData = {
  couples: CoupleWithSpouses[]
}

export default function Couples() {
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
          default:
            return true
        }
      })

      return selectedGroups.includes(c.group)
    })
    .filter((c: CoupleWithSpouses) => {
      if (checkboxFilters.isCheckedNoMail) {
        return !c.wife.email || !c.husband.email
      } else {
        return (
          (c.wife.email && c.husband.email) || !c.wife.email || !c.husband.email
        )
      }
    })

  return (
    <Box margin={"3rem"}>
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
          />
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
              <Box
                sx={{
                  display: "flexbox",
                  direction: "row",
                }}
              >
                <CSVExporter filteredCouples={filteredCouples} />
                <Button
                  sx={{
                    marginLeft: "0.8rem",
                    paddingRight: "1rem",
                  }}
                  size="small"
                  variant="contained"
                  component={NavLink}
                  to="/csvimporter"
                  color="primary"
                >
                  <DownloadIcon
                    sx={{
                      margin: "0",
                      paddingRight: "0.1rem",
                      marginRight: "0.8rem",
                      marginLeft: "0.15rem",
                    }}
                  />
                  Import
                </Button>
                <Button
                  sx={{
                    marginLeft: "0.8rem",
                    marginRight: "0.6rem",
                    paddingRight: "1rem",
                  }}
                  color="secondary"
                  size="small"
                  variant="contained"
                  component={Link}
                  to="/couples/add"
                >
                  <AddIcon
                    sx={{
                      margin: "0",
                      paddingRight: "0.1rem",
                      marginRight: "0.8rem",
                      marginLeft: "0.15rem",
                    }}
                  />
                  dodaj małżeństwo
                </Button>
                <Button
                  sx={{
                    margin: "0",
                    paddingRight: "1rem",
                  }}
                  size="small"
                  disabled={
                    checkboxFilters.isCheckedA &&
                    checkboxFilters.isCheckedB &&
                    checkboxFilters.isCheckedC &&
                    !checkboxFilters.isCheckedD &&
                    !checkboxFilters.isCheckedNoMail &&
                    !checkboxFilters.isCheckedSX
                  }
                  onClick={handleClearClick}
                  variant="contained"
                  color="error"
                  startIcon={<ClearIcon />}
                >
                  filtry
                </Button>
              </Box>
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
    </Box>
  )
}