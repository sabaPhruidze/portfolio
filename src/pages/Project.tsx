const Project = () => {
  const show = ["All", "Web App", "Mobile", "Open Source", "Design System"];
  return (
    <section className="w-full h-200 bg-gray-300 px-10">
      <h2 className="text-4xl font-bold pt-10">Featured Projects</h2>
      <p className="font-semibold text-gray-500 mt-5">
        building digital experiences with clean code and modern design. Here is
        a selection of my recent work across web and mobile.
      </p>
      <div className="flex flex-row flex-wrap gap-3 mt-10">
        {show.map((item) => (
          <button
            key={item}
            className="px-5 py-1 bg-gray-200 text-gray-700 rounded-xl font-semibold"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Project;
