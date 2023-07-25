import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log(prisma)
}

main()
  .then(() => console.log("Users created"))
  .catch((e) => console.error(e))
  .finally(() => process.exit())
