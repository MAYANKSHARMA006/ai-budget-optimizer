"use client";

import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
          }}
        />
      </div>
    </header>
  );
}