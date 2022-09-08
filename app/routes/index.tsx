import { LoaderFunction } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { CoupleWithSpouses } from "~/db/couples-db.server"

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  return {
    couples: [
      {
        id: "2-1-2005.01-15",
        city: "Wrocław",
        group: "A",
        postalCode: "50-123",
        weddingYear: 2000,
        wifeId: "1234",
        husbandId: "5678",
        invitedById: null,
        wife: {
          id: "1234",
          email: "email@email-wife.com",
          lastName: "Kowalska",
          firstName: "Anna",
          birthYear: 1980,
          phoneNumber: "123456789",
        },
        husband: {
          id: "123",
          email: "husband@email.com",
          lastName: "Kowalski",
          firstName: "Jan",
          birthYear: 1975,
          phoneNumber: "987654321",
        },
      },
    ],
  }
}

type LoaderData = {
  couples: CoupleWithSpouses[]
}

export default function Index() {
  const loaderData = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Alma</h1>
      {loaderData.couples.map((couple: any) => (
        <div key={couple.id}>
          <h2>
            {couple.wife.firstName} {couple.wife.lastName} &{" "}
            {couple.husband.firstName} {couple.husband.lastName}
          </h2>
          <p>
            {couple.city}, {couple.postalCode}
          </p>
          <p>{couple.wife.email}</p>
          <p>{couple.husband.email}</p>
        </div>
      ))}
    </div>
  )
}
