import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-8">
        AI Budget Optimizer
      </h1>

      <p className="text-gray-400 mb-10">
        Optimize AI spending across your organization.
      </p>

      <div className="flex gap-4">
        <SignInButton mode="modal">
          <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold">
            Sign In
          </button>
        </SignInButton>

        <SignUpButton mode="modal">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold">
            Sign Up
          </button>
        </SignUpButton>
      </div>
    </main>
  );
}