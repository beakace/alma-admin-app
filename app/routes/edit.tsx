import { Box, Button, Input, MenuItem, Select, TextField } from "@mui/material"
import { useForm, Controller, SubmitHandler } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Form } from "@remix-run/react"
import { FC } from "react"

interface IFormInput {
  wifeFirstName: string
  wifeLastName: string
  wifePhoneNumber: number
  wifeEmail: string
  wifeBirthYear: number
  husbandFirstName: string
  husbandLastName: string
  husbandPhoneNumber: string
  husbandEmail: string
  husbandBirthYear: number
  weddingYear: number
  city: string
  invitedBy: string
}
const schema = Yup.object().shape({
  wifeFirstName: Yup.string().required("Imię jest wymagane"),
  wifeLastName: Yup.string().required("Nazwisko jest wymagane"),
  wifePhoneNumber: Yup.number().required("Numer telefonu jest wymagany"),
  wifeEmail: Yup.string()
    .required("Email jest wymagany")
    .email("Email jest nieprawidłowy"),
  wifeBirthYear: Yup.number().required("Rok urodzenia jest wymagany"),
  husbandFirstName: Yup.string().required("Imię jest wymagane"),
  husbandLastName: Yup.string().required("Nazwisko jest wymagane"),
  husbandPhoneNumber: Yup.number().required("Numer telefonu jest wymagany"),
  husbandEmail: Yup.string()
    .required("Email jest wymagany")
    .email("Email jest nieprawidłowy"),
  husbandBirthYear: Yup.number().required("Rok urodzenia jest wymagany"),
  weddingYear: Yup.number().required("Rok ślubu jest wymagany"),
  city: Yup.number().required("Miasto jest wymagane"),
  // invitedBy: Yup.number().required("To pole jest wymagane"),
  // username: Yup.string()
  //   .required("Username is required")
  //   .min(6, "Username must be at least 6 characters")
  //   .max(20, "Username must not exceed 20 characters"),
  // email: Yup.string().required("Email is required").email("Email is invalid"),
})

const EditForm: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    console.log("data submitted: ", data)

  console.log(watch("husbandEmail"))
  console.log("errors are", errors)

  return (
    <div>
      {" "}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <h1>Żona</h1>
          <Controller
            name="wifeFirstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Imię"
                {...field}
                error={!!errors.wifeFirstName}
                helperText={
                  errors.wifeFirstName ? errors.wifeFirstName?.message : ""
                }
              />
            )}
          />
          <Controller
            name="wifeLastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Nazwisko"
                {...field}
                error={!!errors.wifeLastName}
                helperText={
                  errors.wifeLastName ? errors.wifeLastName?.message : ""
                }
              />
            )}
          />
          <Controller
            name="wifePhoneNumber"
            control={control}
            render={({ field }) => (
              <TextField
                label="Numer telefonu"
                {...field}
                error={!!errors.wifePhoneNumber}
                helperText={
                  errors.wifePhoneNumber ? errors.wifePhoneNumber?.message : ""
                }
              />
            )}
          />
          <Controller
            name="wifeEmail"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Email"
                {...field}
                error={!!errors.wifeEmail}
                helperText={errors.wifeEmail ? errors.wifeEmail?.message : ""}
              />
            )}
          />
          <Controller
            name="wifeBirthYear"
            control={control}
            render={({ field }) => (
              <TextField
                label="Rok urodzenia"
                {...field}
                error={!!errors.wifeBirthYear}
                helperText={
                  errors.wifeBirthYear ? errors.wifeBirthYear?.message : ""
                }
              />
            )}
          />
          <h1>Mąż</h1>
          <Controller
            name="husbandFirstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Imię"
                {...field}
                error={!!errors.husbandFirstName}
                helperText={
                  errors.husbandFirstName
                    ? errors.husbandFirstName?.message
                    : ""
                }
              />
            )}
          />
          <Controller
            name="husbandLastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Nazwisko"
                {...field}
                error={!!errors.husbandLastName}
                helperText={
                  errors.husbandLastName ? errors.husbandLastName?.message : ""
                }
              />
            )}
          />
          <Controller
            name="husbandPhoneNumber"
            control={control}
            render={({ field }) => (
              <TextField
                label="Numer telefonu"
                {...field}
                error={!!errors.husbandPhoneNumber}
                helperText={
                  errors.husbandPhoneNumber
                    ? errors.husbandPhoneNumber?.message
                    : ""
                }
              />
            )}
          />
          <Controller
            name="husbandEmail"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.husbandEmail}
                helperText={
                  errors.husbandEmail ? errors.husbandEmail?.message : ""
                }
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="husbandBirthYear"
            control={control}
            render={({ field }) => (
              <TextField
                label="Rok urodzenia"
                {...field}
                error={!!errors.husbandBirthYear}
                helperText={
                  errors.husbandBirthYear
                    ? errors.husbandBirthYear?.message
                    : ""
                }
              />
            )}
          />

          <h1>Wspólne</h1>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select label="Oddział" {...field} name="city">
                <MenuItem value={1}>Wrocław</MenuItem>
                <MenuItem value={2}>Warszawa</MenuItem>
                <MenuItem value={3}>Białystok</MenuItem>
              </Select>
            )}
          />
          <Controller
            name="weddingYear"
            control={control}
            render={({ field }) => (
              <TextField
                type="number"
                label="Rok urodzenia"
                {...field}
                error={!!errors.weddingYear}
                helperText={
                  errors.weddingYear ? errors.weddingYear?.message : ""
                }
              />
            )}
          />
          <p></p>
          <Button size="large" variant="outlined" type="submit">
            Submit
          </Button>
        </Box>
      </Form>
      {""}
    </div>
  )
}

export default EditForm
