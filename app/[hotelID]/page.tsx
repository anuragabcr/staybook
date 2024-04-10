"use client"

import BasicForm from "@/components/BasicForm";
import FormSteps from "@/components/FormSteps";
import ImageForm from "@/components/ImageForm";
import Loading from "@/components/Loading";
import SlugForm from "@/components/SlugForm";
import { HotelInfoDetails } from "@/lib/HotelDetails";
import { getDocumentById, updateDocumentInFirestore, uploadImage } from "@/lib/firestore";
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
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const initialFormData: HotelInfoDetails = new HotelInfoDetails();
    const [formData, setFormData] = useState<HotelInfoDetails >(initialFormData);
  const [errors, setErrors] = useState<ErrorObject>({});
  const [active, setActive] = useState("step1");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

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

    const handleSubmit = async () => {
        try {
          await schema.validate(formData, { abortEarly: false });
          
          formData.hotelSlugsDetails.hotel = formData.hotelName
          formData.hotelSlugsDetails.hotelCity = formData.hotelCity
          formData.hotelSlugsDetails.hotelCountry = formData.hotelCountry
          formData.hotelSlugsDetails.hotelRegion = formData.hotelRegion
          formData.hotelSlugsDetails.hotelState = formData.hotelState
          
          if (selectedFiles != null) {
            for (let i = 0; i < selectedFiles.length; i++) {
              const imgUrl = await uploadImage(selectedFiles[i])
              if (imgUrl != "") {
                formData.hotelImagesList.push({
                  "imageId": imgUrl,
                  "imageUrl": imgUrl,
                  "imageTitle": selectedFiles[i].name
                })
              }
            }
            formData.hotelImageUrl = formData.hotelImagesList[0].imageUrl
          }
    
          updateDocumentInFirestore(hotelID, formData);
          setFormData(initialFormData);
          setErrors({});
          setSelectedFiles(null)
          router.push("/")
        } catch (validationErrors: any) {
          console.log(validationErrors);
          
          const errors = validationErrors.inner.reduce((acc: any, error: any) => {
            acc[error.path] = error.message;
            return acc;
          }, {});
          setErrors(errors);
        }
      };
    
    return (
        <div className="flex items-center justify-center m-2">
      <div className="xl:w-10/12 w-full px-8">
        <FormSteps active={active} setActive={setActive} />
        <hr />
        
        {active === "step1"? <BasicForm
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        /> : null}
        {active === "step2"? <SlugForm
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        /> : null}
        {active === "step3"? <ImageForm selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} imagesList={formData.hotelImagesList} /> : null}

        <div className="flex justify-center m-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
    )
}

export default EditHotel