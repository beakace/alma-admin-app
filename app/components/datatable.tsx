import {
  DataGrid,
  GridColDef,
  plPL,
  GridToolbar,
  GridCellParams,
} from "@mui/x-data-grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import TableActions from "./tableactions"
import { useState } from "react"
import clsx from "clsx"
import { Box } from "@mui/material"

const columns: GridColDef[] = [
  {
    field: "para",
    headerName: "Para",
    minWidth: 125,
    flex: 2,

    valueGetter: (params) =>
      params.row.wife.firstName +
      " " +
      params.row.wife.lastName +
      " " +
      "&" +
      " " +
      params.row.husband.firstName +
      " " +
      params.row.husband.lastName,
  },
  { field: "postalCode", headerName: "Kod pocztowy", minWidth: 110, flex: 1 },
  { field: "city", headerName: "Oddział", minWidth: 130, flex: 1 },
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
  { field: "id", headerName: "ID", minWidth: 120, flex: 1 },
  {
    field: "birthYear",
    headerName: "Data urodzin",
    minWidth: 100,
    flex: 1,
    valueGetter: (params) =>
      params.row.wife.birthYear +
      " " +
      "&" +
      " " +
      params.row.husband.birthYear,
  },
  { field: "weddingYear", headerName: "Data ślubu", minWidth: 90, flex: 1 },
  {
    field: "invitedBy",
    headerName: "Zaproszeni przez",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 120,
    flex: 2.5,
    valueGetter: (params) =>
      params.row.wife.email + " " + "&" + " " + params.row.husband.email,
  },
  {
    field: "actions",
    headerName: "Akcje",
    minWidth: 120,
    flex: 2.5,
    renderCell: (params) => <TableActions {...{ params }} />,
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
// const statuses = ["All", "A", "B", "C", "D", "S/X"]
export default function DataTable({ loaderData }: any) {
  // const [filterStatus, setFilterStatus] = useState(0)

  return (
    <div style={{ height: 400, width: "100%" }}>
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
              backgroundColor: "#BFBFBF",
            },
          }}
        >
          <DataGrid
            disableColumnFilter
            rows={loaderData.couples}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowHeight={() => "auto"}
          />
        </Box>
      </ThemeProvider>
    </div>
  )
}
