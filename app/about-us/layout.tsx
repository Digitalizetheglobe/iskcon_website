import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ISKCON | Our Mission, Vision & Values",
  description: "Learn about ISKCON's mission of Annadaan, education, and spreading Krishna consciousness. Discover our values and the people behind the movement.",
  keywords: "ISKCON About, Hare Krishna Mission, ISKCON Values, Krishna Consciousness",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
