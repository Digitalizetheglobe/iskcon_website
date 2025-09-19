import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to ISKCON | Support Annadaan & Vidya Daan",
  description: "Make a difference with your donation to ISKCON. Support Annadaan, Vidya Daan & seva activities to spread Krishna consciousness and help the needy.",
  keywords: "ISKCON donation, Annadaan donation, Donate to HARE KRISHNA MOVEMENT INDIA",
};

export default function DonationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
