import React from "react";
import Image from "next/image";

interface InputFormProps {
  active: string;
  setActive: (active: string) => void;
}

const FormSteps = ({ active, setActive }: InputFormProps) => {
  return (
    <>
      <div className="bg-gray-100 py-12 flex flex-wrap items-center justify-center m-5">
        <div
          className="w-52 h-16 relative md:mt-0 mt-4 cursor-pointer"
          onClick={() => setActive("step1")}
        >
          <Image
            src={
              active == "step1"
                ? "https://i.ibb.co/DwNs7zG/Steps.png"
                : "https://i.ibb.co/c2k4Gbr/Steps3.png"
            }
            alt="step1"
            className="w-full h-full"
            width={100}
            height={100}
          />
          <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
            <p
              className={`w-full text-sm font-medium leading-4 ${
                active == "step1" ? "text-white" : "text-gray-700"
              }`}
            >
              Basic details
            </p>
            <p
              className={`w-full text-xs mt-1 leading-none ${
                active == "step1" ? "text-white" : "text-gray-500"
              }`}
            >
              Enter the basic information
            </p>
          </div>
        </div>
        <div
          className="w-52 h-16 relative md:mt-0 mt-4 cursor-pointer"
          onClick={() => setActive("step2")}
        >
          <Image
            src={
              active == "step2"
                ? "https://i.ibb.co/DwNs7zG/Steps.png"
                : "https://i.ibb.co/c2k4Gbr/Steps3.png"
            }
            alt="step2"
            className="w-full h-full"
            width={100}
            height={100}
          />
          <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
            <p
              className={`w-full text-sm font-medium leading-4 ${
                active == "step2" ? "text-white" : "text-gray-700"
              }`}
            >
              Address details
            </p>
            <p
              className={`w-full text-xs mt-1 leading-none ${
                active == "step2" ? "text-white" : "text-gray-700"
              }`}
            >
              Location details of Hotel
            </p>
          </div>
        </div>
        <div
          className="w-52 h-16 relative md:mt-0 mt-4 cursor-pointer"
          onClick={() => setActive("step3")}
        >
          <Image
            src={
              active == "step3"
                ? "https://i.ibb.co/DwNs7zG/Steps.png"
                : "https://i.ibb.co/c2k4Gbr/Steps3.png"
            }
            alt="step3"
            className="w-full h-full"
            width={100}
            height={100}
          />
          <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
            <p
              className={`w-full text-sm font-medium leading-4 ${
                active == "step3" ? "text-white" : "text-gray-700"
              }`}
            >
              Images
            </p>
            <p
              className={`w-full text-xs mt-1 leading-none ${
                active == "step3" ? "text-white" : "text-gray-500"
              }`}
            >
              Upload images of your Hotel
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSteps;
