import * as React from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <Toaster position="top-right" />
      {children}
    </ThemeProvider>
  );
}
