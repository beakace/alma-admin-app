import type { GridColDef, GridCellParams } from "@mui/x-data-grid"
import { DataGrid, plPL } from "@mui/x-data-grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import clsx from "clsx"
import { Box, IconButton, Tooltip, Typography } from "@mui/material"
import { useState } from "react"
import { Edit, Delete } from "@mui/icons-material"
import { Link } from "@remix-run/react"

export default function DataTable({ couples }: any) {
  const [pageSize, setPageSize] = useState<number>(25)
  const [selectionModel, setSelectionModel] = useState<string[]>([])

  const handleSelectionModelChange = (newSelectionModel: any) => {
    setSelectionModel(newSelectionModel)
  }
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
    {
      field: "postalCode",
      headerName: "Kod pocztowy",
      minWidth: 85,
      flex: 1,
      renderHeader: () => (
        <Box>
          <Typography sx={{ fontSize: "15px" }}>Kod</Typography>

          <Typography sx={{ fontSize: "15px" }}>pocztowy</Typography>
        </Box>
      ),
    },
    { field: "city", headerName: "Miejscowość", minWidth: 130, flex: 1 },
    {
      field: "group",
      type: "string",
      headerName: "Grupa",
      minWidth: 65,
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
    { field: "coupleId", headerName: "ID", minWidth: 125, flex: 1 },
    {
      field: "birthYear",
      headerName: "Data urodzin",
      minWidth: 85,
      flex: 1,
      align: "center",
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
      renderHeader: () => (
        <Box>
          <Typography sx={{ fontSize: "15px" }}>Data</Typography>
          <Typography sx={{ fontSize: "15px" }}>urodzenia</Typography>
        </Box>
      ),
    },
    {
      field: "weddingYear",
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
      flex: 1,
      renderCell: (params) => {
        if (!params.row.invitedBy) {
          return ""
        }
        return (
          <Box>
            <Typography sx={{ fontSize: "15px" }}>
              {params.row.invitedBy.husband.lastName}{" "}
              {params.row.invitedBy.husband.firstName}{" "}
              {params.row.invitedBy.wife.firstName}
              {", "}
              {params.row.invitedBy.organizationUnitId}
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
    },
    {
      field: "actions",
      headerName: "Akcje",
      minWidth: 120,
      flex: 2.5,
      renderCell: (params) => (
        <Box>
          {selectionModel && selectionModel.includes(params.row.id) && (
            <>
              <Tooltip title="edytuj">
                <IconButton
                  onClick={handleSelectionModelChange}
                  component={Link}
                  to={`../couples/edit/${selectionModel[0]}`}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="usuń">
                <IconButton
                  onClick={handleSelectionModelChange}
                  component={Link}
                  to={`../couples/delete/${selectionModel[0]}`}
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
