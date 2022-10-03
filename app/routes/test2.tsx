import TextField from "@mui/material/TextField"
import { Box } from "@mui/system"
import { Stack } from "@mui/material"
import Button from "@mui/material/Button"
import { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"
import { useLoaderData } from "@remix-run/react"

function SearchBar() {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get("query")

  const newCouples = useLoaderData().couples

  useEffect(() => {
    if (searchQuery) {
      setLoading(true)
      fetch(newCouples.city)
        .then((response) => response.json())
        .then((data) => {
          data = newCouples
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [searchQuery])

  const changeHandler = (event: any) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (searchQuery) {
      setQuery(searchQuery)
    }
  }, [searchQuery])

  const startSearch = useCallback(
    (event) => {
      event.preventDefault()
      setSearchParams({ query: query }, { replace: true })
    },
    [query, setSearchParams]
  )

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Szukaj..."
        value={query}
        onChange={changeHandler}
        size="small"
        sx={{
          mt: "1rem",
          height: "3rem",
        }}
      />

      <Button
        type="submit"
        onClick={startSearch}
        variant="contained"
        size="large"
        sx={{
          mt: "1rem",
          height: "2.5rem",
        }}
      >
        <SearchIcon />
      </Button>
    </Box>
  )
}

export default SearchBar
