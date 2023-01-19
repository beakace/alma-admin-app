import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { NavLink } from "@remix-run/react"
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
