// app/[campaign]/page.tsx
import { redirect } from "next/navigation";

export default function CampaignRedirectPage({
  params,
}: {
  params: { campaign: string };
}) {
  const { campaign } = params;

  redirect(`/?utm_source=AIKYA&utm_medium=SMS&utm_campaign=${campaign}`);

  // Returning null satisfies React.FC typing
  return null;
}
