import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  const trips = await prisma.trip.findMany();
  return NextResponse.json(trips);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //const validation = schema.safeParse(body);
  /*
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });*/

  const newTrip = await prisma.trip.create({
    data: {
      travellerId: body.traverllerId,
      sendFrom: body.sendFrom,
      sendTo: body.sendTo,
      weight: parseFloat(body.weight),
      pricePerKg: parseFloat(body.pricePerKg),
      flightAirline: body.flightAirline,
      flightNo: body.flightNo,
      departureDateTime: body.departureDateTime,
      arrivalDateTime: body.arrivalDateTime,
    },
  });
  return NextResponse.json(newTrip, { status: 201 });
}
