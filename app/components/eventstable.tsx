import type { GridColDef } from "@mui/x-data-grid"
import { DataGrid, plPL } from "@mui/x-data-grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import type { AlmaEvent, OrganizationUnit } from "@prisma/client"

const columns: GridColDef<
  AlmaEvent & {
    organizationUnit: OrganizationUnit
  }
>[] = [
  {
    field: "month",
    headerName: "Miesiąc",
    minWidth: 110,
    flex: 1,
    renderCell: (params) => (
      <Box>
        <Typography sx={{ fontSize: "15px" }}>
          {params.row.month.toString().padStart(2, "0")}
        </Typography>
      </Box>
    ),
  },
  { field: "year", headerName: "Rok", minWidth: 130, flex: 1 },
  {
    field: "organizationUnitId",
    headerName: "Nr Bazy",
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

type EventsTableProps = {
  almaEvents: (AlmaEvent & {
    organizationUnit: OrganizationUnit
  })[]
}

export default function EventsTable({ almaEvents }: EventsTableProps) {
  const [pageSize, setPageSize] = useState<number>(25)

  return (
    <Box sx={{ height: 800, width: "100%" }}>
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
          rowHeight={50}
          // getRowHeight={() => "auto"}
          paginationMode="client"
        />
      </ThemeProvider>
    </Box>
  )
}
