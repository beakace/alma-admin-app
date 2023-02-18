import { Button } from "@mui/material"
import { CSVLink } from "react-csv"
import { ClientOnly } from "remix-utils"
import DummyComponent from "./dummycomponent"
import DownloadIcon from "@mui/icons-material/Download"

export default function CSVExporter({ filteredCouples }: any) {
  const flattened = filteredCouples.map((c: any) => {
    const flattenedItem = {
      id: c.id,
      coupleId: c.coupleId,
      husbandId: c.husbandId,
      wifeId: c.wifeId,
      group: c.group,
      city: c.city,
      postalCode: c.postalCode,
      weddingYear: c.weddingYear,
      attendanceNumber: c.attendanceNumber,
      invitedById: c.invitedById,
      organizationUnitId: c.organizationUnitId,
      almaEventId: c.almaEvent.organizationUnitId,
      comments: c.comments,
      husband: c.husband,
      wife: c.wife,
      organizationUnit: c.organizationUnit,
      almaEvent: c.almaEvent,
      almaEventWhen: `${c.almaEvent.year}.${c.almaEvent.month}`,
      invitedByFullName: c.invitedBy
        ? `${c.invitedBy.husband.lastName} ${c.invitedBy.husband.firstName} ${c.invitedBy.wife.firstName}`
        : "",
      invitedByOrganizationUnitId: c.invitedBy
        ? c.invitedBy.organizationUnitId
        : "",
    }
    return flattenedItem
  })

  const headers = [
    { label: "nazwisko męża", key: "husband.lastName" },
    { label: "imię mąż", key: "husband.firstName" },
    { label: "wołacz mąż", key: "husband.vocative" },
    { label: "nazwisko żony", key: "wife.lastName" },
    { label: "imię żona", key: "wife.firstName" },
    { label: "wołacz żona", key: "wife.vocative" },
    { label: "telefon mąż", key: "husband.phoneNumber" },
    { label: "telefon żona", key: "wife.phoneNumber" },
    { label: "Kod Pocztowy", key: "postalCode" },
    { label: "Miejscowość", key: "city" },
    { label: "Grupa", key: "group" },
    { label: "zapraszający", key: "invitedByFullName" },
    { label: "zapraszający nr bazy", key: "invitedByOrganizationUnitId" },
    { label: "nr bazy", key: "organizationUnitId" },
    { label: "nr Almy", key: "almaEventId" },
    { label: "kiedy na Almie", key: "almaEventWhen" },
    { label: "nr", key: "attendanceNumber" },
    { label: "rok ur mąż", key: "husband.birthYear" },
    { label: "rok ur żona", key: "wife.birthYear" },
    { label: "rok ślubu", key: "weddingYear" },
    { label: "mail mąż", key: "husband.email" },
    { label: "mail żona", key: "wife.email" },
    { label: "kościół mąż", key: "husband.church" },
    { label: "kościół żona", key: "wife.church" },
    { label: "UWAGI", key: "comments" },
  ]

  return (
    <ClientOnly fallback={<DummyComponent />}>
      {() => (
        <Button
          variant="contained"
          size="small"
          color="success"
          sx={{ paddingRight: "1rem" }}
        >
          <DownloadIcon
            sx={{
              margin: "0",
              paddingRight: "0.1rem",
              marginRight: "0.8rem",
              marginLeft: "0.15rem",
            }}
          />{" "}
          <CSVLink
            data={flattened}
            headers={headers}
            filename={"alma-filteredcouples.csv"}
            target="_blank"
          >
            Eksport
          </CSVLink>
        </Button>
      )}
    </ClientOnly>
  )
}
