import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Scent & Ember",
  description: "Premium fragrance storefront focused on scent storytelling and product presentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-full bg-brand-night text-brand-cream">
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
