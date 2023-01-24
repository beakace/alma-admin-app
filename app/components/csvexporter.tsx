import { Button } from "@mui/material"
import { CSVLink } from "react-csv"
import { ClientOnly } from "remix-utils"
import DummyComponent from "./dummycomponent"

export default function CSVExporter({ filteredCouples }: any) {
  const flattened = filteredCouples.map((c: any) => {
    const flattenedItem = {
      idCore: c.id,
      coupleIdCore: c.coupleId,
      husbandIdCore: c.husbandId,
      wifeIdCore: c.wifeId,
      groupCore: c.group,
      cityCore: c.city,
      postalCodeCore: c.postalCode,
      weddingYearCore: c.weddingYear,
      attendanceNumberCore: c.attendanceNumber,
      invitedByIdCore: c.invitedById,
      organizationUnitIdCore: c.organizationUnitId,
      almaEventIdCore: c.almaEventId,
      commentsCore: c.comments,
      husbandCore: c.husband,
      wifeCore: c.wife,
      ...c.invitedBy,
      organizationUnitCore: c.organizationUnit,
      almaEventCore: c.almaEvent,
    }
    return flattenedItem
  })

  console.log("flattened:", flattened)
  const headers = [
    { label: "nazwisko męża", key: "husbandCore.lastName" },
    { label: "imię mąż", key: "husbandCore.firstName" },
    { label: "wołacz mąż", key: "husbandCore.vocative" },
    { label: "nazwisko żony", key: "wifeCore.lastName" },
    { label: "imię żona", key: "wifeCore.firstName" },
    { label: "wołacz żona", key: "wifeCore.vocative" },
    { label: "telefon mąż", key: "husbandCore.phoneNumber" },
    { label: "telefon żona", key: "wifeCore.phoneNumber" },
    { label: "Kod Pocztowy", key: "postalCodeCore" },
    { label: "Miejscowość", key: "cityCore" },
    { label: "Grupa", key: "groupCore" },
    {
      label: "zapraszający",
      key: "husband.firstName" + "." + "husband.lastName",
    },
    { label: "zapraszający nr bazy", key: "husband.lastName" },
    { label: "nr bazy", key: "organizationUnitIdCore" },
    { label: "nr Almy", key: "almaEventIdCore" },
    { label: "rok urodzenia mąż", key: "husbandCore.birthYear" },
    { label: "rok urodzenia żona", key: "wifeCore.birthYear" },
    { label: "rok ślubu", key: "weddingYearCore" },
    { label: "mail mąż", key: "husbandCore.email" },
    { label: "mail żona", key: "wifeCore.email" },
    { label: "kościół mąż - nazwa", key: "husbandCore" },
    { label: "kościół mąż", key: "husbandCore.church" },
    { label: "kościół żona - nazwa", key: "wifeCore" },
    { label: "kościół żona", key: "wifeCore.church" },
    { label: "UWAGI", key: "commentsCore" },
    // { label: "ID", key: "id" },
    // { label: "Numer identyfikacyjny", key: "attendanceNumber" },
    // { label: "ID Pary", key: "coupleId" },
    // { label: "ID meza", key: "husbandId" },
    // { label: "ID zony", key: "wifeId" },
    // { label: "Mąz", key: "husband.firstName" },
    // { label: "Zona", key: "wife.firstName" },
    // { label: "Zaproszeni przez", key: "invitedBy" },
    // { label: "Oddział", key: "organizationUnit" },
    // { label: "Event", key: "almaEvent" },
  ]

  return (
    <ClientOnly fallback={<DummyComponent />}>
      {() => (
        <Button>
          {" "}
          <CSVLink
            data={flattened}
            headers={headers}
            filename={"alma-filteredcouples.csv"}
            target="_blank"
          >
            Eksportuj jako CSV
          </CSVLink>
        </Button>
      )}
    </ClientOnly>
  )
}
