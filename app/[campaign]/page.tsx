// app/[campaign]/page.tsx
import { redirect } from "next/navigation";

export default async function CampaignRedirectPage({
  params,
}: {
  params: Promise<{ campaign: string }>;
}) {
  const { campaign } = await params;

  // Exclude specific routes that should not be treated as campaigns
  const excludedCampaigns = [
    'gallery',
    'about-us',
    'contact',
    
    'blog',
    'events',
    'volunteer',
    'governance',
    'policies',
    'terms-conditions',
    'trust',
    'refund',
    'certificates',
    'our-initiative',
    'home',
    
  ];

  // If this is an excluded route, don't redirect
  if (excludedCampaigns.includes(campaign)) {
    return null;
  }

  redirect(`/?utm_source=AIKYA&utm_medium=SMS&utm_campaign=${campaign}`);

  // Returning null satisfies React.FC typing
  return null;
}
