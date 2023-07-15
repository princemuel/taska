import { cn } from "@/lib";
import localFont from "next/font/local";

const FontSans = localFont({
  src: "./roboto-slab.ttf",
  display: "swap",
  variable: "--font-sans",
});

const FontAccent = localFont({
  src: "./roboto-slab.ttf",
  display: "swap",
  variable: "--font-accent",
});

export const fonts = cn(FontSans.variable, FontAccent.variable);
