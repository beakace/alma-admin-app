import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  FormControl,
  GlobalStyles,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  Typography,
} from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { type Group } from "@prisma/client"
import { redirect, type ActionArgs } from "@remix-run/node"
import { Form, useLoaderData, useParams } from "@remix-run/react"
import { useState } from "react"
import { db } from "~/db/db.server"
import ManIcon from "@mui/icons-material/Man"
import WomanIcon from "@mui/icons-material/Woman"
import WcIcon from "@mui/icons-material/Wc"

export const loader = async ({ params }: any): Promise<any> => {
  const id = params.id
  const invitedByCouples = await db.couple.findMany({
    select: {
      id: true,
      organizationUnitId: true,
      husband: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
      wife: {
        select: {
          firstName: true,
        },
      },
    },
  })

  const almaEvents = await db.almaEvent.findMany({
    select: {
      id: true,
      year: true,
      month: true,
      organizationUnitId: true,
    },
  })

  const organizationUnits = await db.organizationUnit.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  const couple = await db.couple.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      organizationUnitId: true,
      husband: true,
      wife: true,
      city: true,
      group: true,
      postalCode: true,
      weddingYear: true,
      comments: true,
      attendanceNumber: true,
      almaEventId: true,
      invitedById: true,
    },
  })

  return {
    invitedByCouples: invitedByCouples.map(
      ({ id, husband, wife, organizationUnitId }) => {
        return {
          id: id,
          label: `${husband.lastName} ${husband.firstName} ${wife.firstName}, ${organizationUnitId}`,
        }
      }
    ),
    almaEvents: almaEvents.map(({ id, year, month, organizationUnitId }) => {
      return {
        id: id,
        label: `${organizationUnitId}-${year}-${month}`,
      }
    }),
    organizationUnits: organizationUnits.map(({ id }) => {
      return { id: id, label: `${id}` }
    }),

    couple,
  }
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const formObject = Object.fromEntries(formData.entries())

  const almaEventForId = await db.almaEvent.findUnique({
    where: {
      id: String(formObject.almaEvent),
    },
  })

  await db.couple.update({
    where: {
      id: String(formObject.id),
    },
    data: {
      comments: String(formObject.comments),
      coupleId:
        String(formObject.organizationUnit) +
        "-" +
        almaEventForId?.organizationUnitId +
        "-" +
        almaEventForId?.year +
        "." +
        almaEventForId?.month +
        "-" +
        String(formObject.attendanceNumber),
      almaEvent: {
        connect: {
          id: String(formObject.almaEvent),
        },
      },
      organizationUnit: {
        connect: {
          id: Number(formObject.organizationUnit),
        },
      },
      attendanceNumber: Number(formObject.attendanceNumber),
      city: String(formObject.city),
      group: formObject.group as Group,
      postalCode: String(formObject.postalCode),
      weddingYear: Number(formObject.weddingYear),
      invitedBy: {
        connect: {
          id: String(formObject.invitedBy),
        },
      },
      wife: {
        create: {
          vocative: String(formObject.wifeVocative),
          church: Number(formObject.wifeChurch),
          email: String(formObject.wifeEmail),
          lastName: String(formObject.wifeLastName),
          firstName: String(formObject.wifeFirstName),
          phoneNumber: String(formObject.wifePhoneNumber),
          birthYear: Number(formObject.wifeBirthYear),
        },
      },
      husband: {
        create: {
          vocative: String(formObject.husbandVocative),
          church: Number(formObject.husbandChurch),
          email: String(formObject.husbandEmail),
          lastName: String(formObject.husbandLastName),
          firstName: String(formObject.husbandFirstName),
          phoneNumber: String(formObject.husbandPhoneNumber),
          birthYear: Number(formObject.husbandBirthYear),
        },
      },
    },
  })

  return redirect("/couples")
}

