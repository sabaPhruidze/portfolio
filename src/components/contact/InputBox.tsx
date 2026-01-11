import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const getInTouchSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Write at least 3 letters" })
    .max(20, { message: "Big text write at max 20 letters" }),
  email: z.email("Write correct mail").refine((value) => {
    const lower = value.toLowerCase();
    return lower.endsWith("@gmail.com") || lower.endsWith("@yahoo.com");
  }, "Email must end on @gmail.com or @yahoo.com"),
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
  };
  return (
    <section className="bg-white rounded-xl px-5 py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* for better SEO */}
        <fieldset>
          <legend className="text-center font-bold text-xl">
            Contact information
          </legend>
          <input type="text" {...register("name")} />
          <input type="email" {...register("email")} />
        </fieldset>
        <fieldset>
          <legend className="text-center font-bold text-xl">
            Message Details
          </legend>
          <input type="text" {...register("subject")} />
          <input type="text" {...register("message")} />
        </fieldset>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default InputBox;
