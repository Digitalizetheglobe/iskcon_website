import { NextRequest, NextResponse } from "next/server";

// Proxy route to external donation amounts API
export async function GET(request: NextRequest) {
  try {
    // Get the external API URL
    const externalApiUrl = process.env.NEXT_PUBLIC_DONATION_API_URL || 'http://localhost:5000/api/api/donations';
    
    // Replace /donations with /donation-amounts
    let baseUrl = externalApiUrl.includes('/donations') 
      ? externalApiUrl.replace('/donations', '/donation-amounts')
      : `${externalApiUrl.replace(/\/$/, '')}/donation-amounts`;
    
    // Ensure it's a full URL
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
      baseUrl = `http://localhost:5000/api/donation-amounts`;
    }
    
    const apiUrl = `${baseUrl}/grouped/by-category`;
    
    console.log('Proxying request to:', apiUrl);
    
    // Fetch from external API
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      // If external API fails (e.g., 404), return empty data instead of error
      // This allows the frontend to use default values gracefully
      console.warn('External API not available:', response.status, response.statusText);
      console.log('Returning empty data - frontend will use default values');
      
      return NextResponse.json(
        {
          success: true,
          data: {
            food: [],
            giftFuture: [],
            giftLearning: [],
          },
        },
        { status: 200 }
      );
    }

    const data = await response.json();
    
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // On any error, return empty data instead of error
    // This allows the frontend to use default values gracefully
    console.warn('Error proxying donation amounts API:', error);
    console.log('Returning empty data - frontend will use default values');
    
    return NextResponse.json(
      {
        success: true,
        data: {
          food: [],
          giftFuture: [],
          giftLearning: [],
        },
      },
      { status: 200 }
    );
  }
}

