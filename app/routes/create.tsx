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
import { Form, useLoaderData } from "@remix-run/react"
import { useState } from "react"
import { db } from "~/db/db.server"
import ManIcon from "@mui/icons-material/Man"
import WomanIcon from "@mui/icons-material/Woman"
import WcIcon from "@mui/icons-material/Wc"

export const loader = async (): Promise<any> => {
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
      return {
        id: id,
        label: `${id}`,
      }
    }),
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

  await db.couple.create({
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

export default function Create() {
  const theme = createTheme()
  const [group, setGroup] = useState("")
  const handleChange = (event: any) => {
    setGroup(event.target.value)
  }
  const almaEvents = useLoaderData().almaEvents

  const invitedByCouples = useLoaderData().invitedByCouples

  return (
    <Form method="post">
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          // maxWidth=""
          sx={
            {
              // brder: "3px solid red",
            }
          }
        >
          <CssBaseline />

          <GlobalStyles styles={{ h4: { color: "black" } }} />
          <Box
            //box around whole form
            sx={{
              // border: "3px solid green",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                // border: "3px solid blue",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // border: "3px solid yellow",
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
                    // border: "3px solid rgba(144,202,249,0.5)",
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
                    defaultValue={"Anna"}
                    required
                  />
                  <TextField
                    name="wifeVocative"
                    id="wife.vocative"
                    label="Wołacz"
                    variant="outlined"
                    defaultValue={"Anno"}
                    required
                  />
                  <TextField
                    name="wifeLastName"
                    id="wife.lastName"
                    label="Nazwisko"
                    variant="outlined"
                    defaultValue={"Kowalska"}
                    required
                  />
                  <TextField
                    name="wifePhoneNumber"
                    type="tel"
                    id="wife.phoneNumber"
                    label="Nr telefonu"
                    variant="outlined"
                    defaultValue={"997998999"}
                    required
                  />
                  <TextField
                    name="wifeEmail"
                    type="email"
                    id="wife.email"
                    label="Email"
                    variant="outlined"
                    defaultValue={"ania@wp.pl"}
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
                    defaultValue={1960}
                    required
                  />
                  <TextField
                    type="number"
                    name="wifeChurch"
                    id="wife.church"
                    label="Kościół"
                    variant="outlined"
                    defaultValue={1}
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
                    // border: "3px solid orange",
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
                    defaultValue={"Jan"}
                    required
                  />
                  <TextField
                    name="husbandVocative"
                    id="husband.vocative"
                    label="Wołacz"
                    variant="outlined"
                    defaultValue={"Janie"}
                    required
                  />
                  <TextField
                    name="husbandLastName"
                    id="husband.lastName"
                    label="Nazwisko"
                    variant="outlined"
                    defaultValue={"Kowalski"}
                    required
                  />
                  <TextField
                    name="husbandPhoneNumber"
                    type="tel"
                    id="husband.phoneNumber"
                    label="Nr telefonu"
                    variant="outlined"
                    defaultValue={"001002003"}
                    required
                  />
                  <TextField
                    name="husbandEmail"
                    type="email"
                    id="husband.email"
                    label="Email"
                    variant="outlined"
                    defaultValue={"jan@onet.pl"}
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
                    defaultValue={"1975"}
                    required
                  />
                  <TextField
                    type="number"
                    name="husbandChurch"
                    id="husband.church"
                    label="Kościół"
                    variant="outlined"
                    defaultValue={1}
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
                {" "}
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
                  defaultValue={"20201"}
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
                  defaultValue={2000}
                  required
                />
                <TextField
                  type="number"
                  name="attendanceNumber"
                  id="attendanceNumber"
                  label="Numer indentyfikacyjny"
                  variant="outlined"
                  defaultValue={2}
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
                    defaultValue={"Kraków"}
                  ></TextField>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="almaEvent-label">Event</InputLabel>
                  <Select
                    name="almaEvent"
                    labelId="almaEvent-label"
                    id="almaEvent"
                    label="Event"
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
                  defaultValue="Default Value"
                />
              </Box>
            </Box>
            <Box sx={{ margin: "1rem" }}>
              <Button size="large" variant="contained" type="submit">
                Dodaj małżeństwo do bazy
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Form>
  )
}
