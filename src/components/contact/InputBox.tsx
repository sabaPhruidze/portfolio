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
    formState: error,
    reset,
  } = useForm<GetInTouchSchema>({ resolver: zodResolver(getInTouchSchema) });

  const onSubmit = (data: GetInTouchSchema) => {
    console.log(data);
    reset();
  };
  const inputClass =
    "w-full py-3 border border-gray-300 mt-5 rounded-md px-5 outline-none bg-gray-100";
  return (
    <section className="bg-white rounded-xl px-5 py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* for better SEO */}
        <fieldset>
          <legend className="text-center font-bold text-xl">
            Contact information
          </legend>
          <input
            type="text"
            {...register("name")}
            className={inputClass}
            placeholder="Your Name"
          />
          <input
            type="email"
            {...register("email")}
            className={inputClass}
            placeholder="your.email@example.com"
          />
        </fieldset>
        <fieldset>
          <legend className="text-center font-bold text-xl">
            Message Details
          </legend>
          <input
            type="text"
            {...register("subject")}
            className={inputClass}
            placeholder=""
          />
          <input
            type="text"
            {...register("message")}
            className={inputClass}
            placeholder=""
          />
        </fieldset>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default InputBox;
