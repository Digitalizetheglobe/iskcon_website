"use client";

// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Badge } from "@/components/ui/badge";
// import { ArrowLeft, Heart, TrendingUp, Users, Calendar, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";

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
interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  goalAmount: number;
  raisedAmount: number;
  category: string;
  deadline: string;
  supporters: number;
  featured: boolean;
}

// const Campaigns = () => {
//   const campaigns: Campaign[] = [
//     {
//       id: "build-school",
//       title: "Build a School in Rural Telangana",
//       description: "Help us construct a school building for 200+ children in a remote village where kids currently study under trees.",
//       image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       goalAmount: 5000000,
//       raisedAmount: 3250000,
//       category: "Education",
//       deadline: "2025-03-31",
//       supporters: 124,
//       featured: true
//     },
//     {
//       id: "sponsor-meals",
//       title: "Sponsor 10,000 Nutritious Meals",
//       description: "Provide millet-based nutritious meals to underprivileged children for the next 3 months across our Aikya Vidya centers.",
//       image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       goalAmount: 600000,
//       raisedAmount: 485000,
//       category: "Food",
//       deadline: "2025-02-28",
//       supporters: 256,
//       featured: true
//     },
//     {
//       id: "teacher-training",
//       title: "Train 50 Aikya Vidya Teachers",
//       description: "Empower women from local communities to become certified teachers, providing them livelihood and children quality education.",
//       image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       goalAmount: 400000,
//       raisedAmount: 175000,
//       category: "Empowerment",
//       deadline: "2025-06-30",
//       supporters: 67,
//       featured: false
//     },
//     {
//       id: "tribal-welfare",
//       title: "Support Chenchu Tribal Community",
//       description: "Provide education kits, health support, and skill training to 100 children from Chenchu tribal communities.",
//       image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       goalAmount: 800000,
//       raisedAmount: 220000,
//       category: "Community",
//       deadline: "2025-05-15",
//       supporters: 43,
//       featured: false
//     },
//     {
//       id: "health-camp",
//       title: "Organize Health Camps in 20 Villages",
//       description: "Conduct free medical camps providing health checkups, medicines, and basic treatments to underserved communities.",
//       image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       goalAmount: 350000,
//       raisedAmount: 280000,
//       category: "Healthcare",
//       deadline: "2025-04-20",
//       supporters: 89,
//       featured: false
//     },
//     {
//       id: "library-setup",
//       title: "Setup Libraries in 10 Centers",
//       description: "Create mini libraries with 500+ books in each Aikya Vidya center to foster reading habit among children.",
//       image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       goalAmount: 250000,
//       raisedAmount: 95000,
//       category: "Education",
//       deadline: "2025-07-31",
//       supporters: 31,
//       featured: false
//     }
//   ];

