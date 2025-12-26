// "use client";

// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { Heart, ShoppingBasket, Users, Clock, CheckCircle, Sparkles, Plus, Minus } from "lucide-react";
// import { useState } from "react";

// interface GroceryItemType {
//   name: string;
//   amount: string;
//   price: number;
//   icon: string;
//   description: string;
//   quantity: number;
// }

// const GroceryDonation = () => {
//   const router = useRouter();
//   const [groceryItems, setGroceryItems] = useState<GroceryItemType[]>([
//     { name: "Premium Rice", amount: "10 Kg", price: 500, icon: "🍚", description: "High-quality, nutritious grains", quantity: 0 },
//     { name: "Pure Desi Ghee", amount: "1 Liter", price: 600, icon: "🧈", description: "100% organic and pure", quantity: 0 },
//     { name: "Masoor Dal", amount: "5 Kg", price: 400, icon: "🫘", description: "Protein-rich pulses", quantity: 0 },
//     { name: "Wheat Flour", amount: "5 Kg", price: 250, icon: "🌾", description: "Fresh milled flour", quantity: 0 },
//     { name: "Cooking Oil", amount: "1 Liter", price: 180, icon: "🫗", description: "Heart-healthy oil", quantity: 0 },
//     { name: "Essential Spices", amount: "Complete Set", price: 150, icon: "🧂", description: "Salt & basic spices", quantity: 0 }
//   ]);

//   const updateQuantity = (index: number, change: number) => {
//     setGroceryItems(prev => {
//       const newItems = [...prev];
//       const newQuantity = Math.max(0, newItems[index].quantity + change);
//       newItems[index] = { ...newItems[index], quantity: newQuantity };
//       return newItems;
//     });
//   };

//   const selectedItems = groceryItems.filter(item => item.quantity > 0);
//   const totalAmount = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   const handleDonateNow = () => {
//     if (selectedItems.length === 0) {
//       alert("Please select at least one item to donate");
//       return;
//     }
//     // Navigate to checkout page with selected items encoded in the URL
//     const encodedItems = encodeURIComponent(JSON.stringify(selectedItems));
//     router.push(`/grocery-checkout?items=${encodedItems}`);
//   };

//   const impactPoints = [
//     { icon: Users, text: "Provides nutritious millet-based meals", color: "from-orange-500 to-red-500" },
//     { icon: Clock, text: "Supports 2 hours daily education program", color: "from-blue-500 to-cyan-500" },
//     { icon: Heart, text: "Ensures proper nutrition for children", color: "from-rose-500 to-pink-500" },
//     { icon: Sparkles, text: "Helps children focus on learning", color: "from-purple-500 to-pink-500" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-orange-50 via-background to-orange-50/30">
     
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-orange-500/10"></div>
        
//         {/* Decorative Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
//           <div className="absolute bottom-20 -right-20 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             {/* Left Content */}
//             <div className="animate-fade-in">
//               <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-white shadow-lg rounded-full border-2 border-orange-200">
//                 <ShoppingBasket className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
//                 <p className="text-orange-600 text-xs sm:text-sm font-bold uppercase tracking-wide">Food Security</p>
//               </div>
              
//               <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-foreground leading-[1.1]">
//                 Nourish Children with
//                 <span className="block mt-1 sm:mt-2">
//                   <span className="text-gradient bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
//                     Nutritious Food
//                   </span>
//                 </span>
//               </h1>
              
//               <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
//                 Support our millet-based nutritious food program providing healthy evening meals to underprivileged children every day.
//               </p>

//               <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
//                 <div className="text-center">
//                   <div className="text-3xl sm:text-5xl font-extrabold text-orange-600 mb-1">₹1,200</div>
//                   <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Per Kit</div>
//                 </div>
//                 <div className="h-12 w-px bg-border"></div>
//                 <div className="text-center">
//                   <div className="text-3xl sm:text-5xl font-extrabold text-orange-600 mb-1">63+</div>
//                   <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Daily Meals</div>
//                 </div>
//                 <div className="h-12 w-px bg-border"></div>
//                 <div className="text-center">
//                   <div className="text-3xl sm:text-5xl font-extrabold text-orange-600 mb-1">2,500+</div>
//                   <div className="text-xs sm:text-sm text-muted-foreground font-semibold">Children Fed</div>
//                 </div>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                 <Button 
//                   size="lg" 
//                   className="h-12 sm:h-14 text-base sm:text-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
//                   asChild
//                 >
//                   {/* <Link to="/donate/grocery">
//                     Donate Grocery Kit
//                     <Heart className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:fill-white transition-all" />
//                   </Link> */}
//                 </Button>
//                 <Button size="lg" variant="outline" className="h-12 sm:h-14 text-base sm:text-lg border-2 border-orange-600 text-orange-600 hover:bg-orange-50">
//                   Learn More
//                 </Button>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="relative animate-fade-in lg:block hidden" style={{ animationDelay: '200ms' }}>
//               <div className="relative">
//                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
//                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
                
