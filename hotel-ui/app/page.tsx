"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";

// Define a type for Hotel
interface Hotel {
  id: string;
  title: string;
  slug: string;
}

export default function Page() {
  // State for storing hotels data
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch hotels data when the component is mounted
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        // Making a GET request to the backend server
        const response = await fetch("http://localhost:5000/hotel");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert response to JSON
        const data = await response.json();

        // Transforming the received data for easier handling
        const hotelsArray: Hotel[] = Object.entries(data).map(
          ([id, title]) => ({
            id,
            title: title as string, // Type assertion
            slug: (title as string).toLowerCase().replace(/\s/g, "-")
          })
        );

        setHotels(hotelsArray);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  // Display a loading indicator if data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display an error message if the request fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the list of hotels with their ID and Title
  return (
    <>
      {/* Header Section */}
      <div className="w-full">
        <Header />
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
        <div className="w-full max-w-lg text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Hotel Listings</h1>
        </div>

        <ul className="w-full max-w-lg space-y-6">
          {hotels.map((hotel) => (
            <li
              key={hotel.id}
              className="bg-white p-5 rounded shadow-md hover:shadow-lg transition-shadow"
            >
              <Link
                href={`/hotel-details/${hotel.slug}/${hotel.id}`}
                className="text-blue-600 hover:underline text-lg"
              >
                <strong>{hotel.title}</strong> (ID: {hotel.id})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
