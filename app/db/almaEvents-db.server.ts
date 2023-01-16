import type { AlmaEvent, OrganizationUnit } from "@prisma/client"

export type AlmaEvents = AlmaEvent & {
  organizationUnit: OrganizationUnit
}
