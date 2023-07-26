import type { Couple, Person } from "@prisma/client"

export type CoupleWithSpouses = Couple & {
  wife: Person
  husband: Person
}
