// app/[campaign]/page.tsx
import { redirect } from "next/navigation";

export default async function CampaignRedirectPage({
  params,
}: {
  params: Promise<{ campaign: string }>;
}) {
  const { campaign } = await params;

  redirect(`/?utm_source=AIKYA&utm_medium=SMS&utm_campaign=${campaign}`);

  // Returning null satisfies React.FC typing
  return null;
}
