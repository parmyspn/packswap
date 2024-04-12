"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

type Props = {};

function NavBar({}: Props) {
  const { status, data: session } = useSession();

  if (status == "loading") return null;

  return (
    <div className="flex text-center justify-center items-center">
      <a
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        PackSwap
      </a>
      <a
        href=""
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        Support
      </a>
      <a
        href="/trips"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trips
      </a>
      {status === "authenticated" && (
        <div>
          <a
            href="/api/auth/signout"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign out
          </a>
          {session.user!.name}
        </div>
      )}
      {status === "unauthenticated" && (
        <a
          href="/api/auth/signin"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign in
        </a>
      )}
    </div>
  );
}

export default NavBar;
