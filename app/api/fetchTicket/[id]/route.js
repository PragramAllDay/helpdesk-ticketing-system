import connection from "@/libs/mongodb";
import Tickets from "@/models/ticket";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    console.log("id in server", id);
    await connection();
    const ticket = await Tickets.findById(id);

    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
