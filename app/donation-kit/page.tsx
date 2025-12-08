
"use client";
// import { DonationKitCard } from "@/components/DonationKitCard";
// import { WhyDonateSection } from "@/components/WhyDonateSection";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
// import { PhotoGallerySection } from "@/components/PhotoGallerySection";
// import { GuidanceDialog } from "@/components/GuidanceDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Donationkit = () => {
  const [isGuidanceDialogOpen, setIsGuidanceDialogOpen] = useState(false);

  const kits = [
    {
      title: "Education Support Kit",
      description: "School supplies, books, and learning materials to help a child succeed in their education journey.",
      price: 790,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      items: [
        "3-5 Recycled Notebooks",
        "2 Blue Pens",
        "Pencils & Eraser",
        "Geometry Box",
        "Color Pencils Set",
        "Sharpener & Scale"
      ],
      impact: "Supports one child's education for an entire term",
      kitId: "education"
    },
    {
      title: "Nutritious Meal Kit",
      description: "Millet-based nutritious food providing essential nutrition for growing children.",
      price: 1200,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      items: [
        "Rice 10Kg",
        "Millets 5Kg",
        "Dal 5Kg",
        "Wheat Flour 5Kg",
        "Cooking Oil 1L",
        "Essential Spices"
      ],
      impact: "Provides nutritious meals for underprivileged children",
      kitId: "grocery"
    },
    {
      title: "Learning Center Kit",
      description: "Complete setup for Aikya Vidya centers including teaching materials and infrastructure.",
      price: 35000,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      items: [
        "Green Board & Stand",
        "Charts & Teaching Materials",
        "Steel Plates & Glasses (50 sets)",
        "Floor Mats",
        "Storage Cabinet",
        "First Aid Box"
      ],
      impact: "Establishes a learning center serving 50+ children with 2hrs daily education",
      kitId: "center"
    }
  ];

  return (
    <div className="min-h-screen">


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-bg via-background to-primary/5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-white shadow-lg rounded-full border-2 border-primary/20">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
                <p className="text-primary text-xs sm:text-sm font-bold uppercase tracking-wide">Making Real Impact</p>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-foreground leading-[1.1]">
                Empowering Children
                <span className="block mt-1 sm:mt-2">
                  <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Through Education
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed max-w-xl">
                Post-school initiative providing 2 hours daily education, nutritious food, values, life skills & wellness to underprivileged children from 1st to 10th class since 2021.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Button
                  size="lg"
                  className="text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group h-12 sm:h-14"
                  asChild
                >
                  {/* <Link to="/donate">
                    Donate Now
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:fill-white transition-all" />
                  </Link> */}
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg border-2 h-12 sm:h-14">
                  Learn Our Story
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-6 border-t-2 border-border">
                <div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-primary mb-0.5 sm:mb-1">2,500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">Students Empowered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-primary mb-0.5 sm:mb-1">108</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">Villages Reached</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-primary mb-0.5 sm:mb-1">2 Hrs</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">Daily Support</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>

                {/* Main Image */}
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Children learning together"
                    className="w-full h-[500px] object-cover"
                  />

                  {/* Floating Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-primary/10 animate-slide-up">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white fill-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-foreground">2,500+</div>
                        <div className="text-sm text-muted-foreground font-medium">Children Empowered</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      {/* <WhyDonateSection /> */}

      {/* Call to Action Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoOHYtNGgtOHptLTQgNHY0aDR2LTRoLTR6bTAgMGgtNHY0aDR2LTR6bTAgMHYtNGg0di00aC00djR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Shape Young Minds for a Better India
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Support our mission to reach 1000 villages by 2030, providing education, food, and values to underprivileged children
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg font-semibold shadow-lg bg-white text-primary hover:bg-white/90" asChild>
              {/* <Link to="/donate">Become a Monthly Donor</Link> */}
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-semibold bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Kits Section */}
      <section className="relative py-20 sm:py-28 px-4 bg-gradient-to-br from-orange-50/50 via-background to-red-50/30 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 146, 60, 0.4) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-6 sm:px-8 py-3 sm:py-4 bg-white/90 backdrop-blur-sm shadow-2xl rounded-full border-2 border-primary/20 animate-fade-in">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary animate-pulse" />
              <p className="text-primary text-sm sm:text-base font-bold uppercase tracking-wider">Popular Causes Now</p>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 text-foreground leading-[1.1] animate-fade-in" style={{ animationDelay: '100ms' }}>
              Together We Can
              <span className="block mt-2 sm:mt-3">
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Make a Difference
                </span>
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Each kit is carefully curated to address specific needs in underserved communities
            </p>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent via-primary to-primary rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-primary via-primary to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {kits.map((kit, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${400 + index * 100}ms` }}>
                {/* <DonationKitCard {...kit} /> */}
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 sm:mt-20 text-center animate-fade-in" style={{ animationDelay: '700ms' }}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-10 py-5 sm:py-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-primary/20 shadow-xl">
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl font-bold text-foreground mb-1">
                  Can&apos;t decide which kit to donate?
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Our team can help you choose the perfect option for maximum impact
                </p>
              </div>
              <Button
                size="lg"
                className="whitespace-nowrap bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => setIsGuidanceDialogOpen(true)}
              >
                Get Guidance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* Photo Gallery Section */}
      {/* <PhotoGallerySection /> */}

      {/* Impact Stats */}
      <section className="relative py-16 sm:py-20 px-3 sm:px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-white shadow-lg rounded-full border-2 border-primary/20">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
              <p className="text-primary text-xs sm:text-sm font-bold uppercase tracking-wide">Our Impact</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-foreground leading-tight">
              Building Futures with
              <span className="block mt-1 sm:mt-2 text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Your Support
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Together, we've created lasting change in thousands of lives across communities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "2,500+", label: "Students Empowered", icon: "📚", gradient: "from-orange-500 to-red-500", delay: "0ms" },
              { number: "108", label: "Villages Reached", icon: "🌍", gradient: "from-blue-500 to-cyan-500", delay: "100ms" },
              { number: "80", label: "Aikya Vidya Teachers", icon: "👨‍🏫", gradient: "from-purple-500 to-pink-500", delay: "200ms" },
              { number: "2,28,000+", label: "Working Hours", icon: "⏰", gradient: "from-rose-500 to-pink-500", delay: "300ms" }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: stat.delay }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-3xl"
                  style={{ background: `linear-gradient(135deg, var(--primary), var(--accent))` }}></div>

                {/* Card */}
                <div className="relative bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center border-2 border-white shadow-xl hover:shadow-2xl transition-all">
                  {/* Icon Container with Gradient Background */}
                  <div className="relative mb-4 sm:mb-6 inline-block">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <span className="text-3xl sm:text-4xl">{stat.icon}</span>
                    </div>
                    {/* Decorative Ring */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl sm:rounded-3xl opacity-20 group-hover:scale-125 transition-transform duration-300`}></div>
                  </div>

                  {/* Number with Counter Animation */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-sm sm:text-base font-bold text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`mt-4 sm:mt-6 h-1 w-16 sm:w-20 mx-auto rounded-full bg-gradient-to-r ${stat.gradient} group-hover:w-full transition-all duration-300`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Be part of our growing community of changemakers
            </p>
            <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group" asChild>
              {/* <Link to="/donate">
                Start Making Impact Today
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:fill-white transition-all" />
              </Link> */}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Guidance Dialog */}
      {/* <GuidanceDialog
        open={isGuidanceDialogOpen}
        onOpenChange={setIsGuidanceDialogOpen}
      /> */}
    </div>
  );
};

export default Donationkit;
