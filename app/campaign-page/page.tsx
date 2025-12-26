
// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Badge } from "@/components/ui/badge";
// import { Heart, TrendingUp } from "lucide-react";

// interface CampaignerCampaign {
//   id: string;
//   fundraiserName: string;
//   fundraiserImage: string;
//   story: string;
//   targetAmount: number;
//   raisedAmount: number;
//   supporters: number;
//   category: string;
//   campaignImage: string;
//   location: string;
// }

// const CampaignerCampaigns = () => {
//   const campaigns: CampaignerCampaign[] = [
//     {
//       id: "priya-education",
//       fundraiserName: "Priya Sharma",
//       fundraiserImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
//       story: "Help me sponsor education for 50 underprivileged children in my village",
//       targetAmount: 150000,
//       raisedAmount: 95000,
//       supporters: 23,
//       category: "Education",
//       campaignImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
//       location: "Nizamabad, Telangana"
//     },
//     {
//       id: "rajesh-medical",
//       fundraiserName: "Rajesh Kumar",
//       fundraiserImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//       story: "Raising funds for medical equipment for our local health center",
//       targetAmount: 200000,
//       raisedAmount: 145000,
//       supporters: 34,
//       category: "Healthcare",
//       campaignImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop",
//       location: "Warangal, Telangana"
//     },
//     {
//       id: "anita-meals",
//       fundraiserName: "Anita Reddy",
//       fundraiserImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
//       story: "Providing nutritious meals to 100 children for 3 months",
//       targetAmount: 80000,
//       raisedAmount: 65000,
//       supporters: 45,
//       category: "Food",
//       campaignImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
//       location: "Hyderabad, Telangana"
//     },
//     {
//       id: "vikram-library",
//       fundraiserName: "Vikram Patel",
//       fundraiserImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
//       story: "Building a community library with 1000+ books for rural kids",
//       targetAmount: 120000,
//       raisedAmount: 45000,
//       supporters: 18,
//       category: "Education",
//       campaignImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
//       location: "Karimnagar, Telangana"
//     },
//     {
//       id: "meera-skill",
//       fundraiserName: "Meera Devi",
//       fundraiserImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
//       story: "Skill training program for 30 women in tailoring and handicrafts",
//       targetAmount: 100000,
//       raisedAmount: 72000,
//       supporters: 28,
//       category: "Empowerment",
//       campaignImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
//       location: "Khammam, Telangana"
//     },
//     {
//       id: "arun-sports",
//       fundraiserName: "Arun Singh",
//       fundraiserImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
//       story: "Sports equipment for tribal children to discover their athletic potential",
//       targetAmount: 60000,
//       raisedAmount: 38000,
//       supporters: 21,
//       category: "Community",
//       campaignImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
//       location: "Adilabad, Telangana"
//     }
//   ];

//   const calculateProgress = (raised: number, target: number) => {
//     return Math.min((raised / target) * 100, 100);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-orange-50 via-background to-orange-50/30">
//       {/* Navigation */}
//       {/* <nav className="sticky top-0 z-50 bg-gradient-to-r from-background via-background to-primary/5 backdrop-blur-xl border-b-2 border-primary/20 shadow-lg">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50"></div>
//         <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
//           <div className="flex justify-between items-center h-20 sm:h-24">
//             <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
//                 <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   H
//                 </div>
//               </div>
//               <div>
//                 <span className="block text-lg sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors truncate max-w-[180px] sm:max-w-none">
//                   Hare Krishna Vidya
//                 </span>
//                 <span className="hidden sm:block text-xs text-muted-foreground font-medium">Empowering Rural Education</span>
//               </div>
//             </Link>
//             <Button
//               variant="outline"
//               size="sm"
//               className="h-11 sm:h-12 px-4 sm:px-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 font-semibold group transition-all duration-300 hover:scale-105"
//               asChild
//             >
//               <Link href="/">
//                 <ArrowLeft className="w-4 h-4 sm:w-4 sm:h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
//                 <span className="hidden sm:inline">Back to Home</span>
//                 <span className="sm:hidden">Back</span>
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </nav> */}

