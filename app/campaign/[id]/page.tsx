// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Badge } from "@/components/ui/badge";
// import { Heart, Users, Calendar } from "lucide-react";
// import { notFound } from "next/navigation";

// interface Campaign {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   goalAmount: number;
//   raisedAmount: number;
//   category: string;
//   deadline: string;
//   supporters: number;
//   featured: boolean;
// }

// interface PageProps {
//   params: { id: string };
// }

// // Helper functions
// const calculateProgress = (raised: number, goal: number) =>
//   Math.min((raised / goal) * 100, 100);

// const calculateDaysLeft = (deadline: string) => {
//   const today = new Date();
//   const endDate = new Date(deadline);
//   const diffTime = endDate.getTime() - today.getTime();
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//   return diffDays > 0 ? diffDays : 0;
// };

// export default async function CampaignPage({ params }: PageProps) {
//   const { id } = params;

//   // Fetch campaigns from backend
//   const res = await fetch("http://localhost:5000/api/campaigns", {
//     cache: "no-store", // always fetch fresh data
//   });

//   if (!res.ok) {
//     // API returned error
//     return notFound();
//   }

//   const campaigns: Campaign[] = await res.json();

//   // Find the campaign by id
//   const campaign = campaigns.find((c) => c.id === id);

//   if (!campaign) return notFound(); // 404 if not found

//   return (
//     <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
//       <Card className="overflow-hidden border-2 border-primary/30">
//         <div className="relative h-80 w-full">
//           <Image
//             src={campaign.image}
//             alt={campaign.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         <CardContent className="p-6">
//           <div className="flex items-center gap-2 mb-4">
//             <Badge className="bg-gradient-to-r from-primary to-accent text-white font-bold px-3 py-1.5">
//               {campaign.category}
//             </Badge>
//             {campaign.featured && (
//               <Badge className="bg-yellow-400 text-black font-bold px-3 py-1.5 animate-pulse">
//                 ⭐ Featured
//               </Badge>
//             )}
//           </div>

//           <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
//             {campaign.title}
//           </h1>
//           <p className="text-lg text-muted-foreground mb-6">
//             {campaign.description}
//           </p>

//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
//               <div className="flex items-center gap-2 mb-1">
//                 <Users className="w-4 h-4 text-primary" />
//                 <span className="text-xs text-muted-foreground">Supporters</span>
//               </div>
//               <div className="text-2xl font-bold text-foreground">
//                 {campaign.supporters}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20">
//               <div className="flex items-center gap-2 mb-1">
//                 <Calendar className="w-4 h-4 text-primary" />
//                 <span className="text-xs text-muted-foreground">Days Left</span>
//               </div>
//               <div className="text-2xl font-bold text-foreground">
//                 {calculateDaysLeft(campaign.deadline)}
//               </div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <Progress
//               value={calculateProgress(campaign.raisedAmount, campaign.goalAmount)}
//               className="h-3 bg-white/20 rounded-full"
//             />
//             <div className="flex justify-between mt-2 text-sm text-muted-foreground">
//               <span>Raised: ₹{campaign.raisedAmount}</span>
//               <span>Goal: ₹{campaign.goalAmount}</span>
//             </div>
//           </div>

//           <button className="w-full h-12 mt-4 text-white bg-gradient-to-br from-[#F96D2F] via-[#FA6F30] to-[#F1872B] rounded-xl font-bold">
//             Donate Now
//           </button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
