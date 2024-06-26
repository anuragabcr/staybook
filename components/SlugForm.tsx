import React from "react";

import { HotelInfoDetails } from "@/lib/HotelDetails";
import { ErrorObject } from "@/lib/type";

interface BasicFormProps {
  formData: HotelInfoDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: ErrorObject;
}

const BasicForm = ({ formData, handleChange, errors }: BasicFormProps) => {
  return (
    <>
      <div className="xl:px-24">
        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
          <div className="w-80">
            <div className="flex items-center">
              <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                Address Fields
              </h1>
            </div>
            <p className="mt-4 text-sm leading-5 text-gray-600">
              Details about Hotel Location
            </p>
          </div>
          <div>
            <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
              <div className="md:w-64">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelCountry"
                >
                  Hotel Country 
                </label>
                <input
                  type="text"
                  id="hotelCountry"
                  name="hotelCountry"
                  value={formData.hotelCountry}
                  onChange={handleChange}
                  placeholder="Enter hotelCountry name"
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                />
                {errors.hotelCountry && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelCountry}
                  </p>
                )}
              </div>
              <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelCity"
                >
                  Hotel City
                </label>
                <input
                  type="text"
                  name="hotelCity"
                  id="hotelCity"
                  value={formData.hotelCity}
                  onChange={handleChange}
                  placeholder="hotelCity"
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                />
                {errors.hotelCity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelCity}
                  </p>
                )}
              </div>
            </div>
            <div className="md:flex items-center lg:ml-24 mt-8">
              <div className="md:w-64">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelRegion"
                >
                  Hotel Region
                </label>
                <input
                  type="text"
                  name="hotelRegion"
                  value={formData.hotelRegion}
                  onChange={handleChange}
                  id="hotelRegion"
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  placeholder="hotelRegion"
                />
                {errors.hotelRegion && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelRegion}
                  </p>
                )}
              </div>
              <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelState"
                >
                  Hotel State
                </label>
                <input
                  type="text"
                  name="hotelState"
                  value={formData.hotelState}
                  onChange={handleChange}
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  id="hotelState"
                  placeholder="hotelState"
                />
                {errors.hotelState && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelState}
                  </p>
                )}
              </div>
              <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelPincode"
                >
                  Hotel Pincode
                </label>
                <input
                  type="text"
                  name="hotelPincode"
                  value={formData.hotelPincode}
                  onChange={handleChange}
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  id="hotelPincode"
                  placeholder="hotelPincode"
                />
                {errors.hotelPincode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelPincode}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicForm;
