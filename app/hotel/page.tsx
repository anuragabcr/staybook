"use client";
import React, { useState } from "react";
import * as yup from "yup";

import { ImagesList, HotelInfoDetails } from "@/lib/HotelDetails";
import { addDataToFirestore } from "@/lib/firestore";
import { ErrorObject } from "@/lib/type";
import FormSteps from "@/components/FormSteps";
import BasicForm from "@/components/BasicForm";

const CreateForm = () => {
  const initialFormData: HotelInfoDetails = new HotelInfoDetails();
  const [formData, setFormData] = useState<HotelInfoDetails>(initialFormData);
  const [errors, setErrors] = useState<ErrorObject>({});
  const [active, setActive] = useState("step1");

  const schema = yup.object().shape({
    hotelName: yup.string().required("Hotel name is required"),
    hotelEmailId: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    hotelContactNumber: yup
      .number()
      .required("Contact number is required")
      .test(
        "test1",
        "Must be 10 digit",
        (value: number) => String(value).length === 10
      ),
    hotelStartingPrice: yup
      .number()
      .required("Starting price is required")
      .min(0),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("Form submitted with data:", formData);
      addDataToFirestore(formData);
      setFormData(initialFormData);
      setErrors({});
    } catch (validationErrors: any) {
      const errors = validationErrors.inner.reduce((acc: any, error: any) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setErrors(errors);
    }
  };

  return (
    <div className="flex items-center justify-center m-5">
      <div className="xl:w-10/12 w-full px-8">
        <FormSteps active={active} setActive={setActive} />
        <hr />
        <BasicForm
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
