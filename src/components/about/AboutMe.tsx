import user from "../../assets/user.png";
import location from "../../assets/location.png";
import correct from "../../assets/checkmark.png";
import imageMain from "../../assets/image-main.png";
const AboutMe = () => {
  return (
    <section className=" px-10 w-full h-250 bg-gray-300">
      <div className="flex flex-row pt-10 items-center">
        <img src={user} alt="user icon" className="w-5 h-5 mr-3" />
        <h2 className="font-semibold text-xl">About Me</h2>
      </div>
      <p className="text-sm text-gray-500 mt-5">
        My journey into technology began with a curiosity for how things work
        under the hood.What started as simple HTML edits on gaming forums has
        evolved into a full-blown career engineering complex web applications.
        <br /> I believe that great software is the intersection of clean code,
        intuitive design, and solving real user problems. I don’t just write
        code; I think about the product holistically.Whether it’s optimizing
        database queries or tweaking micro-interactions, I’m committed to
        quality at every layer of the stack.
        <br /> When I’m not coding, you can find me contributing to open-source
        projects, mentoring aspiring developers, or exploring the mountains. I’m
        a lifelong learner who thrives in environments that challenge me to
        grow.
      </p>
      <div className="flex flex-row mt-10 justify-between w-auto">
        <div className="w-40 h-30 bg-white flex flex-col px-3 pt-3 rounded-xl">
          <h3 className="text-gray-500 text-sm font-semibold">location</h3>
          <div className="flex flex-row items-center">
            <img src={location} alt="location icon" className="w-8 h-8" />
            <p className="font-bold">Tbilisi, Georgia</p>
          </div>
        </div>
        <div className="w-40 h-30 bg-white flex flex-col px-3 pt-3 rounded-xl">
          <h3 className="text-gray-500 text-sm font-semibold">Avaliability</h3>
          <div className="flex flex-row items-center">
            <img src={correct} alt="check icon" className="w-8 h-8" />
            <p className="font-bold text-green-600">Open to Work</p>
          </div>
        </div>
      </div>
      <div
        className="w-full h-90 rounded-xl mt-4 relative bg-cover bg-center border-white border-5"
        style={{ backgroundImage: `url(${imageMain})` }}
      >
        <h3 className="absolute bottom-8 left-3 text-xl text-white font-bold">
          Saba dev
        </h3>
        <p className="text-gray-100 text-sm absolute bottom-3 left-3 shadow-black">
          Full Stack Developer
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
