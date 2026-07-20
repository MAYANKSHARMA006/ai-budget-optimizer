import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { Geist } from "next/font/google";

import ThemeProvider from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI Budget Optimizer",
  description: "AI Budget Optimization Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn(
          "font-sans",
          geist.variable
        )}
      >
        <body
          suppressHydrationWarning
          className="
            bg-slate-100
            text-slate-900
            transition-colors
            dark:bg-slate-950
            dark:text-white
          "
        >
          <ThemeProvider>
            {children}

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  borderRadius: "10px",
                  background: "#1e293b",
                  color: "#fff",
                },
              }}
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}