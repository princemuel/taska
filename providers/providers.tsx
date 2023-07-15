"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <NextThemeProvider>
      <SessionProvider>{children}</SessionProvider>;
    </NextThemeProvider>
  );
}
