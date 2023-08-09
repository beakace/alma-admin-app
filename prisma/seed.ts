import { PrismaClient } from "@prisma/client"
import { hash } from "../app/db/hash.server"

const prisma = new PrismaClient()

async function main() {
  await prisma.organizationUnit.create({
    data: {
      id: 1,
      name: "Warszawa",
    },
  })

  await prisma.organizationUnit.create({
    data: {
      id: 2,
      name: "Wrocław",
    },
  })

  await prisma.organizationUnit.create({
    data: {
      id: 3,
      name: "Olsztyn",
    },
  })

  await prisma.user.create({
    data: {
      username: "Admin",
      passwordHash: await hash("Admin12!", 10),
      organizationUnitId: 2,
    },
  })
}

main()
