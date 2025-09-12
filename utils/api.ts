// utils/api.ts
export async function fetchTestimonials() {
  try {
    const res = await fetch("http://localhost:5000/api/testimonials/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}
