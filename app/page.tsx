"use client"
import React, { useState, useEffect } from 'react';
import { HotelInfoDetails } from '@/lib/HotelDetails';

import DisplayHotels from "@/components/DisplayHotels";
import { getDocumentsFromFirestore } from '@/lib/firestore';
import Loading from '@/components/Loading';

export default function Home() {
  const [data, setData] = useState<{ id: string; data: HotelInfoDetails }[] | null>();


  useEffect(() => {
    const fetchData = async () => {
      const temp = await getDocumentsFromFirestore();
      setData(temp);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <DisplayHotels data={data} /> : <Loading />}
    </div>
  );
}
