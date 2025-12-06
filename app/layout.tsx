import { PortalProvider } from "./components/portal/PortalController";
import AuroraAtmosphere from "@/components/AuroraAtmosphere";
import ResponsiveShell from "@/components/layout/ResponsiveShell";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PortalProvider>
          <AuroraAtmosphere />
          <ResponsiveShell>{children}</ResponsiveShell>
        </PortalProvider>
      </body>
    </html>
  );
}
