import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"
import { NavLink } from "@remix-run/react"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            disabled
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SupervisorAccountIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alma Admin
          </Typography>
          <Button component={NavLink} to="/couples" color="inherit">
            Małżeństwa
          </Button>
          <Button component={NavLink} to="/events" color="inherit">
            Wydarzenia
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
