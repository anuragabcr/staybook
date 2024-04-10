"use client";

import Loading from "@/components/Loading";
import { HotelInfoDetails } from "@/lib/HotelDetails";
import {
  getDocumentById,
  updateDocumentField,
  updateDocumentInFirestore,
  uploadImage,
} from "@/lib/firestore";
import { ErrorObject } from "@/lib/type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as yup from "yup";

interface EditHotelProps {
  params: {
    hotelID: string;
  };
}
const EditHotel: React.FC<EditHotelProps> = ({ params: { hotelID } }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const initialFormData: HotelInfoDetails = new HotelInfoDetails();
  const [formData, setFormData] = useState<HotelInfoDetails>(initialFormData);
  const [hotelData, setHotelData] = useState<HotelInfoDetails>(initialFormData);
  const [errors, setErrors] = useState<ErrorObject>({});
  const [active, setActive] = useState("step1");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const [isFieldFocused, setIsFieldFocused] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      const temp = await getDocumentById(hotelID);
      if (temp !== null) {
        setFormData(temp);
        setHotelData(temp);
      }
      setLoading(false);
    };

    fetchData();
  }, [hotelID]);

  if (loading) {
    return <Loading />;
  }

  const handleFieldFocus = (fieldName: string) => {
    setIsFieldFocused((prevState) => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

  const handleFieldBlur = (fieldName: string) => {
    setIsFieldFocused((prevState) => ({
      ...prevState,
      [fieldName]: false,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = (fieldName: keyof HotelInfoDetails) => {
    handleFieldBlur(fieldName);
    // @ts-ignore (Suppress specific error message)
    updateDocumentField(hotelID, fieldName, formData[fieldName]);
    setHotelData(formData);
    console.log(`Update ${fieldName} with value:`, formData[fieldName]);
  };

  const handleCancel = (fieldName: keyof HotelInfoDetails) => {
    handleFieldBlur(fieldName);
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: hotelData[fieldName],
    }));
  };

  return (
    <div className="flex items-center justify-center m-2">
      <div className="xl:w-10/12 w-full px-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Update Hotel</h2>
          <form>
            {Object.keys(hotelData).map((key) => {
              const value = hotelData[key as keyof HotelInfoDetails];
              if (typeof value === "string" || typeof value === "number") {
                return (
                  <div key={key} className="mb-4">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor={key}
                    >
                      {key}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id={key}
                        name={key}
                        // @ts-ignore (Suppress specific error message)
                        value={formData[key as keyof HotelInfoDetails]}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus(key)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                      />
                      {isFieldFocused[key] && (
                        <div className="absolute right-0 top-0 mt-1 mr-2">
                          <button
                            type="button"
                            onClick={() =>
                              handleUpdate(key as keyof HotelInfoDetails)
                            }
                            className="bg-green-500 text-white py-1 px-3 rounded-md mr-1"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleCancel(key as keyof HotelInfoDetails)
                            }
                            className="bg-red-500 text-white py-1 px-3 rounded-md"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditHotel;
