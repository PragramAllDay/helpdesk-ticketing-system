import connection from "@/libs/mongodb";
import Tickets from "@/models/ticket";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connection();
  const tickets = await Tickets.find();
  return NextResponse.json(tickets, { status: 200 });
}
