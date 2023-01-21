import type { GridColDef, GridCellParams, GridRowId } from "@mui/x-data-grid"
import { DataGrid, plPL } from "@mui/x-data-grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import clsx from "clsx"
import { Box, IconButton, Tooltip, Typography } from "@mui/material"
import { useCallback, useState } from "react"
import { Edit, Delete } from "@mui/icons-material"
import { Link } from "@remix-run/react"

const columns: GridColDef[] = [
  {
    field: "para",
    headerName: "Małżeństwo",
    minWidth: 125,
    flex: 2,
    renderCell: (params) => (
      <Box>
        <Typography sx={{ fontSize: "15px" }}>
          {params.row.wife.firstName} {params.row.wife.lastName}
        </Typography>

        <Typography sx={{ fontSize: "15px" }}>
          {params.row.husband.firstName} {params.row.husband.lastName}
        </Typography>
      </Box>
    ),
  },
  { field: "postalCode", headerName: "Kod pocztowy", minWidth: 110, flex: 1 },
  { field: "city", headerName: "Miejscowość", minWidth: 130, flex: 1 },
  {
    field: "group",
    type: "string",
    headerName: "Grupa",
    minWidth: 60,
    flex: 1,
    align: "center",
    cellClassName: (params: GridCellParams<string>) => {
      if (params.value == null) {
        return ""
      }
      return clsx("alma-app", {
        A: params.value == "A",
        B: params.value == "B",
        C: params.value == "C",
        D: params.value == "D",
        S: params.value == "S",
        X: params.value == "X",
      })
    },
  },
  { field: "coupleId", headerName: "ID", minWidth: 120, flex: 1 },
  {
    field: "birthYear",
    headerName: "Data urodzin",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => (
      <Box>
        <Typography sx={{ fontSize: "15px" }}>
          {params.row.wife.birthYear}
        </Typography>

        <Typography sx={{ fontSize: "15px" }}>
          {params.row.husband.birthYear}
        </Typography>
      </Box>
    ),
  },
  { field: "weddingYear", headerName: "Data ślubu", minWidth: 90, flex: 1 },
  {
    field: "invitedBy",
    headerName: "Zaproszeni przez",
    minWidth: 120,
    flex: 1,
    renderCell: (params) => {
      return (
        <Box>
          <Typography sx={{ fontSize: "15px" }}>
            {params.row.invitedBy?.husband.lastName}{" "}
            {params.row.invitedBy?.husband.firstName}{" "}
            {params.row.invitedBy?.wife.firstName}
            {", "}
            {params.row.invitedBy?.organizationUnitId}
          </Typography>
        </Box>
      )
    },
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 120,
    flex: 2.5,
    renderCell: (params) => (
      <Box>
        <Typography sx={{ fontSize: "15px" }}>
          {params.row.wife.email}
        </Typography>

        <Typography sx={{ fontSize: "15px" }}>
          {params.row.husband.email}
        </Typography>
      </Box>
    ),
    // valueGetter: (params) =>
    //   params.row.wife.email + " " + "&" + " " + params.row.husband.email,
  },
  {
    field: "actions",
    headerName: "Akcje",
    minWidth: 120,
    flex: 2.5,
    renderCell: () => (
      <Box>
        <Tooltip title="edytuj">
          <IconButton component={Link} to="/edit">
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="usuń">
          <IconButton onClick={() => {}}>
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
    ),
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

export default function DataTable({ couples }: any) {
  const [pageSize, setPageSize] = useState<number>(25)

  return (
    <div style={{ height: 800, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            // color: "#1a3e72",
            // fontWeight: "600", nie działa to, do przeniesienia w odpowiednie miejsce jak ogarnę gdzie :)
            "& .alma-app.A": {
              backgroundColor: "#FFB0B2",
            },
            "& .alma-app.B": {
              backgroundColor: "#B0B2FF",
            },
            "& .alma-app.C": {
              backgroundColor: "#B2FFB0",
            },
            "& .alma-app.D": {
              backgroundColor: "#FEFFAF",
            },
            "& .alma-app.S": {
              backgroundColor: "#BDC3C7",
            },
            "& .alma-app.X": {
              backgroundColor: "#3E3C3C",
            },
          }}
        >
          <DataGrid
            sx={{ fontSize: "15px" }}
            onSelectionModelChange={(columns) => console.log(columns)}
            disableColumnFilter
            disableColumnSelector
            disableColumnMenu
            // disableSelectionOnClick
            rows={couples}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 15, 25, 50, 100]}
            getRowHeight={() => "auto"}
            paginationMode="client"
          />
        </Box>
      </ThemeProvider>
    </div>
  )
}
