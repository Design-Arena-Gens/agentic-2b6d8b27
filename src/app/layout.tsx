import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alien Arrival with Veo 3",
  description:
    "Concept design lab for crafting a Veo 3 prompt of an alien visiting Earth."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
