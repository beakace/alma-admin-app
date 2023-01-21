import { Button } from "@mui/material"
import { CSVLink } from "react-csv"
import { ClientOnly } from "remix-utils"
import DummyComponent from "./dummycomponent"

export default function CSVExporter({ data }: any) {
  const headers = [
    { label: "ID", key: "id" },
    { label: "ID Pary", key: "coupleId" },
    { label: "ID meza", key: "husbandId" },
    { label: "ID zony", key: "wifeId" },
    { label: "Grupa", key: "group" },
    { label: "Miejscowość", key: "city" },
    { label: "Kod Pocztowy", key: "postalCode" },
    { label: "Rok ślubu", key: "weddingYear" },
    { label: "Numer identyfikacyjny", key: "attendanceNumber" },
    { label: "ID pary zapraszającej", key: "invitedById" },
    { label: "ID Oddziału", key: "organizationUnitId" },
    { label: "ID Eventu", key: "almaEventId" },
    { label: "Uwagi", key: "comments" },
    { label: "Mąz", key: "husband" },
    { label: "Zona", key: "wife" },
    { label: "Zaproszeni przez", key: "invitedBy" },
    { label: "Oddział", key: "organizationUnit" },
    { label: "Event", key: "almaEvent" },
  ]
  return (
    <ClientOnly fallback={<DummyComponent />}>
      {() => (
        <Button>
          {" "}
          <CSVLink
            data={data}
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
