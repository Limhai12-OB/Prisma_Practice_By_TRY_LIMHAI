import prisma from "lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const userData = await prisma.users.findMany();
  return NextResponse.json({
    status: 200,
    message: "Get all users suc",
    payload: userData,
  });
}
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
