import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Money Transfer Comparison App",
  description: "Compare money transfer services and find the best rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Navbar />
            {children}
            <Footer />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
