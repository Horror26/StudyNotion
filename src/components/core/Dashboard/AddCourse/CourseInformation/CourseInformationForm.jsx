import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { MdNavigateNext } from "react-icons/md"
import IconBtn from "../../../../common/IconBtn"
import {
  addCourseDetails,
  editCourseDetails,
  fetchCourseCategories,
} from "../../../../../services/operations/courseDetailsAPI";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BiUpload } from "react-icons/bi";
import RequirementField from "./RequirementField";
import { setStep, setCourse } from "../../../../../slices/courseSlice";
import { COURSE_STATUS } from "../../../../../utils/constants";
import { toast } from "react-hot-toast";
import ChipInput from "./ChipInput";
import Upload from "../Upload";

const CourseInformationForm = () => {

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories.length > 0) {
        setCourseCategories(categories);
      }
      setLoading(false);
    };

    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }

    getCategories();
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseImage !== course.thumbnail ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString()
    )
      return true;
    else return false;
  };

  //handles next button click
  const onSubmit = async (data) => {
    if (editCourse) {
      if (isFormUpdated()) {
        const currentValues = getValues();
        const formData = new FormData();

        formData.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle);
        }

        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc);
        }

        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice);
        }

        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags));
        }

        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits);
        }

        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory);
        }

        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          );
        }

        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnailImage", data.courseImage);
        }

        setLoading(true);
        const result = await editCourseDetails(formData, token);
        setLoading(false);
        if (result) {
          setStep(2);
          dispatch(setCourse(result));
        }
      } else {
        toast.error("NO Changes made so far");
      }
      console.log("PRINTING FORMDATA", formData);
      console.log("PRINTING result", result);

      return;
    }

    //create a new course
    const formData = new FormData();
    formData.append("courseName", data.courseTitle);
    formData.append("courseDescription", data.courseShortDesc);
    formData.append("price", data.coursePrice);
    formData.append("whatYouWillLearn", data.courseBenefits);
    formData.append("category", data.courseCategory);
    formData.append("instructions", JSON.stringify(data.courseRequirements));
    formData.append("status", COURSE_STATUS.DRAFT);
    formData.append("tag", JSON.stringify(data.courseTags));
    formData.append("thumbnailImage", data.courseImage);

    setLoading(true);
    console.log("BEFORE add course API call");
    console.log("PRINTING FORMDATAiii", formData);
    formData.forEach((value, key) => {
      console.log(key, value);
    });
    
    const result = await addCourseDetails(formData, token);
    if (result) {
      //console.log(setCourse(result));
      dispatch(setStep(2));
      dispatch(setCourse(result));
    }
    setLoading(false);
    console.log("PRINTING FORMDATAAAA", formData);
    console.log("PRINTING result", result);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8"
    >
      <div className="text-richblack-100">
        <label htmlFor="courseTitle">
          Course Title<sup>*</sup>
        </label>
        <input
          id="courseTitle"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className="w-full px-3 py-2 rounded-md bg-richblack-700 text-richblack-100"
        />
        {errors.courseTitle && <span>Course Title is Required**</span>}
      </div>

      <div className="text-richblack-100">
        <label htmlFor="courseShortDesc">
          Course Short Description<sup>*</sup>
        </label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Description"
          {...register("courseShortDesc", { required: true })}
          className="w-full px-3 py-2 rounded-md bg-richblack-700 text-richblack-100 h-[150px]"
        />
        {errors.courseShortDesc && (
          <span>Course Description is required**</span>
        )}
      </div>

      <div className="text-richblack-100 relative">
        <label htmlFor="coursePrice">
          Course Price<sup>*</sup>
        </label>
        <input
          id="coursePrice"
          placeholder="Enter Course Price"
          {...register("coursePrice", {
            required: true,
            valueAsNumber: true,
          })}
          className="w-full pl-6 pr-3 py-2 rounded-md bg-richblack-700 text-richblack-100"
          />
        <HiOutlineCurrencyRupee className="absolute top-[55%] left-1 text-richblack-400" />
        {errors.coursePrice && <span>Course Price is Required**</span>}
      </div>

      <div className="text-richblack-100">
        <label htmlFor="courseCategory">
          Course Category<sup>*</sup>
        </label>
        <select
          id="courseCategory"
          className="w-full px-3 py-2 rounded-md bg-richblack-700 text-richblack-100"
          defaultValue=""
          {...register("courseCategory", { required: true })}
        >
          <option value="" disabled>
            Choose a Category
          </option>

          {!loading &&
            courseCategories.map((category, index) => (
              <option key={index} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && <span>Course Category is Required</span>}
      </div>

      {/* create a custom component for handling tags input */}
      <ChipInput
            label="Tags"
            name="courseTags"
            placeholder="Enter Tags and press Enter"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues = {getValues}
      />

      {/* create a component for uploading and showing preview of media */}
      <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      />

      {/*     Benefits of the Course */}
      <div className="text-richblack-100">
        <label>
          Benefits of the course<sup>*</sup>
        </label>
        <textarea
          id="coursebenefits"
          placeholder="Enter Benefits of the course"
          {...register("courseBenefits", { required: true })}
          className="w-full px-3 py-2 rounded-md bg-richblack-700 text-richblack-100 min-h-[150px]"
        />
        {errors.courseBenefits && (
          <span>Benefits of the course are required**</span>
        )}
      </div>

      <RequirementField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      <div className="flex gap-x-2">
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            className="flex items-center gap-x-2 text-black bg-richblack-300 rounded-md px-3 py-1"
          >
            Continue Without Saving
          </button>
        )}

        <div className="flex text-richblack-900 rounded-md px-3 py-1 font-medium items-center text-md bg-yellow-50 w-fit">
          <button>
            {
              !editCourse?"Next" : "Save Changes"
            }
          </button>
          <MdNavigateNext />
        </div>
      </div>
    </form>
  );
};

export default CourseInformationForm;
