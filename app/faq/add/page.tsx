"use client";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import HorizentalWizard from "@/components/AddProduct";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import SingleSelect from "@/components/ui/SingleSelect";
import QuillEditor from "@/components/ui/ReactQuill";
import axios from "axios";


interface StepSchema {
    [key: string]: yup.SchemaOf<any>;
  }
  
  // interface Attribute {
  //   value: Number;
  //   label: string;
  // }

const stepSchema: yup.SchemaOf<any> = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

function page() {

   
    const [stepNumber, setStepNumber] = useState<number>(0);

    const [title, setTitle] = useState("");
    const [descriptionList, setDescription] = useState("");
    const [status, setStatus] = useState(1);

    let currentStepSchema = stepSchema;

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        resolver: yupResolver(currentStepSchema),
        mode: "all",
      });

  //     const [description, setDescription] = useState('');

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleStatusChange = (selectedOption:any) => {
    setStatus(selectedOption.target.value);
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    

    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", descriptionList);
    formData.append("status", status);
  
    axios
      .post(
        `http://localhost:3000/api/v1/faqs/create`,
        formData,
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
       
      });
  };

      const options = [
        { value: 1, label: "Published" },
        { value: 0 , label: "Draft" },
      ];

      // const handleSelectChange = (selectedOptions: Attribute[]) => {
      //   setSelectedValues(selectedOptions);
      // };
  return (
    <>
      <div className="wrapper grid grid-cols-7">
        <SideBar />
        <div className="col-start-2 col-span-6">
          <TopBar />
          <main className="grid grid-cols-1 lg:grid-cols-2 p-10">
            <h2 className="w-full p-3 bg-[#F9FAFB] text-[16px] font-medium col-span-2 flex items-center">
              <button className="mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                  <path d="M10.656 1.34399L2.688 9.31199L10.656 17.28L9.312 18.624L0 9.31199L9.312 -7.62939e-06L10.656 1.34399Z" fill="#272727"/>
                  <path d="M1.34375 10.2724L1.34375 8.35243L17.6637 8.35243V10.2724L1.34375 10.2724Z" fill="#272727"/>
                </svg>
              </button>
              Add FAQ
            </h2>
            <div className="col-span-2">
            <form onSubmit={(e)=>onHandleSubmit(e)}>
              <div >
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 pt-10">
                  <Textinput
                    type="text"
                    placeholder="FAQ Title"
                    name="title"
                    value={title}
                    error={errors.title}
                    register={register}
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                  <SingleSelect
                  options={options}
                  value={status}
                  onChange={handleStatusChange}
                  />
                  <div className="col-span-2 mb-3">
                    <QuillEditor 
                      value={descriptionList}
                      onChange={handleDescriptionChange}
                    />
                  </div>
                </div>
              </div>
              <div>
              <Button
                text= "submit"
                className="btn-primary"
                type="submit"
              />
            </div>
            </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default page;
