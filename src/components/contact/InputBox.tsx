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
