import * as React from "react"
import dayjs, { Dayjs } from "dayjs"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

export default function WeddingYearPicker() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs())

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
          disableFuture
          views={["year"]}
          label="rok ślubu"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  )
}
