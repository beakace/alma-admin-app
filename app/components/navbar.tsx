import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Link, NavLink } from "@remix-run/react"

type NavbarProps = {
  isAuthenticated: boolean
}

export default function Navbar({ isAuthenticated }: NavbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            disabled
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SupervisorAccountIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Alma Admin</Link>
          </Typography>
          {isAuthenticated ? (
            <>
              <Button component={NavLink} to="/couples" color="inherit">
                Małżeństwa
              </Button>
              <Button component={NavLink} to="/events" color="inherit">
                Wydarzenia
              </Button>
              <form method="POST" action="/?index">
                <Button
                  type="submit"
                  color="inherit"
                  name="sign-out"
                  value="sign-out"
                >
                  Wyloguj się
                </Button>
              </form>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
