import type { Metadata } from "next";
import { Inter as FontSans, Space_Grotesk } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className={`${fontSans.variable} ${spaceGrotesk.variable}`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
