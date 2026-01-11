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

const InputBox = () => {
  return (
    <section className="bg-white rounded-xl px-5 py-8">
      <form>
        {/* for better SEO */}
        <fieldset>
          <legend className="text-center font-bold text-xl">
            Contact information
          </legend>
          <input type="text" />
          <input type="email" />
        </fieldset>
        <fieldset>
          <legend className="text-center font-bold text-xl">
            Message Details
          </legend>
          <input type="text" />
          <input type="text" />
        </fieldset>
      </form>
    </section>
  );
};

export default InputBox;
