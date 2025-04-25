import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../assets/css/globals.css";
import Template from "@/components/Template";

export const metadata: Metadata = {
  title: "Well Gen",
  description: "...",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body>
          <Template>
            {children}
          </Template>
        </body>
      </html>
    </ClerkProvider>
  );
}