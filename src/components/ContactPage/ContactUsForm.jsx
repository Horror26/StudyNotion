import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { toast } from "react-hot-toast";

const accessKey = process.env.REACT_APP_ACCESS_KEY;

export default function ContactUsForm() {
  const { register, handleSubmit, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      setIsLoading(false);
      reset();
      toast.success("Form submitted successfully!");
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
      setIsLoading(false);
      toast.error(`Error: ${msg}`);
    },
  });

  const handleSubmitContactForm = (data) => {
    setIsLoading(true);
    onSubmit(data);
  };

  return (
    <div>
      <form className="flex flex-col gap-7" onSubmit={handleSubmit(handleSubmitContactForm)}>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="name" className="label-style">
              Name
            </label>
            <input
              disabled={isLoading}
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
              disabled={isLoading}
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
            disabled={isLoading}
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
          className="flex items-center justify-center rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
           sm:text-[16px]"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="spinner h-4 w-4 border-black" /> <span className="ml-2">Submitting...</span>
            </>
          ) : (
            "Submit Form"
          )}
        </button>
      </form>
    </div>
  );
}
