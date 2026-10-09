import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Canopy Lock",
  description: "A jungle escape room. One clue is visible. The rest stay sealed.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fredoka.className} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
