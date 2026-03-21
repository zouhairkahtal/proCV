import { useLocation, useNavigate } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const UserSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits long"),
  linkedIn: z.string().min(3, "LinkedIn must be at least 3 characters long"),
  address: z.string().min(3, "Address must be at least 3 characters long"),
  summary: z.string().min(3, "Summary must be at least 3 characters long"),
  experience: z
    .string()
    .min(3, "Experience must be at least 3 characters long"),
  education: z.string().min(3, "Education must be at least 3 characters long"),
  skills: z.string().min(3, "Skills must be at least 3 characters long"),
});

function InformationForm() {
  const Location = useLocation();
  const id = Location.state?.id;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = (data) => {
    navigate("/PreviewPage", { state: { data, id } });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="bg-blue-500/80 w-full text-white">template : {id}</h1>
        <section className="w-full py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-4xl font-bold text-gray-900 ">
            <span className="py-2 px-3 text-2xl bg-blue-600 rounded-full text-white mr-2">
              02
            </span>
            step
          </h1>
          <p className="text-gray-600 mt-5">Fill The Form</p>

          <div className="flex items-center justify-center p-10 gap-10 mt-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full max-w-lg text-left"
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="fullName"
                  className="font-semibold text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`border ${errors.fullName ? "border-red-500" : "border-gray-200"} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none`}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className={`border ${errors.email ? "border-red-500" : "border-gray-200"} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="font-semibold text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="+1 234 567 8900"
                  className={`border ${errors.phone ? "border-red-500" : "border-gray-200"} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none`}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="linkedIn"
                  className="font-semibold text-gray-700"
                >
                  LinkedIn
                </label>
                <input
                  type="text"
                  placeholder="https://www.linkedin.com/in/your-profile"
                  className={`border ${errors.linkedIn ? "border-red-500" : "border-gray-200"} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none`}
                  {...register("linkedIn")}
                />
                {errors.linkedIn && (
                  <p className="text-red-500 text-xs">
                    {errors.linkedIn.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="address"
                  className="font-semibold text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="123 Main St, City, Country"
                  className={`border ${errors.address ? "border-red-500" : "border-gray-200"} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none`}
                  {...register("address")}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="summary"
                  className="font-semibold text-gray-700"
                >
                  Summary
                </label>
                <textarea
                  placeholder="Brief overview of your professional background"
                  className={`border ${errors.summary ? "border-red-500" : "border-gray-200"} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none h-24`}
                  {...register("summary")}
                />
                {errors.summary && (
                  <p className="text-red-500 text-xs">
                    {errors.summary.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="experience"
                  className="font-semibold text-gray-700"
                >
                  Experience
                </label>
                <textarea
                  placeholder="Your past work experience"
                  className={`border ${errors.experience ? "border-red-500" : "border-gray-200"} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none h-24`}
                  {...register("experience")}
                />
                {errors.experience && (
                  <p className="text-red-500 text-xs">
                    {errors.experience.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="education"
                  className="font-semibold text-gray-700"
                >
                  Education
                </label>
                <textarea
                  placeholder="Your educational background"
                  className={`border ${errors.education ? "border-red-500" : "border-gray-200"} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none h-24`}
                  {...register("education")}
                />
                {errors.education && (
                  <p className="text-red-500 text-xs">
                    {errors.education.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="skills" className="font-semibold text-gray-700">
                  Skills
                </label>
                <input
                  type="text"
                  placeholder="Skills"
                  className={`border ${errors.skills ? "border-red-500" : "border-gray-200"} rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none`}
                  {...register("skills")}
                />
                {errors.skills && (
                  <p className="text-red-500 text-xs">
                    {errors.skills.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300 mt-4 shadow-lg active:scale-95"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default InformationForm;
