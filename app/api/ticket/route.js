import connection from "@/libs/mongodb";
import Tickets from "@/models/ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, body, priority, user_email } = await request.json();
    await connection();
    await Tickets.create({
      title,
      body,
      priority,
      user_email,
    });
    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
