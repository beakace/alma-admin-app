import { LoaderFunction } from "@remix-run/cloudflare"
import { useLoaderData, Link } from "@remix-run/react"

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

export default function Index() {
  const loaderData = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Alma</h1>

      <Button variant="contained" component={Link} to="/">
        Go to the main page
      </Button>
    </div>
  )
}
