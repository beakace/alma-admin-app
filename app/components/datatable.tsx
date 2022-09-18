import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  plPL,
} from "@mui/x-data-grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { plPL as coreplPL } from "@mui/material/locale"
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
  { field: "postalCode", headerName: "Kod pocztowy", minWidth: 130, flex: 1 },
  { field: "city", headerName: "Oddział", minWidth: 130, flex: 1 },
  { field: "group", headerName: "Grupa", minWidth: 50, flex: 1 },
  { field: "id", headerName: "ID", minWidth: 120, flex: 1 },
  {
    field: "birthYear",
    headerName: "Data urodzin",
    minWidth: 130,
    flex: 1,
    valueGetter: (params) =>
      params.row.wife.birthYear +
      " " +
      "&" +
      " " +
      params.row.husband.birthYear,
  },
  { field: "weddingYear", headerName: "Data Ślubu", minWidth: 120, flex: 1 },
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
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params: GridValueGetterParams) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
]

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  plPL
)
export default function DataTable({ loaderData }: any) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={loaderData.couples}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowHeight={() => "auto"}
        />{" "}
      </ThemeProvider>
    </div>
  )
}
