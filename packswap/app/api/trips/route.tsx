import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../../../lib/prisma";

export async function GET(request: NextRequest) {
  const trips = await prisma.trip.findMany();
  return NextResponse.json(trips);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  const newTrip = await prisma.trip.create({
    data: {
      travelerFirstName: body.travelerFirstName,
      travelerLastName: body.travelerLastName,
      sendFrom: body.sendFrom,
      sendTo: body.sendTo,
      weight: parseFloat(body.weight),
      flightNo: body.flightNo,
      flightDateTime: body.flightDataTime,
    },
  });
  return NextResponse.json(newTrip, { status: 201 });
}
