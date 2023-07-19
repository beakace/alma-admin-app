import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { Alert, Button } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import type { ActionArgs } from "@remix-run/node"
import { useActionData } from "@remix-run/react"
import Navbar from "~/components/navbar"
import { db } from "~/db/db.server"
import { login } from "~/db/session.server"

const theme = createTheme()

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const username = formData.get("username")?.toString()
  const password = formData.get("password")?.toString()
  if (!username || !password)
    return { error: "No username or password provided." }

  try {
    return await login(username, password, db, "/couples")
  } catch (error: unknown) {
    return {
      error: error instanceof Error ? error.message : JSON.stringify(error),
    }
  }
}

export default function SignIn() {
  const actionData = useActionData<typeof action>()
  const isActionDataError = Boolean(actionData)
  return (
    <ThemeProvider theme={theme}>
      <Navbar isAuthenticated={false} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logowanie
          </Typography>
          <Box component="form" method="POST" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nazwa użytkownika"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zaloguj się
            </Button>
          </Box>
        </Box>
        {isActionDataError ? (
          <Alert severity="error">Niepoprawne dane logowania</Alert>
        ) : null}
      </Container>
    </ThemeProvider>
  )
}
