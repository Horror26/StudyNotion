import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateProfile } from "../../../../services/operations/SettingsAPI";
import IconBtn from "../../../common/IconBtn";
import { IoIosArrowDown } from "react-icons/io";

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"];

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitProfileForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      dispatch(updateProfile(token, data));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitProfileForm)}>
        {/* Profile Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Profile Information
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="firstName"
                className="lable-style text-[14px] font-normal text-richblack-5"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                className="form-style px-3 py-3 bg-[#2C333F] text-[#999DAA] rounded-md"
                {...register("firstName", { required: true })}
                defaultValue={user?.firstName}
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your first name.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="lastName"
                className="lable-style  text-[14px] text-richblack-5"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter first name"
                className="form-style px-3 py-3 text-[#999DAA] bg-[#2C333F] rounded-md"
                {...register("lastName", { required: true })}
                defaultValue={user?.lastName}
              />
              {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your last name.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="dateOfBirth"
                className="lable-style  text-[14px] text-richblack-5"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="form-style px-3 py-3 text-[#999DAA] bg-[#2C333F] rounded-md"
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "Please enter your Date of Birth.",
                  },
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of Birth cannot be in the future.",
                  },
                })}
                defaultValue={user?.additionalDetails?.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%] relative">
              <label
                htmlFor="gender"
                className="lable-style text-[14px] text-richblack-5"
              >
                Gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                className="form-style px-3 py-3 appearance-none text-[#999DAA] bg-[#2C333F] rounded-md pl-3 pr-10"
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-3 top-2/3 transform -translate-y-1/2 text-[#838894]" />
              {errors.gender && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Date of Birth.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="contactNumber"
                className="lable-style  text-[14px] text-richblack-5"
              >
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="form-style px-3 py-3 text-[#999DAA] bg-[#2C333F] rounded-md"
                {...register("contactNumber", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors.contactNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="about"
                className="lable-style  text-[14px] text-richblack-5"
              >
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                className="form-style bg-[#2C333F] px-3 py-3 rounded-md text-[#999DAA]"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your About.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 text-richblack-50">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile");
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-normal text-richblack-50"
          >
            Cancel
          </button>
          
          <button type="submit" className="text-[#000814] bg-[#FFD60A] rounded-md px-5">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