export default function EditCouple() {
  const theme = createTheme()
  const couple = useLoaderData().couple
  const almaEvents = useLoaderData().almaEvents
  const invitedByCouples = useLoaderData().invitedByCouples
  const { id } = useParams()

  const [group, setGroup] = useState(couple.group)
  const handleChange = (event: any) => {
    setGroup(event.target.value)
  }

  return (
    <Form method="post">
      <ThemeProvider theme={theme}>
        <Container component="main">
          <CssBaseline />
          <GlobalStyles styles={{ h4: { color: "black" } }} />
          <Typography
            sx={{ margin: "1rem" }}
            align="center"
            fontWeight="bold"
            component="h1"
            variant="h4"
          >
            EDYCJA PARY
          </Typography>
          <Box
            //box around whole form
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input type="hidden" name="id" value={id} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    "& > :not(style)": { m: 1, width: "18rem" },

                    margin: "3rem",
                    padding: "1rem",
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "rgba(227,242,253,0.1)",
                    boxShadow: "5px 5px 5px 5px rgba(144,202,249,0.2)",
                  }}
                >
                  <WomanIcon fontSize="large" />
                  <Typography
                    align="center"
                    fontWeight="bold"
                    component="h1"
                    variant="h5"
                  >
                    ŻONA
                  </Typography>
                  <TextField
                    name="wifeFirstName"
                    id="wife.firstName"
                    label="Imię"
                    variant="outlined"
                    defaultValue={couple.wife.firstName}
                    required
                  />
                  <TextField
                    name="wifeVocative"
                    id="wife.vocative"
                    label="Wołacz"
                    variant="outlined"
                    defaultValue={couple.wife.vocative}
                    required
                  />
                  <TextField
                    name="wifeLastName"
                    id="wife.lastName"
                    label="Nazwisko"
                    variant="outlined"
                    defaultValue={couple.wife.lastName}
                    required
                  />
                  <TextField
                    name="wifePhoneNumber"
                    type="tel"
                    id="wife.phoneNumber"
                    label="Nr telefonu"
                    variant="outlined"
                    defaultValue={couple.wife.phoneNumber}
                    required
                  />
                  <TextField
                    name="wifeEmail"
                    type="email"
                    id="wife.email"
                    label="Email"
                    variant="outlined"
                    defaultValue={couple.wife.email}
                  />
                  <TextField
                    type="number"
                    InputProps={{
                      inputProps: {
                        max: 2010,
                        min: 1920,
                      },
                    }}
                    name="wifeBirthYear"
                    id="wife.birthYear"
                    label="Rok urodzenia"
                    variant="outlined"
                    defaultValue={couple.wife.birthYear}
                    required
                  />
                  <TextField
                    type="number"
                    name="wifeChurch"
                    id="wife.church"
                    label="Kościół"
                    variant="outlined"
                    defaultValue={couple.wife.church}
                    required
                  />
                </Box>
                <Box
                  sx={{
                    "& > :not(style)": { m: 1, width: "18rem" },
                    margin: "3rem",
                    padding: "1rem",
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "rgba(227,242,253,0.1)",
                    boxShadow: "5px 5px 5px 5px rgba(144,202,249,0.2)",
                  }}
                >
                  <ManIcon fontSize="large" />
                  <Typography
                    align="center"
                    fontWeight="bold"
                    component="h1"
                    variant="h5"
                  >
                    MĄŻ
                  </Typography>
                  <TextField
                    name="husbandFirstName"
                    id="husband.firstName"
                    label="Imię"
                    variant="outlined"
                    defaultValue={couple.husband.firstName}
                    required
                  />
                  <TextField
                    name="husbandVocative"
                    id="husband.vocative"
                    label="Wołacz"
                    variant="outlined"
                    defaultValue={couple.husband.vocative}
                    required
                  />
                  <TextField
                    name="husbandLastName"
                    id="husband.lastName"
                    label="Nazwisko"
                    variant="outlined"
                    defaultValue={couple.husband.lastName}
                    required
                  />
                  <TextField
                    name="husbandPhoneNumber"
                    type="tel"
                    id="husband.phoneNumber"
                    label="Nr telefonu"
                    variant="outlined"
                    defaultValue={couple.husband.phoneNumber}
                    required
                  />
                  <TextField
                    name="husbandEmail"
                    type="email"
                    id="husband.email"
                    label="Email"
                    variant="outlined"
                    defaultValue={couple.husband.email}
                  />

                  <TextField
                    type="number"
                    InputProps={{
                      inputProps: {
                        max: 2010,
                        min: 1920,
                      },
                    }}
                    name="husbandBirthYear"
                    id="husband.birthYear"
                    label="Rok urodzenia"
                    variant="outlined"
                    defaultValue={couple.husband.birthYear}
                    required
                  />
                  <TextField
                    type="number"
                    name="husbandChurch"
                    id="husband.church"
                    label="Kościół"
                    variant="outlined"
                    defaultValue={couple.husband.church}
                    required
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "18rem" },
                  margin: "3rem",
                  padding: "1rem",
                  marginTop: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "rgba(227,242,253,0.1)",
                  boxShadow: "5px 5px 5px 5px rgba(144,202,249,0.2)",
                }}
              >
                <WcIcon fontSize="large" />
                <Typography
                  align="center"
                  fontWeight="bold"
                  component="h1"
                  variant="h5"
                >
                  WSPÓLNE
                </Typography>
                <TextField
                  name="postalCode"
                  id="postalCode"
                  label="Kod pocztowy"
                  variant="outlined"
                  defaultValue={couple.postalCode}
                  required
                />
                <TextField
                  type="number"
                  InputProps={{
                    inputProps: {
                      max: 2100,
                      min: 1920,
                    },
                  }}
                  name="weddingYear"
                  id="weddingYear"
                  label="Rok ślubu"
                  variant="outlined"
                  defaultValue={couple.weddingYear}
                  required
                />
                <TextField
                  type="number"
                  name="attendanceNumber"
                  id="attendanceNumber"
                  label="Numer indentyfikacyjny"
                  variant="outlined"
                  defaultValue={couple.attendanceNumber}
                />
                <FormControl fullWidth>
                  <InputLabel id="group">Grupa</InputLabel>
                  <Select
                    name="group"
                    labelId="group-label"
                    id="group"
                    label="Grupa"
                    onChange={handleChange}
                    value={group}
                    defaultValue={couple.group}
                  >
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"C"}>C</MenuItem>
                    <MenuItem value={"D"}>D</MenuItem>
                    <MenuItem value={"S"}>S</MenuItem>
                    <MenuItem value={"X"}>X</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="organizationUnit-label">Oddział</InputLabel>
                  <Select
                    name="organizationUnit"
                    labelId="organizationUnit-label"
                    id="organizationUnit"
                    label="Oddział"
                    defaultValue={couple.organizationUnitId}
                  >
                    <MenuItem value={1}>Wrocław</MenuItem>
                    <MenuItem value={2}>Warszawa</MenuItem>
                    <MenuItem value={3}>Olsztyn</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    name="city"
                    id="city"
                    label="Miejscowość"
                    defaultValue={couple.city}
                  ></TextField>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="almaEvent-label">Event</InputLabel>
                  <Select
                    name="almaEvent"
                    labelId="almaEvent-label"
                    id="almaEvent"
                    label="Event"
                    defaultValue={couple.almaEventId}
                  >
                    {almaEvents.map(({ id, label }: any) => (
                      <MenuItem key={id} id={id} value={id}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="invitedBy-select-label">
                    Zaproszeni przez
                  </InputLabel>
                  <Select
                    name="invitedBy"
                    labelId="invitedBy-select-label"
                    id="invitedBy-select"
                    label="Zaproszeni przez"
                    defaultValue={couple.invitedById}
                  >
                    {invitedByCouples.map(({ id, label }: any) => (
                      <MenuItem key={id} id={id} value={id}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  name="comments"
                  id="comments"
                  label="Uwagi"
                  multiline
                  rows={4}
                  defaultValue={couple.comments}
                />
              </Box>
            </Box>
            <Box sx={{ margin: "1rem" }}>
              <Button size="large" variant="contained" type="submit">
                Zaktualizuj dane małżeństwa
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Form>
  )
}
