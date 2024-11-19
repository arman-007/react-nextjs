"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Header from "@/components/header";
import NavWithGallery from "@/components/navWithGallery";
import DetailNavBar from "@/components/detailNavBar";
import HotelInfo from "@/components/hotelInfo";
import PropertyDescription from "@/components/propertyDescription";
import FaqAI from "@/components/FaqAI";
import HouseRules from "@/components/houseRules";
import TravelerBox from "@/components/TravelerModal";

// Define a type for Hotel data
interface Hotel {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  amenities: string[];
  hostInfo: object;
  address: string;
  latitude: number;
  longitude: number;
  rooms: object[];
}

const HotelPage = () => {
  const params = useParams(); // Get dynamic parameters from the URL
  const id = params?.id; // Extract the hotel ID from the URL
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch hotel data based on the id using Axios
      axios.get(`http://localhost:5000/hotel/${id}`)
        .then((response) => {
          setHotel(response.data);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!hotel) {
    return <div>Hotel not found</div>;
  }
  console.log(hotel);
  return (
    <div>
      <NavWithGallery images= {hotel.images}/>
      <main>
        <DetailNavBar />
        <HotelInfo hotel={hotel} />
        <PropertyDescription description={hotel.description} amenities={hotel.amenities}/>
        <FaqAI />
        <HouseRules rules={hotel.amenities} />
        {/* <TravelerBox /> */}
      </main>
    </div>
  );
}

export default HotelPage;