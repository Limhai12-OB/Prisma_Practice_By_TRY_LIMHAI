import prisma from "lib/prisma";
import { NextResponse } from "next/server";

// get all
export async function GET() {
  const userData = await prisma.users.findMany();
  return NextResponse.json({
    status: 200,
    message: "Get all users suc",
    payload: userData,
  });
}

// by name

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const name = searchParams.get("name");

//   const users = await prisma.users.findMany({
//     where: {
//       name: {
//         contains: name,
//         mode: "insensitive",
//       },
//     },
//   });

//   return NextResponse.json({
//     status: 200,
//     message: "Search users successfully!",
//     payload: users,
//   });
// }

export async function POST(request) {
  const { name, email } = await request.json();
  const addUser = await prisma.users.create({
    data: {
      name,
      email,
    },
  });
  return NextResponse.json({
    status: 201,
    message: "add new user suc",
    payload: addUser,
  });
}
