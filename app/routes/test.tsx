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
import { useState } from "react"

export default function Index() {
  const loaderData = useLoaderData()
  const [isChecked, setIsChecked] = useState(false)
  const handleClearClick = () => {
    setIsChecked(false)
  }
  return (
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
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
            />
          }
          label="Bez maila"
          labelPlacement="end"
        />
        <FormControlLabel
          value="A"
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
            />
          }
          label="A"
          labelPlacement="end"
        />
        <FormControlLabel
          value="B"
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
            />
          }
          label="B"
          labelPlacement="end"
        />
        <FormControlLabel
          value="C"
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
            />
          }
          label="C"
          labelPlacement="end"
        />
        <FormControlLabel
          value="D"
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
            />
          }
          label="D"
          labelPlacement="end"
        />
        <FormControlLabel
          value="S/X"
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
            />
          }
          label="S/X"
          labelPlacement="end"
        />
        <Button
          sx={{ visibility: isChecked ? "visible" : "hidden" }}
          onClick={handleClearClick}
          variant="outlined"
          startIcon={<ClearIcon />}
        >
          Wyczyść filtry
        </Button>
      </FormGroup>
    </FormControl>
  )
}
