import { Delete, Edit } from "@mui/icons-material"
import { Box, IconButton, Tooltip, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import type { GridCellParams, GridColDef } from "@mui/x-data-grid"
import { DataGrid, plPL } from "@mui/x-data-grid"
import type {
  AlmaEvent,
  Couple,
  OrganizationUnit,
  Person,
} from "@prisma/client"
import { Link } from "@remix-run/react"
import clsx from "clsx"
import { useState } from "react"

type FilteredCouple = Couple & {
  organizationUnit: OrganizationUnit
  husband: Person
  wife: Person
  almaEvent: AlmaEvent
}

type DataTableProps = {
  couples: FilteredCouple[]
  userOrganizationUnitId: number
}

export default function DataTable({
  couples,
  userOrganizationUnitId,
}: DataTableProps) {
  const [pageSize, setPageSize] = useState<number>(25)
  const [selectionModel, setSelectionModel] = useState<string[]>([])

  const handleSelectionModelChange = (newSelectionModel: any) => {
    setSelectionModel(newSelectionModel)
  }
  const columns: GridColDef<FilteredCouple>[] = [
    {
      field: "para",
      headerName: "Małżeństwo",
      minWidth: 125,
      flex: 2,
      renderCell: (params) => (
        <Box>
          <Typography sx={{ fontSize: "15px" }}>
            {params.row.wife.lastName} {params.row.wife.firstName}
          </Typography>

          <Typography sx={{ fontSize: "15px" }}>
            {params.row.husband.lastName} {params.row.husband.firstName}
          </Typography>
        </Box>
      ),
    },
    {
      field: "phoneNumber",
      headerName: "Telefon",
      minWidth: 125,
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Typography sx={{ fontSize: "15px" }}>
            {params.row.wife.phoneNumber}
          </Typography>

          <Typography sx={{ fontSize: "15px" }}>
            {params.row.husband.phoneNumber}
          </Typography>
        </Box>
      ),
    },
    {
      field: "postalCode",
      headerName: "Kod pocztowy",
      minWidth: 85,
      flex: 0.7,
      renderHeader: () => (
        <Box>
          <Typography sx={{ fontSize: "15px" }}>Kod</Typography>

          <Typography sx={{ fontSize: "15px" }}>pocztowy</Typography>
        </Box>
      ),
    },
    { field: "city", headerName: "Miejscowość", minWidth: 140, flex: 2 },
    {
      field: "group",
      type: "string",
      headerName: "Grupa",
      minWidth: 65,
      flex: 0.5,
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
    { field: "coupleId", headerName: "ID", minWidth: 125, flex: 1 },
    {
      field: "birthYear",
      headerName: "Data urodzin",
      minWidth: 85,
      flex: 1,
      align: "center",
      renderCell: (params) => (
        <Box>
          <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
            {params.row.wife.birthYear}
          </Typography>

          <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
            {params.row.husband.birthYear}
          </Typography>
        </Box>
      ),
      renderHeader: () => (
        <Box>
          <Typography sx={{ fontSize: "15px" }}>Data</Typography>
          <Typography sx={{ fontSize: "15px" }}>urodzenia</Typography>
        </Box>
      ),
    },
    {
      field: "weddingDate",
      headerName: "Data ślubu",
      minWidth: 85,
      flex: 1,
      align: "center",
      renderHeader: () => (
        <Box>
          <Typography sx={{ fontSize: "15px" }}>Data</Typography>
          <Typography sx={{ fontSize: "15px" }}>ślubu</Typography>
        </Box>
      ),
    },
    {
      field: "invitedBy",
      headerName: "Zaproszeni przez",
      minWidth: 140,
      flex: 2,
      renderCell: (params) => {
        if (!params.row.invitedBy) {
          return ""
        }
        return (
          <Box>
            <Typography sx={{ fontSize: "15px" }}>
              {params.row.invitedBy}
            </Typography>
          </Box>
        )
      },
      renderHeader: () => (
        <Box>
          <Typography sx={{ fontSize: "15px" }}>Zaproszeni</Typography>
          <Typography sx={{ fontSize: "15px" }}>przez</Typography>
        </Box>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 120,
      flex: 2,
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
    },
    {
      field: "actions",
      headerName: "Akcje",
      minWidth: 120,
      flex: 1,
      renderCell: (params) => (
        <Box>
          {selectionModel &&
            selectionModel.includes(params.row.id) &&
            userOrganizationUnitId === params.row.organizationUnitId && (
              <>
                <Tooltip title="Edytuj">
                  <IconButton
                    onClick={handleSelectionModelChange}
                    component={Link}
                    to={`/couples/${params.id}/edit`}
                  >
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Usuń">
                  <IconButton
                    onClick={handleSelectionModelChange}
                    component={Link}
                    to={`/couples/${params.id}/delete`}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </>
            )}
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

  return (
    <div style={{ height: 1000, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
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
            // onSelectionModelChange={(columns) => console.log(columns)}
            disableColumnFilter
            disableColumnSelector
            disableColumnMenu
            onSelectionModelChange={handleSelectionModelChange}
            selectionModel={selectionModel}
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
