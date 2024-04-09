"use client";
import React, { useState } from "react";
import * as yup from "yup";

import { ImagesList, HotelInfoDetails } from "@/lib/HotelDetails";
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
      .test((value: number) => String(value).length === 10),
    hotelStartingPrice: yup.number().required("Starting price is required"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("Form submitted with data:", formData);
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
    <div className="flex items-center justify-center">
      <div className="xl:w-10/12 w-full px-8">
        <FormSteps active={active} setActive={setActive} />
        <hr />
        <BasicForm
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default CreateForm;
