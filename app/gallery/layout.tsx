import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISKCON Gallery | Annadaan & Seva Moments",
  description: "Browse ISKCON's photo gallery showcasing Annadaan, Vidya Daan, seva activities, and community programs. See the impact of your support.",
  keywords: "ISKCON Gallery, Annadaan photos, ISKCON seva events",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
