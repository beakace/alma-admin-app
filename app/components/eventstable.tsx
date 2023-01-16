import type { GridColDef, GridCellParams } from "@mui/x-data-grid"
import { DataGrid, plPL } from "@mui/x-data-grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import clsx from "clsx"
import {
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { Edit, Delete } from "@mui/icons-material"
import { Link } from "@remix-run/react"

const columns: GridColDef[] = [
  { field: "month", headerName: "Miesiąc", minWidth: 110, flex: 1 },
  { field: "year", headerName: "Rok", minWidth: 130, flex: 1 },
  {
    field: "organizationUnitId",
    headerName: "Oddział",
    minWidth: 130,
    flex: 1,
  },
]

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  plPL
)

export default function EventsTable({ almaEvents }: any) {
  const [pageSize, setPageSize] = useState<number>(25)

  return (
    <div>
      <Box>
        <div style={{ height: 800, width: "100%" }}>
          {" "}
          <ThemeProvider theme={theme}>
            <DataGrid
              sx={{ fontSize: "15px" }}
              // onSelectionModelChange={(columns) => console.log(columns)}
              // disableColumnFilter
              rows={almaEvents}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 15, 25, 50, 100]}
              // rowHeight={25}
              getRowHeight={() => "auto"}
              paginationMode="client"
            />
          </ThemeProvider>
        </div>
      </Box>
    </div>
  )
}
