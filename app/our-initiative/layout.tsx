import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISKCON Initiatives | Annadaan, Vidya Daan & Seva",
  description: "Explore ISKCON's key initiatives – Annadaan, Vidya Daan, and moral education. Support us in bringing positive change in society.",
  keywords: "ISKCON Annadaan program, ISKCON Vidya Daan, ISKCON Seva projects",
};

export default function OurInitiativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
