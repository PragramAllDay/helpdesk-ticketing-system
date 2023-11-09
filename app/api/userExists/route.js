import connection from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connection();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user", user);
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "User not found" }, { status: 500 });
  }
}
