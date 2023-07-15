"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <NextThemeProvider
      storageKey="page-theme"
      defaultTheme="system"
      enableSystem={true}
      attribute="data-theme"
    >
      <SessionProvider>{children}</SessionProvider>
    </NextThemeProvider>
  );
}
