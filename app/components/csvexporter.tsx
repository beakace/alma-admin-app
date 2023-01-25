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
      almaEventIdCore: c.almaEvent.organizationUnitId,
      commentsCore: c.comments,
      husbandCore: c.husband,
      wifeCore: c.wife,
      ...(c.invitedBy ? c.invitedBy : {}),
      organizationUnitCore: c.organizationUnit,
      almaEventCore: c.almaEvent,
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
    { label: "zapraszający", key: "invitedByFullName" },
    { label: "zapraszający nr bazy", key: "invitedByOrganizationUnitId" },
    { label: "nr bazy", key: "organizationUnitIdCore" },
    { label: "nr Almy", key: "almaEventIdCore" },
    { label: "kiedy na Almie", key: "almaEventWhen" },
    { label: "nr", key: "attendanceNumberCore" },
    { label: "rok ur mąż", key: "husbandCore.birthYear" },
    { label: "rok ur żona", key: "wifeCore.birthYear" },
    { label: "rok ślubu", key: "weddingYearCore" },
    { label: "mail mąż", key: "husbandCore.email" },
    { label: "mail żona", key: "wifeCore.email" },
    { label: "kościół mąż", key: "husbandCore.church" },
    { label: "kościół żona", key: "wifeCore.church" },
    { label: "UWAGI", key: "commentsCore" },
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
