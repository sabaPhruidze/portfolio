import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const getInTouchSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Write at least 3 letters" })
    .max(20, { message: "Big text write at max 20 letters" }),
  email: z
    .email("Write correct mail")
    .refine((value) => value.toLowerCase(), {
      message: "Use only lowercase letters",
    })
    .refine(
      (value) => value.endsWith("@gmail.com") || value.endsWith("@yahoo.com"),
      { message: "Email must end on @gmail.com or @yahoo.com" }
    ),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Write at least 3 letters" })
    .max(20, { message: "Big text write at max 20 letters" }),
  message: z.string().trim().min(30, { message: "Write at least 30 letters" }),
});

type GetInTouchSchema = z.infer<typeof getInTouchSchema>;

const InputBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GetInTouchSchema>({ resolver: zodResolver(getInTouchSchema) });

  const onSubmit = (data: GetInTouchSchema) => {
    console.log(data);
    reset();
  };
  const legendClass = "text-center font-bold text-xl";
  const labelClass = "font-bold text-sm inline-block mt-5";
  const inputClass =
    "w-full py-3 border border-gray-300 mt-2 rounded-md px-5 outline-none bg-gray-100";
  const errorClass = "mt-1 text-red-500";
  return (
    <section className="bg-white rounded-xl px-5 py-8 mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* for better SEO */}
        <fieldset>
          <legend className={legendClass}>Contact information</legend>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={inputClass}
            placeholder="Your Name"
          />
          {errors?.name && <p className={errorClass}>{errors.name.message}</p>}
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={inputClass}
            placeholder="your.email@example.com"
          />
          {errors?.email && (
            <p className={errorClass}>{errors.email.message}</p>
          )}
        </fieldset>
        <fieldset>
          <legend className={`${legendClass} pt-10`}>Message Details</legend>
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className={inputClass}
            placeholder="What is this regarding?"
          />
          {errors?.subject && (
            <p className={errorClass}>{errors.subject.message}</p>
          )}
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            {...register("message")}
            className={`${inputClass} min-h-40`}
            placeholder="Write your message here..."
          />
          {errors?.message && (
            <p className={errorClass}>{errors.message.message}</p>
          )}
        </fieldset>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-md mt-5 font-bold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default InputBox;
