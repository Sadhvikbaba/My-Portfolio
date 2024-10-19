"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { IoMail } from "react-icons/io5";

// Define types for the form inputs
interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>(); 

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    emailjs
      .send(
        "service_834e2kq",
        "template_a9og8px", 
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "GbEf2T6jiG5KSg3oV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred while sending the message.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full p-2 text-white">
      <div className="w-full sm:w-1/2 p-8 rounded-lg shadow-lg">
        <h1 className="text-neutral-400 text-4xl font-bold mb-6">CONTACT ME</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-white text-lg px-2 py-1 placeholder-gray-400"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-white text-lg px-2 py-1 placeholder-gray-400"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-white text-lg px-2 py-1 placeholder-gray-400"
              {...register("subject", { required: true })}
            />
            {errors.subject && <p className="text-red-500">Subject is required</p>}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Share your Message"
              className="w-full bg-transparent resize-none border-b-2 border-gray-500 focus:outline-none focus:border-white text-lg px-2 py-1 placeholder-gray-400 h-24"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && <p className="text-red-500">Message is required</p>}
          </div>
          <div className="flex justify-between">
            <button
              type="reset"
              className="text-neutral-200 text-lg font-semibold"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="bg-neutral-500/40 text-white py-1 px-6 rounded text-lg font-semibold"
            >
              SEND
            </button>
          </div>
        </form>
        <div className="mt-6 text-gray-400 text-sm flex items-center ">
           <IoMail/> &nbsp;:  psadhvik2006@gmail.com
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
