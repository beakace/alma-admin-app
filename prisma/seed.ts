import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
  await prisma.couple.create({
    data: {
      id: "2-1-2005.01-15",
      city: "Wrocław",
      group: "A",
      postalCode: "50-123",
      weddingYear: 2000,
      wife: {
        create: {
          id: randomUUID(),
          email: "email@email-wife.com",
          lastName: "Kowalska",
          firstName: "Anna",
          birthYear: 1980,
          phoneNumber: "123456789",
        },
      },
      husband: {
        create: {
          id: randomUUID(),
          email: "husband@email.com",
          lastName: "Kowalski",
          firstName: "Jan",
          birthYear: 1975,
          phoneNumber: "987654321",
        },
      },
    },
  });
}

main();
