import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-hot-toast"
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUsForm() {
  const { register, handleSubmit, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "435774fc-cb4a-4a0f-963f-767fb1ca3d5c";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      toast.success("Form submitted successfully!");
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
      toast.error(`Error: ${msg}`);
    },
  });

  return (
    <div>
      <form
        className="flex flex-col gap-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="name" className="label-style">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              className="form-style"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="email" className="label-style">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className="form-style"
              {...register("email", { required: true })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="label-style">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Enter your message here"
            className="form-style"
            {...register("message", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
           sm:text-[16px]"
        >
          Submit Form
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}
