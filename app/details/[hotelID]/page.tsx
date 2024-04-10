"use client"

import Loading from "@/components/Loading";
import { HotelInfoDetails } from "@/lib/HotelDetails";
import { getDocumentById } from "@/lib/firestore";
import { useEffect, useState } from "react";

interface EditHotelProps {
    params: {
        hotelID: string;
    };
}
const EditHotel: React.FC<EditHotelProps> = ({ params: { hotelID } }) => {
    const [loading, setLoading] = useState(true)
    const initialFormData: HotelInfoDetails = new HotelInfoDetails();
    const [formData, setFormData] = useState<HotelInfoDetails >(initialFormData);

    useEffect(() => {
        const fetchData = async () => {
          const temp = await getDocumentById(hotelID);
          if (temp !== null) setFormData(temp);
          setLoading(false)
        };
    
        fetchData();
      }, []);

    if (loading) {
        return <Loading />
    }
    
    return (
        <div className="flex items-center justify-center m-2">
        <div className="xl:w-10/12 w-full px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
        {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="mb-2">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    {key}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {typeof value === 'object' ? (<div className="sm:divide-y sm:divide-gray-200">
                    {Object.entries(value).map(([key2, value2]) => (
                        <div key={key2} className="mb-2">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                {key2}
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {typeof value === 'object' ? JSON.stringify(value2) : value}   
                            </dd>
                            </div>
                            </div>
                    ))}
                </div>) : value}
                </dd>
            </div>
        </div>
      ))}
            
        </dl>
    </div>
</div>
</div>
</div>
    )
}

export default EditHotel

{/* <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Hotel Details</h2>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="mb-2">
          <p className="font-semibold">{key}:</p>
          <p className="ml-2">{typeof value === 'object' ? JSON.stringify(value) : value}</p>
        </div>
      ))}
    </div> */}