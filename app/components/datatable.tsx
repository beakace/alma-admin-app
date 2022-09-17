import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

const columns: GridColDef[] = [
  {
    field: "wife",
    headerName: "Para",
    minWidth: 125,
    flex: 2,
  },
  { field: "postalCode", headerName: "Kod pocztowy", minWidth: 130, flex: 1 },
  { field: "city", headerName: "Oddział", minWidth: 130, flex: 1 },
  { field: "group", headerName: "Grupa", minWidth: 50, flex: 1 },
  { field: "id", headerName: "ID", minWidth: 120, flex: 1 },
  { field: "birthYear", headerName: "Data urodzin", minWidth: 130, flex: 1 },
  { field: "weddingYear", headerName: "Data Ślubu", minWidth: 120, flex: 1 },
  {
    field: "invitedBy",
    headerName: "Zaproszeni przez",
    minWidth: 120,
    flex: 1,
  },
  { field: "email", headerName: "Email", minWidth: 120, flex: 1 },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 90,
  //   },
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

export default function DataTable({ loaderData }: any) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={loaderData.couples}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
