import { DataGrid, GridColDef, plPL, GridCellParams } from "@mui/x-data-grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import clsx from "clsx"
import { Box, Button, IconButton, Tooltip } from "@mui/material"
import { useState } from "react"
import { Edit, Delete } from "@mui/icons-material"
import { Link } from "@remix-run/react"
import { randomId } from "@mui/x-data-grid-generator"
import { Couple } from "@prisma/client"

const columns: GridColDef[] = [
  {
    field: "para",
    headerName: "Małżeństwo",
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
  const [updatedRows, setUpdatedRows] = useState(couples)
  const arr = [
    {
      id: "2-1-2002.01-15",
      city: "Olsztyn",
      group: "A",
      postalCode: "50-123",
      weddingYear: 2000,
      wifeId: "1234",
      husbandId: "5678",
      invitedById: null,
      wife: {
        id: randomId(),
        email: "email@email-wife.com",
        lastName: "Jolie",
        firstName: "Angelina",
        birthYear: 1980,
        phoneNumber: "123456789",
      },
      husband: {
        id: randomId(),
        email: "husband@email.com",
        lastName: "Pitt",
        firstName: "Brad",
        birthYear: 1975,
        phoneNumber: "987654321",
      },
    },
  ]
  const handleClick = () => {
    console.log("our initial rows ", { updatedRows })
    // const arr3 = [...updatedRows, ...arr]
    setUpdatedRows([...updatedRows, ...arr])
    console.log("our merged rows", updatedRows)
  }

  // console.log("couples right now: ", { couples })
  interface CouplesData {
    couple: {
      id: string
      city: string
      group: string
      postalCode: string
      weddingYear: string
      wifeId: string
      husbandId: string
      invitedById: null
      wife: {
        id: number
        email: string
        lastName: string
        firstName: string
        birthYear: number
        phoneNumber: number
      }
      husband: {
        id: number
        email: string
        lastName: string
        firstName: string
        birthYear: number
        phoneNumber: number
      }
    }
  }
  // trying to add state to update rows

  // const handleClick = () => {
  //   // setUpdatedRows({newRow})
  // }
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
              backgroundColor: "#BFBFBF",
            },
          }}
        >
          <DataGrid
            onSelectionModelChange={(columns) => console.log(columns)}
            disableColumnFilter
            // disableColumnSelector
            // disableColumnMenu
            // disableSelectionOnClick
            rows={couples}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 15, 25, 50, 100]}
            getRowHeight={() => "auto"}
            paginationMode="client"
          />
          <Button size="small" onClick={handleClick}>
            Add a row
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  )
}
