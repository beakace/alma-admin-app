import AddIcon from "@mui/icons-material/Add"
import ClearIcon from "@mui/icons-material/Clear"
import EventIcon from "@mui/icons-material/Event"
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
import { NavLink } from "@remix-run/react"
import Couples from "../routes/couples"
import Events from "../routes/events"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"

export default function Navbar() {
  return (
    <Box>
      <Button
        style={{
          paddingLeft: "0.2rem",
        }}
        size="small"
        variant="contained"
        component={NavLink}
        to="/couples"
      >
        <ArrowCircleDownIcon sx={{ margin: "0" }} /> Małżeństwa
      </Button>{" "}
      <Button
        style={{
          paddingLeft: "0.2rem",
        }}
        size="small"
        variant="contained"
        component={NavLink}
        to="/events"
      >
        <ArrowCircleDownIcon sx={{ margin: "0" }} /> Wydarzenia Alma
      </Button>{" "}
    </Box>
  )
}
