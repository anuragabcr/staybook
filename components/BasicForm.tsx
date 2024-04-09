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
                Required Fields
              </h1>
            </div>
            <p className="mt-4 text-sm leading-5 text-gray-600">
              You must fill these fields for saving it.
            </p>
          </div>
          <div>
            <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
              <div className="md:w-64">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelName"
                >
                  Hotel Name
                </label>
                <input
                  type="text"
                  id="hotelName"
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleChange}
                  placeholder="Enter hotel name"
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                />
                {errors.hotelName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelName}
                  </p>
                )}
              </div>
              <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelEmailId"
                >
                  Hotel Email Id
                </label>
                <input
                  type="text"
                  name="hotelEmailId"
                  id="hotelEmailId"
                  value={formData.hotelEmailId}
                  onChange={handleChange}
                  placeholder="hotelEmailId"
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                />
                {errors.hotelEmailId && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelEmailId}
                  </p>
                )}
              </div>
            </div>
            <div className="md:flex items-center lg:ml-24 mt-8">
              <div className="md:w-64">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelContactNumber"
                >
                  Hotel Contact Number
                </label>
                <input
                  type="number"
                  name="hotelContactNumber"
                  value={formData.hotelContactNumber}
                  onChange={handleChange}
                  id="hotelContactNumber"
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  placeholder="hotelContactNumber"
                />
                {errors.hotelContactNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelContactNumber}
                  </p>
                )}
              </div>
              <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelStartingPrice"
                >
                  Hotel Starting Price
                </label>
                <input
                  type="number"
                  name="hotelStartingPrice"
                  value={formData.hotelStartingPrice}
                  onChange={handleChange}
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  id="hotelStartingPrice"
                  placeholder="hotelStartingPrice"
                />
                {errors.hotelStartingPrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelStartingPrice}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
          <div className="w-80">
            <div className="flex items-center">
              <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                Optional Fields
              </h1>
            </div>
            <p className="mt-4 text-sm leading-5 text-gray-600">
              You can skip these fields and edit it later.
            </p>
          </div>
          <div>
            <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
              <div className="md:w-64">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelAddress"
                >
                  Hotel Address
                </label>
                <input
                  type="name"
                  name="hotelAddress"
                  value={formData.hotelAddress}
                  onChange={handleChange}
                  id="hotelAddress"
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  placeholder="hotelAddress"
                />
                {errors.hotelAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelAddress}
                  </p>
                )}
              </div>
              <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelDescription"
                >
                  Hotel Description
                </label>
                <input
                  type="name"
                  name="hotelDescription"
                  value={formData.hotelDescription}
                  onChange={handleChange}
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  id="hotelDescription"
                  placeholder="hotelDescription"
                />
                {errors.hotelDescription && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelDescription}
                  </p>
                )}
              </div>
            </div>
            <div className="md:flex items-center lg:ml-24 mt-8">
              <div className="md:w-64">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelStarRating"
                >
                  Hotel Star Rating
                </label>
                <input
                  type="number"
                  name="hotelStarRating"
                  value={formData.hotelStarRating}
                  onChange={handleChange}
                  id="hotelStarRating"
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  placeholder="hotelStarRating"
                />
                {errors.hotelStarRating && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelStarRating}
                  </p>
                )}
              </div>
              <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label
                  className="text-sm leading-none text-gray-800"
                  htmlFor="hotelLandmark"
                >
                  Hotel Landmark
                </label>
                <input
                  type="name"
                  name="hotelLandmark"
                  value={formData.hotelLandmark}
                  onChange={handleChange}
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  id="hotelLandmark"
                  placeholder="hotelLandmark"
                />
                {errors.hotelLandmark && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hotelLandmark}
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
