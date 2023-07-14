import localFont from "next/font/local";

export const FontSans = localFont({
  src: "./roboto-slab.ttf",
  display: "swap",
  variable: "--font-sans",
});

export const FontAccent = localFont({
  src: "./roboto-slab.ttf",
  display: "swap",
  variable: "--font-accent",
});
