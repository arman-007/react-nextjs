// import { NextResponse } from 'next/server';

// export async function GET() {
//   const res = await fetch('http://localhost:5000/hotel'); // API of your Express app
//   const hotels = await res.json();
//   return NextResponse.json(hotels);
// }


// import axios from 'axios';

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// // Fetch all hotels
// export const getAllHotels = async () => {
//   return await axios.get(`${API_BASE_URL}/hotel`);
// };

// // Fetch hotel by ID
// export const getHotelById = async (hotelId: string) => {
//   return await axios.get(`${API_BASE_URL}/hotel/${hotelId}`);
// };

// // Add a new hotel
// export const addHotel = async (hotelData: FormData) => {
//   return await axios.post(`${API_BASE_URL}/hotel`, hotelData);
// };

// // Upload images for a hotel
// export const uploadImages = async (formData: FormData) => {
//   return await axios.post(`${API_BASE_URL}/hotel/images`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
// };


import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotel`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hotels' });
  }
}