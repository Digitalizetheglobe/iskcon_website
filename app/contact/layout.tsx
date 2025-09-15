import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ISKCON | Get in Touch with Us",
  description: "Have questions or want to contribute? Contact ISKCON for donations, volunteering, or partnership opportunities. We're here to connect with you.",
  keywords: "ISKCON contact, donate to ISKCON, ISKCON volunteering",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