const Campaigns = () => {
  const campaigns: Campaign[] = [
    {
      id: "build-school",
      title: "Build a School in Rural Telangana",
      description:
        "Help us construct a school building for 200+ children in a remote village where kids currently study under trees.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      goalAmount: 5000000,
      raisedAmount: 3250000,
      category: "Education",
      deadline: "2025-03-31",
      supporters: 124,
      featured: true,
    },
    {
      id: "sponsor-meals",
      title: "Sponsor 10,000 Nutritious Meals",
      description:
        "Provide millet-based nutritious meals to underprivileged children for the next 3 months across our Aikya Vidya centers.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      goalAmount: 600000,
      raisedAmount: 485000,
      category: "Food",
      deadline: "2025-02-28",
      supporters: 256,
      featured: true,
    },
    {
      id: "teacher-training",
      title: "Train 50 Aikya Vidya Teachers",
      description:
        "Empower women from local communities to become certified teachers, providing them livelihood and children quality education.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      goalAmount: 400000,
      raisedAmount: 175000,
      category: "Empowerment",
      deadline: "2025-06-30",
      supporters: 67,
      featured: false,
    },
    {
      id: "tribal-welfare",
      title: "Support Chenchu Tribal Community",
      description:
        "Provide education kits, health support, and skill training to 100 children from Chenchu tribal communities.",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      goalAmount: 800000,
      raisedAmount: 220000,
      category: "Community",
      deadline: "2025-05-15",
      supporters: 43,
      featured: false,
    },
    {
      id: "health-camp",
      title: "Organize Health Camps in 20 Villages",
      description:
        "Conduct free medical camps providing health checkups, medicines, and basic treatments to underserved communities.",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      goalAmount: 350000,
      raisedAmount: 280000,
      category: "Healthcare",
      deadline: "2025-04-20",
      supporters: 89,
      featured: false,
    },
    {
      id: "library-setup",
      title: "Setup Libraries in 10 Centers",
      description:
        "Create mini libraries with 500+ books in each Aikya Vidya center to foster reading habit among children.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      goalAmount: 250000,
      raisedAmount: 95000,
      category: "Education",
      deadline: "2025-07-31",
      supporters: 31,
      featured: false,
    },
  ];
  // const calculateProgress = (raised: number, goal: number) => {
  //   return Math.min((raised / goal) * 100, 100);
  // };
  const calculateProgress = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };
  // const calculateDaysLeft = (deadline: string) => {
  //   const today = new Date();
  //   const endDate = new Date(deadline);
  //   const diffTime = endDate.getTime() - today.getTime();
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //   return diffDays > 0 ? diffDays : 0;
  // };
  const calculateDaysLeft = (deadline: string) => {
    const today = new Date();
    const endDate = new Date(deadline);
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const featuredCampaigns = campaigns.filter(c => c.featured);
  const otherCampaigns = campaigns.filter(c => !c.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-background to-orange-50/30">
      {/* Navigation */}


      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.08) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl shadow-2xl rounded-full border-2 border-primary/30 animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-primary text-sm sm:text-base font-bold uppercase tracking-wider">Live Campaigns</p>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-8 text-foreground leading-[1.05] animate-fade-in tracking-tight" style={{ animationDelay: '100ms' }}>
              Donate to a
              <span className="block mt-3">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
                  Specific Cause
                </span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '200ms' }}>
              Support focused initiatives that create <span className="text-primary font-semibold">measurable impact</span>. Track progress in real-time and see exactly how your contribution helps.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-12 sm:py-16 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Featured Campaigns</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredCampaigns.map((campaign, index) => (
              <Card
                key={campaign.id}
                className="group hover:shadow-[0_20px_60px_-15px_rgba(251,146,60,0.3)] transition-all duration-500 hover:-translate-y-2 border-2 border-primary/30 overflow-hidden animate-fade-in bg-gradient-to-br from-background via-background to-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute top-5 left-5 flex gap-2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white font-bold px-4 py-1.5 shadow-lg">
                      {campaign.category}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-4 py-1.5 shadow-lg animate-pulse">
                      ⭐ Featured
                    </Badge>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-2xl font-bold">
                            {calculateProgress(campaign.raisedAmount, campaign.goalAmount).toFixed(0)}%
                          </div>
                          <div className="text-white/80 text-xs">Funded</div>
                        </div>
                      </div>
                      <Progress value={calculateProgress(campaign.raisedAmount, campaign.goalAmount)} className="h-2 bg-white/20" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-7">
                  <h3 className="text-2xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                    {campaign.description}
                  </p>

                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">Supporters</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground">{campaign.supporters}</div>
                      </div>
                      <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span className="text-xs text-muted-foreground">Days Left</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground">{calculateDaysLeft(campaign.deadline)}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-bold text-primary">
                          ₹{(campaign.raisedAmount / 100000).toFixed(2)}L raised
                        </span>
                        <span className="font-semibold text-muted-foreground">
                          of ₹{(campaign.goalAmount / 100000).toFixed(2)}L
                        </span>
                      </div>
                    </div>
                    <Button
                      className="w-full text-white cursor-pointer 
bg-gradient-to-br from-[#F96D2F] via-[#FA6F30] to-[#F1872B] 
hover:shadow-lg transition-all duration-300 h-12 text-base font-bold 
group-hover:scale-[1.02]"
                      asChild
                    >
                      {/* <Link href={`/campaign/build-school`}>
                        View Campaign & Donate
                      </Link> */}
                    </Button>


                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Campaigns */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">More Campaigns</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCampaigns.map((campaign) => (
              <Card
                key={campaign.id}
                className="group hover:shadow-[0_10px_40px_-15px_rgba(251,146,60,0.3)] transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/50 overflow-hidden bg-gradient-to-br from-background to-primary/5"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary/95 to-accent/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 shadow-lg">
                    {campaign.category}
                  </Badge>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 border border-white/20">
                      <Progress value={calculateProgress(campaign.raisedAmount, campaign.goalAmount)} className="h-1.5 bg-white/30 mb-2" />
                      <div className="flex justify-between items-center text-white text-xs">
                        <span className="font-bold">{calculateProgress(campaign.raisedAmount, campaign.goalAmount).toFixed(0)}% funded</span>
                        <span className="font-semibold">{calculateDaysLeft(campaign.deadline)} days left</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight min-h-[3.5rem]">
                    {campaign.title}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="bg-primary/10 rounded-lg px-3 py-2 border border-primary/20">
                        <div className="text-xs text-muted-foreground mb-0.5">Raised</div>
                        <div className="text-base font-bold text-primary">₹{(campaign.raisedAmount / 100000).toFixed(1)}L</div>
                      </div>
                      <div className="bg-accent/10 rounded-lg px-3 py-2 border border-accent/20">
                        <div className="text-xs text-muted-foreground mb-0.5">Supporters</div>
                        <div className="text-base font-bold text-foreground">{campaign.supporters}</div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-md transition-all duration-300 h-11 font-bold group-hover:scale-[1.02]"
                      size="sm"
                      asChild
                    >
                      <div className="text-white">
                        Donate Now
                      </div>
                      {/* <Link to={`/campaign/${campaign.id}`}>
                        Donate Now
                      </Link> */}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F96D2F] via-[#FA6F30] to-[#F1872B] relative overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
        <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-bounce">
            <Heart className="w-10 h-10 text-white fill-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Can&apos;t Find Your Cause?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Make a general donation to support our mission of reaching <span className="font-bold underline decoration-white/50">1000 villages by 2030</span>
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/95 hover:scale-105 font-bold text-lg h-16 px-12 shadow-2xl transition-all duration-300" asChild>
            Make General Donation
            {/* <Link to="/donate">Make General Donation</Link> */}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
