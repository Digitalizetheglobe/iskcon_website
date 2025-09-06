import { NextRequest, NextResponse } from 'next/server';

// Define the routes that should NOT be redirected (your existing routes)
const EXCLUDED_ROUTES = [
  '/about-us',
  '/contact', 
  '/donate',
  '/donation',
  '/blog',
  '/events',
  '/gallery',
  '/volunteer',
  '/governance',
  '/policies',
  '/terms-conditions',
  '/trust',
  '/refund',
  '/certificates',
  '/our-initiative',
  '/our initiative', // Handle the space in folder name
  '/api',
  '/dashboard',
  '/_next', // Next.js internal routes
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/manifest.json',
  '/sw.js',
  '/workbox-*.js',
  '/static',
  '/images',
  '/public',
  '/assets',
  '/css',
  '/js',
  '/fonts',
  '/icons',
  '/logos',
  '/photos',
  '/photosOfEvents',
  '/GalleryImages',
  '/galleryection',
  '/blogs',
  '/ISKON.pdf',
  '/site.webmanifest',
  '/android-chrome-*.png',
  '/apple-touch-icon.png',
  '/favicon-*.png',
  '/file.svg',
  '/globe.svg',
  '/next.svg',
  '/vercel.svg',
  '/window.svg'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for excluded routes
  if (EXCLUDED_ROUTES.some(route => {
    // Handle exact matches
    if (pathname === route) return true;
    
    // Handle routes that start with the excluded path
    if (route.endsWith('*') && pathname.startsWith(route.slice(0, -1))) return true;
    
    // Handle routes that should match the beginning of the path
    if (pathname.startsWith(route + '/')) return true;
    
    return false;
  })) {
    return NextResponse.next();
  }
  
  // Skip middleware for the home page itself
  if (pathname === '/') {
    return NextResponse.next();
  }
  
  // Skip middleware for files with extensions (images, CSS, JS, etc.)
  if (pathname.includes('.')) {
    return NextResponse.next();
  }
  
  // Extract the campaign name from the path (remove leading slash)
  const campaign = pathname.slice(1);
  
  // Create the redirect URL with UTM parameters
  const redirectUrl = new URL('/', request.url);
  redirectUrl.searchParams.set('utm_source', 'AIKYA');
  redirectUrl.searchParams.set('utm_medium', 'SMS');
  redirectUrl.searchParams.set('utm_campaign', campaign);
  
  // Perform the redirect
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
