"use client"; // This marks the component as a client-side component
import { useParams } from 'next/navigation';

const HotelPage = () => {
  const params = useParams(); // Use useParams to get dynamic segments from the URL
  const id = params.id; // Access the dynamic 'id' parameter

  return (
    <div>
      <h1>Hotel Details for ID: {id}</h1>
      <p>Here you can display more detailed information about the hotel.</p>
    </div>
  );
};

export default HotelPage;