//       {/* Hero Section */}
//       <section className="relative overflow-hidden py-20 sm:py-32">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.08) 1px, transparent 0)',
//             backgroundSize: '48px 48px'
//           }}></div>
//           <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 sm:mb-20">
//             <div className="inline-flex items-center gap-3 mb-8 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl shadow-2xl rounded-full border-2 border-primary/30 animate-fade-in hover:scale-105 transition-transform duration-300">
//               <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
//                 <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <p className="text-primary text-sm sm:text-base font-bold uppercase tracking-wider">Personal Fundraisers</p>
//             </div>
            
//             <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-8 text-foreground leading-[1.05] animate-fade-in tracking-tight" style={{ animationDelay: '100ms' }}>
//               Support a
//               <span className="block mt-3">
//                 <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
//                   Campaigner&apos;s Mission
//                 </span>
//               </span>
//             </h1>
            
//             <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '200ms' }}>
//               Individuals making a difference in their communities. <span className="text-primary font-semibold">Support their personal initiatives</span> and help them reach their goals.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Campaigner Campaigns Grid */}
//       <section className="py-12 sm:py-16 px-3 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {campaigns.map((campaign, index) => (
//               <Card 
//                 key={campaign.id}
//                 className="group hover:shadow-[0_20px_60px_-15px_rgba(251,146,60,0.3)] transition-all duration-500 hover:-translate-y-2 border-2 border-primary/30 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 animate-fade-in"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {/* Campaign Image */}
//                 <div className="relative h-56 overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <img
//                     src={campaign.campaignImage}
//                     alt={campaign.story}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"></div>
                  
//                   <Badge className="absolute top-4 left-4 z-30 bg-gradient-to-r from-primary to-accent text-white font-bold px-4 py-1.5 shadow-lg">
//                     {campaign.category}
//                   </Badge>
//                 </div>

//                 <CardContent className="p-6">
//                   {/* Fundraiser Profile */}
//                   <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-border">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-50"></div>
//                       <img
//                         src={campaign.fundraiserImage}
//                         alt={campaign.fundraiserName}
//                         className="relative w-14 h-14 rounded-full object-cover border-4 border-background shadow-lg"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-extrabold text-foreground text-lg leading-tight">{campaign.fundraiserName}</h3>
//                       <p className="text-xs text-muted-foreground font-medium">📍 {campaign.location}</p>
//                     </div>
//                   </div>

//                   {/* Story */}
//                   <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed font-medium">
//                     {campaign.story}
//                   </p>

//                   {/* Progress */}
//                   <div className="space-y-4">
//                     <div>
//                       <div className="flex justify-between text-sm mb-2">
//                         <span className="font-bold text-primary">
//                           ₹{(campaign.raisedAmount / 1000).toFixed(0)}K raised
//                         </span>
//                         <span className="font-semibold text-muted-foreground">
//                           of ₹{(campaign.targetAmount / 1000).toFixed(0)}K
//                         </span>
//                       </div>
//                       <Progress value={calculateProgress(campaign.raisedAmount, campaign.targetAmount)} className="h-2.5" />
//                       <div className="text-xs text-muted-foreground mt-1.5 font-medium">
//                         {calculateProgress(campaign.raisedAmount, campaign.targetAmount).toFixed(0)}% funded • {campaign.supporters} supporters
//                       </div>
//                     </div>

//                     <Button
//                       className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 h-11 font-bold group-hover:scale-[1.02]"
//                       asChild
//                     >
//                       <Link href={`/campaigner/${campaign.id}`}>
//                         Support Campaign
//                       </Link>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
//         </div>
//         <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-bounce">
//             <TrendingUp className="w-10 h-10 text-white" />
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
//             Start Your Own Campaign
//           </h2>
//           <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
//             Have a cause close to your heart? Create your personal fundraising campaign and rally support from your community.
//           </p>
//           <Button size="lg" className="bg-white text-primary hover:bg-white/95 hover:scale-105 font-bold text-lg h-16 px-12 shadow-2xl transition-all duration-300" asChild>
//             <Link href="/donate">Get Started Today</Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CampaignerCampaigns;