//                 <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
//                   <img
//                     src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                     alt="Grocery items"
//                     className="w-full h-[500px] object-cover"
//                   />
                  
//                   <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-200 animate-slide-up">
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
//                         <ShoppingBasket className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <div className="text-2xl font-extrabold text-foreground">2,500+</div>
//                         <div className="text-sm text-muted-foreground font-medium">Children Fed Daily</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What's Included Section - Now Interactive */}
//       <section className="py-12 sm:py-20 px-3 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10 sm:mb-16">
//             <div className="inline-flex items-center gap-2 mb-4 px-4 sm:px-6 py-2 sm:py-3 bg-orange-100 rounded-full border-2 border-orange-200">
//               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
//               <span className="text-orange-600 text-xs sm:text-sm font-bold uppercase tracking-wide">Select Items to Donate</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
//               Choose What You&apos;d Like to Donate
//             </h2>
//             <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
//               Select quantities for each item. Every contribution makes a difference!
//             </p>
//             {/* <Button 
//               variant="outline" 
//               size="lg"
//               className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 h-12"
//               asChild
//             >
//               <Link to="/grocery-list">
//                 View All Groceries
//                 <ShoppingBasket className="w-4 h-4 ml-2" />
//               </Link>
//             </Button> */}
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
//             {groceryItems.map((item, index) => (
//               <Card 
//                 key={index} 
//                 className={`group transition-all duration-300 border-2 ${
//                   item.quantity > 0 
//                     ? 'border-orange-400 shadow-xl ring-2 ring-orange-200' 
//                     : 'border-border hover:border-orange-300 hover:shadow-xl'
//                 }`}
//               >
//                 <CardContent className="p-5 sm:p-6">
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-lg transition-all flex-shrink-0 ${
//                       item.quantity > 0 
//                         ? 'bg-gradient-to-br from-orange-500 to-red-500 scale-110' 
//                         : 'bg-gradient-to-br from-orange-400 to-red-400 group-hover:scale-110'
//                     }`}>
//                       {item.icon}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 truncate group-hover:text-orange-600 transition-colors">
//                         {item.name}
//                       </h3>
//                       <Badge className="mb-2 bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-300">
//                         {item.amount}
//                       </Badge>
//                       <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t border-border">
//                     <div className="text-left">
//                       <div className="text-xs text-muted-foreground">Price per unit</div>
//                       <div className="text-lg font-bold text-orange-600">₹{item.price}</div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="h-9 w-9 rounded-full border-2"
//                         onClick={() => updateQuantity(index, -1)}
//                         disabled={item.quantity === 0}
//                       >
//                         <Minus className="w-4 h-4" />
//                       </Button>
//                       <div className="w-12 text-center">
//                         <span className="text-xl font-bold text-foreground">{item.quantity}</span>
//                       </div>
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="h-9 w-9 rounded-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
//                         onClick={() => updateQuantity(index, 1)}
//                       >
//                         <Plus className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>

//                   {item.quantity > 0 && (
//                     <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200 animate-fade-in">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-orange-800 font-semibold">Total:</span>
//                         <span className="text-orange-900 font-bold">₹{(item.price * item.quantity).toLocaleString()}</span>
//                       </div>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Sticky Bottom Bar */}
//           <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
//             selectedItems.length > 0 ? 'translate-y-0' : 'translate-y-full'
//           }`}>
//             <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 shadow-2xl border-t-4 border-orange-400">
//               <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
//                 <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                   <div className="flex items-center gap-4 sm:gap-6">
//                     <div className="text-white text-center sm:text-left">
//                       <div className="text-xs sm:text-sm font-medium opacity-90">Total Items Selected</div>
//                       <div className="text-2xl sm:text-3xl font-extrabold">{selectedItems.length}</div>
//                     </div>
//                     <div className="h-12 w-px bg-white/30 hidden sm:block"></div>
//                     <div className="text-white text-center sm:text-left">
//                       <div className="text-xs sm:text-sm font-medium opacity-90">Total Donation Amount</div>
//                       <div className="text-2xl sm:text-3xl font-extrabold">₹{totalAmount.toLocaleString()}</div>
//                     </div>
//                   </div>
//                   <Button 
//                     size="lg"
//                     onClick={handleDonateNow}
//                     className="h-12 sm:h-14 px-6 sm:px-10 text-base sm:text-lg font-bold bg-white text-orange-600 hover:bg-orange-50 shadow-xl hover:scale-105 transition-all"
//                   >
//                     Donate Now
//                     <ShoppingBasket className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 sm:mt-12 text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-orange-200">
//             <div className="flex items-center justify-center gap-3 text-orange-800">
//               <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
//               <p className="text-sm sm:text-base font-semibold">
//                 All items are quality-checked and sourced from trusted suppliers to ensure freshness and safety
//               </p>
//             </div>
//           </div>

//           {/* Add padding at bottom to prevent content from being hidden by sticky bar */}
//           <div className="h-32 sm:h-40"></div>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section className="py-12 sm:py-20 px-3 sm:px-6 bg-gradient-to-br from-orange-50 via-background to-red-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10 sm:mb-16">
//             <div className="inline-flex items-center gap-2 mb-4 px-4 sm:px-6 py-2 sm:py-3 bg-white shadow-lg rounded-full border-2 border-orange-200">
//               <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 fill-orange-600" />
//               <span className="text-orange-600 text-xs sm:text-sm font-bold uppercase tracking-wide">Real Impact</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
//               How Your Grocery Kit Helps
//             </h2>
//             <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
//               Your donation creates immediate and lasting impact on underprivileged children
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16">
//             {impactPoints.map((point, index) => (
//               <Card 
//                 key={index} 
//                 className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-orange-300"
//               >
//                 <CardContent className="p-6 sm:p-8">
//                   <div className="flex items-start gap-4 sm:gap-5">
//                     <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
//                       <point.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
//                     </div>
//                     <p className="flex-1 text-base sm:text-lg font-semibold text-foreground pt-2 group-hover:text-orange-600 transition-colors">
//                       {point.text}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Success Story */}
//           <Card className="border-2 border-orange-300 shadow-xl overflow-hidden">
//             <CardContent className="p-6 sm:p-10">
//               <div className="flex flex-col md:flex-row gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
//                     <span className="text-3xl sm:text-4xl">💝</span>
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <div className="inline-block px-3 sm:px-4 py-1 bg-orange-100 rounded-full mb-3">
//                     <span className="text-orange-700 text-xs font-bold uppercase tracking-wide">Success Story</span>
//                   </div>
//                   <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4">The Kumar Family&apos;s Journey</h3>
//                   <blockquote className="text-muted-foreground text-base sm:text-lg leading-relaxed italic border-l-4 border-orange-500 pl-4 sm:pl-6">
//                     &quot;The Kumar family was struggling to feed their three children. Your Grocery Kit ensured the kids never went to bed hungry and could focus on their studies. Today, all three children are excelling in school, and the parents can focus on long-term goals instead of daily survival.&quot;
//                   </blockquote>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 sm:py-20 px-3 sm:px-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoOHYtNGgtOHptLTQgNHY0aDR2LTRoLTR6bTAgMGgtNHY0aDR2LTR6bTAgMHYtNGg0di00aC00djR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">
//             Ready to Make a Difference?
//           </h2>
//           <p className="text-base sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
//             Your grocery kit donation can change a family&apos;s life today. Every meal matters.
//           </p>
//           <Button 
//             size="lg" 
//             className="h-12 sm:h-16 px-6 sm:px-10 text-base sm:text-xl font-semibold shadow-2xl bg-white text-orange-600 hover:bg-orange-50 hover:scale-105 transition-all group"
//             asChild
//           >
//             {/* <Link to="/donate/grocery">
//               Donate a Grocery Kit Now
//               <ShoppingBasket className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:scale-110 transition-transform" />
//             </Link> */}
//           </Button>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default GroceryDonation;
