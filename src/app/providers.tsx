import * as React from "react";
import { ThemeProvider } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  );
}
