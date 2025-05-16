"use client";
import React, { useState, useEffect } from "react";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Import UploadFile and Select components here
import UploadFile from "@/components/UploadFile";
import Select from "@/components/Select";
import { useDropzone } from "react-dropzone";
import { Switch } from "antd";
import ImageUploader from "./ImageUploade";
import Alert from "./ui/Alert";
// import "@/node_modules/antd/dist/antd.css";

interface Step {
  id: number;
  title?: string;
}

const steps: Step[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  // {
  //   id: 4,
  //   title: "Social Links",
  // },
];

interface StepSchema {
  [key: string]: yup.SchemaOf<any>;
}

interface Attribute {
  value: string;
  label: string;
}
const stepSchema: yup.SchemaOf<any> = yup.object().shape({
  productname: yup.string().required("Product title is required"),
  sku: yup.string().required("SKU is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmpass: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const personalSchema: yup.SchemaOf<any> = yup.object().shape({
  // fname: yup.string().required("First name is required"),
  // lname: yup.string().required("Last name is required"),
});

const addressSchema: yup.SchemaOf<any> = yup.object().shape({
  // address: yup.string().required("Address is required"),
});

const AddProduct: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<Attribute[]>([]);
  const [selectedValues2, setSelectedValues2] = useState<Attribute[]>([]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [featuredIndices, setFeaturedIndices] = useState<Set<number>>(
    new Set()
  );

  const [isSubmited, setIsSubmited] = useState(false);

  console.log("selectedImages", selectedImages);

  let currentStepSchema: yup.SchemaOf<any>;

  console.log("stepNumber", stepNumber);

  switch (stepNumber) {
    case 0:
      currentStepSchema = stepSchema;
      break;
    case 1:
      currentStepSchema = personalSchema;
      break;
    case 2:
      currentStepSchema = addressSchema;
      break;
    // case 3:
    //   currentStepSchema = socialSchema; // You need to define socialSchema
    //   break;
    default:
      currentStepSchema = stepSchema;
  }

  useEffect(() => {
    //console.log("step number changed");
  }, [stepNumber]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(currentStepSchema),
    mode: "all",
  });

  const onSubmit = (data: any) => {
    let totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;

    if (isLastStep) {
      console.log(data);
      setIsSubmited(!isSubmited);
    } else {
      setStepNumber(stepNumber + 1);
      setIsSubmited(!isSubmited);
    }
  };

  const handlePrev = () => {
    setStepNumber(stepNumber - 1);
  };

  const options: Attribute[] = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ];
  const options2: Attribute[] = [
    { value: "red2", label: "Red2" },
    { value: "blue2", label: "Blue2" },
    { value: "green2", label: "Green2" },
  ];
  const handleSelectChange2 = (selectedOptions: Attribute[]) => {
    setSelectedValues2(selectedOptions);
  };
  const handleSelectChange = (selectedOptions: Attribute[]) => {
    setSelectedValues(selectedOptions);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const newImages = acceptedFiles.map((file) => URL.createObjectURL(file));
      console.log("newImages", newImages);
      setSelectedImages([...selectedImages, ...newImages]);
    },
  });

  // console.log("selectedImages",selectedImages)

  const handleDeleteImage = (e: any, index: number) => {
    e.preventDefault();
    console.log("deleteImage");
    const newImages = [...selectedImages];
    newImages.splice(index, 1);

    const newFeaturedIndices = new Set(featuredIndices);
    newFeaturedIndices.delete(index);

    setSelectedImages(newImages);
    // setFeaturedIndices(newFeaturedIndices);
  };

  const handleToggleFeatured = (index: number) => {
    const newFeaturedIndices = new Set(featuredIndices);

    if (newFeaturedIndices.has(index)) {
      newFeaturedIndices.delete(index);
    } else {
      newFeaturedIndices.add(index);
    }
    setFeaturedIndices(newFeaturedIndices);
  };

  const toggleIsFeatured = (id: number) => {
    setSelectedImages((prevImages) => {
      const updatedImages = prevImages.map((image) => {
        if (image.id === id) {
          // Assuming your image object has an 'id' property
          return {
            ...image,
            isFeatured: true,
          };
        } else {
          return {
            ...image,
            isFeatured: false,
          };
        }
        return image;
      });
      return updatedImages;
    });
  };

  console.log("setdasdas", selectedImages);

  const handleFileChange = (files: string[]) => {
    const newFiles = { ...selectedImages, ...files };
    setSelectedImages(newFiles);
  };

  const handleMultipleImageUpload = (files: any) => {
    let newImages = files.map((file: any) => ({
      name: URL.createObjectURL(file),
      id: selectedImages?.length + 1,
      isFeatured: false,
    }));

    console.log("newImages", newImages);
    setSelectedImages([...selectedImages, ...newImages]);

    console.log("Uploaded files:", files);
  };

  const handleSingleImageUpload = (files: any) => {
    const newImages = files.map((file: any) => ({
      name: URL.createObjectURL(file),
      id: selectedImages?.length + 1,
      isFeatured: true,
    }));

    // Filter out the existing images where isFeatured is true
    const updatedImages = selectedImages.filter((image) => !image?.isFeatured);

    // Concatenate the new images with the filtered existing images
    const finalImages = updatedImages.concat(newImages);

    setSelectedImages(finalImages);
    console.log("Uploaded files:", files);
  };
  return (
    <div>
      {isSubmited && (
        <Alert
          dismissible
          icon="akar-icons:double-check"
          className="fixed right-10 top-10 z-50 light-mode alert-success"
        >
          This is an alert—check it out!
        </Alert>
      )}
      <div className="mt-5">
        <div className="py-5">
          <p className="text-center text-[15px] text-[#2a2a2a]">
            Please complete steps below to add a product.
          </p>
          <p className="text-center text-[15px] text-[#2a2a2a]">
            It's easy as 1, 2, 3...
          </p>
        </div>
        <div className="grid grid-cols-9">
          <div className="col-span-3"></div>
          <div className="flex z-[5] items-center justify-center relative md:mx-8 col-span-3">
            {steps.map((item, i) => (
              <div
                className="relative z-[1] items-center item flex flex-start flex-1 last:flex-none group"
                key={i}
              >
                <div
                  className={`${
                    stepNumber >= i
                      ? "bg-[#6CA7FF] text-white ring-[#6CA7FF] ring-2 ring-offset-2"
                      : "bg-[#F9FAFB] text-slate-900 text-opacity-70"
                  }  transition duration-150 icon-box md:h-20 md:w-20 h-14 w-14 rounded-full flex flex-col items-center justify-center relative z-[66] md:text-lg text-base font-medium`}
                >
                  {stepNumber <= i ? (
                    <span> {i + 1}</span>
                  ) : (
                    <span className="text-3xl">
                      <Icon icon="bx:check-double" />
                    </span>
                  )}
                </div>
                <div
                  className={`${
                    stepNumber >= i ? "bg-[#6CA7FF]" : "bg-[#F9FAFB]"
                  } absolute top-1/2 h-[2px] w-full`}
                ></div>
                <div
                  className={` ${
                    stepNumber >= i
                      ? " text-slate-900 dark:text-slate-300"
                      : "text-slate-500 dark:text-slate-300 dark:text-opacity-40"
                  } absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100`}
                >
                  <span className="w-max">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-3"></div>
        </div>

        <div className="conten-box col-span-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {stepNumber === 0 && (
              <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-10">
                  <div className="lg:col-span-2 md:col-span-2 col-span-1">
                    <h4 className="text-base text-center text-[#2a2a2a]">
                      Enter your product detail below
                    </h4>
                  </div>
                  <div className="col-span-2">
                    <div {...getRootProps()} className="dropzone">
                      {/* <UploadFile onFileChange={handleFileChange} multipleUpload={false} latestUploaded={latestUploaded} /> */}
                      <ImageUploader
                        onUpload={handleSingleImageUpload}
                        multiple={false}
                      />
                    </div>
                  </div>
                  <Textinput
                    type="text"
                    placeholder="Type your Product Title"
                    name="productname"
                    error={errors.productname}
                    register={register}
                  />

                  <Textinput
                    type="text"
                    placeholder="SKU"
                    name="sku"
                    error={errors.sku}
                    register={register}
                  />
                  <Select
                    options={options}
                    placeholder={"Gender"}
                    selectedValues={selectedValues}
                    onSelectChange={handleSelectChange}
                  />
                  <Select
                    options={options2}
                    placeholder={"Select Category"}
                    selectedValues={selectedValues2}
                    onSelectChange={handleSelectChange2}
                  />
                  <Select
                    options={options}
                    placeholder={"Select Brand"}
                    selectedValues={selectedValues}
                    onSelectChange={handleSelectChange}
                  />
                  <Select
                    options={options2}
                    placeholder={"Status"}
                    selectedValues={selectedValues2}
                    onSelectChange={handleSelectChange2}
                  />

                  <Textinput
                    type="email"
                    placeholder="Type your email"
                    name="email"
                    error={errors.email}
                    register={register}
                  />
                  <Select
                    options={options2}
                    placeholder={"Stock"}
                    selectedValues={selectedValues2}
                    onSelectChange={handleSelectChange2}
                  />
                  <Textinput
                    type="password"
                    placeholder="8+ characters, 1 capital letter"
                    name="password"
                    error={errors.password}
                    hasicon
                    register={register}
                  />
                  <Textinput
                    type="password"
                    placeholder="Password"
                    name="confirmpass"
                    error={errors.confirmpass}
                    register={register}
                    hasicon
                  />
                </div>
              </div>
            )}

            {stepNumber === 1 && (
              <div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                  <div className="md:col-span-2 col-span-1 mt-8">
                    <h4 className="text-base text-slate-800 dark:text-slate-300 my-6">
                      Upload your product images and select a featured image for
                      the product.
                    </h4>
                  </div>
                  <div className="col-span-2">
                    {/* <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div> */}
                    <div {...getRootProps()} className="dropzone">
                      <ImageUploader
                        onUpload={handleMultipleImageUpload}
                        multiple={true}
                      />
                    </div>
                    {selectedImages.length > 0 && (
                      <div className="mt-4 grid grid-cols-4 gap-5">
                        {selectedImages.map((image, index) => (
                          <div key={index} className="image-container">
                            <img
                              src={image?.name}
                              alt={`Product Image ${index}`}
                              className="h-[250px] w-100%"
                            />
                            {/* <div className="image-actions mt-2 flex justify-between items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value={image?.id}  defaultChecked={image?.isFeatured === true ? true :false} className="sr-only peer" onChange={()=>toggleIsFeatured(image?.id)}/>
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
                            {/* </label> */}
                            <Switch
                              checked={image?.isFeatured}
                              defaultChecked={true}
                              onChange={() => toggleIsFeatured(image?.id)}
                            />

                            {image?.isFeatured ? <>Ha</> : <>Nhe</>}

                            <button
                              onClick={(e) => handleDeleteImage(e, index)}
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {stepNumber === 2 && (
              <div>
                <div className="grid grid-cols-1 gap-5">
                  <div className="mt-8">
                    <h4 className="text-base text-slate-800 dark:text-slate-300 my-6">
                      Upload your product images and select featured image for
                      product.
                    </h4>
                  </div>
                  <Textinput
                    type="text"
                    placeholder="Meta Title"
                    name="metatitle"
                    error={errors.metatitle}
                    register={register}
                  />
                  <Textinput
                    type="text"
                    placeholder="Product URL"
                    name="producturl"
                    error={errors.producturl}
                    register={register}
                  />
                  <Textarea
                    type="text"
                    placeholder="Meta Detail"
                    name="metadetail"
                    error={errors.address}
                    register={register}
                  />
                </div>
              </div>
            )}

            <div
              className={`${
                stepNumber > 0 ? "flex justify-between" : " text-right"
              } mt-10`}
            >
              {stepNumber !== 0 && (
                <Button
                  text="prev"
                  className="btn-primary"
                  onClick={handlePrev}
                />
              )}
              <Button
                text={stepNumber !== steps.length - 1 ? "next" : "submit"}
                className="btn-primary"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
