import Link from "next/link";
import React from "react";
import prisma from "../../../lib/prisma";
import Trip from "../trip/trip";

interface Trip {
  sendFrom: string;
  sendTo: string;
  weight: string;
  flightNo: string;
  flightDateTime: string;
}

interface Props {
  sortOrder: string;
}

const SearchResultTable = async () => {
  const trips = await prisma.trip.findMany();

  //const users: Trip[] = await trips.json();

  return (
    <>
      {trips.map((trip) => (
        <Trip
          departureDateTime={trip.departureDateTime.getFullYear() + ""}
          sendFrom={trip.sendFrom}
          sendTo={trip.sendTo}
          flightAirline={trip.flightAirline}
          flightNo={trip.flightNo}
          weight={trip.weight}
          pricePerKg={trip.pricePerKg}
        />
      ))}
      {/*
      <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
        <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg text-black">
          <table className="table table-bordered text-black">
            <thead>
              <tr>
                <th>
                  <Link href="/users?sortOrder=name"> From </Link>
                </th>
                <th>
                  {" "}
                  <Link href="/users?sortOrder=email"> To </Link>
                </th>
                <th>
                  <Link href="/users?sortOrder=name"> Flight No </Link>
                </th>
                <th>
                  {" "}
                  <Link href="/users?sortOrder=email"> Date </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip) => (
                <tr key={trip.id}>
                  <td>{trip.sendFrom}</td>
                  <td>{trip.sendTo}</td>
                  <td>{trip.flightNo}</td>
                  <td>{"" + trip.departureDateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>*/}
    </>
  );
};

export default SearchResultTable;
