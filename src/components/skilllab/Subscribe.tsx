const Subscribe = () => {
  return (
    <section className="px-10 py-5 bg-blue-500 text-white rounded-xl">
      <h2 className="font-bold text-2xl ">
        Want to see how <br />
        these are built?
      </h2>
      <p className="my-3 text-gray-200">
        I write detailed breakdowns of my experiments. Subscribe to get notified{" "}
        <br /> when I drop a new component.
      </p>
      <input
        type="text"
        placeholder="Enter your email"
        className="py-3 px-5 bg-white/15 rounded-xl w-full placeholder:text-gray-300 outline-none transition-shadow duration-300
    focus:ring-1 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent"
      />
      <div className="flex justify-center my-5 ">
        <button className="py-3 px-5 bg-white text-blue-700 font-bold rounded-xl cursor-pointer hover:scale-105 active:scale-95 transition duration-300">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
