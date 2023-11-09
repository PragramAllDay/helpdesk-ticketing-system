import connection from "@/libs/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPass = await bcrypt.hash(password, 10);
    await connection();
    await User.create({ name, email, password: hashedPass });
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "User not created" }, { status: 500 });
  }
}
