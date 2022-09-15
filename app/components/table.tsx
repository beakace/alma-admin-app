import * as React from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { styled } from "@mui/material/styles"
import TableContainer from "@mui/material/TableContainer"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import FirstPageIcon from "@mui/icons-material/FirstPage"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import LastPageIcon from "@mui/icons-material/LastPage"
import TableHead from "@mui/material/TableHead"
import { maxWidth } from "@mui/system"
import { LoaderFunction } from "@remix-run/cloudflare"
import { useLoaderData, Link } from "@remix-run/react"
import { CoupleWithSpouses } from "~/db/couples-db.server"

// export const loader: LoaderFunction = async (): Promise<LoaderData> => {
//   return {
//     couples: [
//       {
//         id: "2-1-2005.01-15",
//         city: "Wrocław",
//         group: "A",
//         postalCode: "50-123",
//         weddingYear: 2000,
//         wifeId: "1234",
//         husbandId: "5678",
//         invitedById: null,
//         wife: {
//           id: "1234",
//           email: "email@email-wife.com",
//           lastName: "Kowalska",
//           firstName: "Anna",
//           birthYear: 1980,
//           phoneNumber: "123456789",
//         },
//         husband: {
//           id: "123",
//           email: "husband@email.com",
//           lastName: "Kowalski",
//           firstName: "Jan",
//           birthYear: 1975,
//           phoneNumber: "987654321",
//         },
//       },
//       {
//         id: "2-1-2006.01-15",
//         city: "Wrocław",
//         group: "B",
//         postalCode: "50-123",
//         weddingYear: 2001,
//         wifeId: "12340",
//         husbandId: "56780",
//         invitedById: null,
//         wife: {
//           id: "12340",
//           email: "email2@email-wife.com",
//           lastName: "Nowak",
//           firstName: "Grazyna",
//           birthYear: 1981,
//           phoneNumber: "123456780",
//         },
//         husband: {
//           id: "1230",
//           email: "husband2@email.com",
//           lastName: "Nowak",
//           firstName: "Janusz",
//           birthYear: 1976,
//           phoneNumber: "987654320",
//         },
//       },
//     ],
//   }
// }

// type LoaderData = {
//   couples: CoupleWithSpouses[]
// }

// const loaderData = useLoaderData()

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))
interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

export default function MyTable(props: any) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - props.loaderData.couples.length)
      : 0

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nazwisko</StyledTableCell>
            <StyledTableCell align="right">Imię&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Kod pocztowy&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Miasto&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Grupa&nbsp;</StyledTableCell>
            <StyledTableCell align="right">ID&nbsp;</StyledTableCell>
            <StyledTableCell align="right">
              Zaproszeni przez&nbsp;
            </StyledTableCell>
            <StyledTableCell align="right">Data urodzin&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Data ślubu&nbsp;</StyledTableCell>
            <StyledTableCell align="right">email&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Akcje&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? props.loaderData.couples.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : props.loaderData.couples
          ).loaderData.couples.map((couple: any) => (
            <TableRow key={couple.husbandId}>
              <TableCell component="th" scope="row">
                {couple.husband.lastName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {couple.husband.firstName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {couple.postalCode}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {couple.city}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {couple.group}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {couple.id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {couple.invitedById}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {couple.birthYear}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {couple.weddingYear}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {couple.email}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              labelDisplayedRows={({ from, to, count }) => {
                return `${from}–${to} z ${
                  count !== -1 ? count : `więcej niż ${to}`
                }`
              }}
              labelRowsPerPage="Wierszy na stronę:"
              rowsPerPageOptions={[5, 10, 25, 50]}
              colSpan={50}
              count={props.loaderData.couples.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
