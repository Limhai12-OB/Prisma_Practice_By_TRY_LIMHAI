import { PrismaClient } from "../src/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const users = [
  { name: "Sokha Mean", email: "sokha.mean@example.com" },
  { name: "Dara Chan", email: "dara.chan@example.com" },
  { name: "Bopha Roth", email: "bopha.roth@example.com" },
  { name: "Vicheka Sam", email: "vicheka.sam@example.com" },
];

const addUser = async () => {
  for (const u of users) {
    await prisma.users.create({ data: u });
  }
};

addUser()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
