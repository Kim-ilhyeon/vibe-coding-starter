import type { Metadata } from "next";
import type { ReactElement } from "react";
import { siteMetadata } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: LayoutProps<"/">): ReactElement {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
