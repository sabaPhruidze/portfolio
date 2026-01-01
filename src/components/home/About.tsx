import user from "../../assets/user.png";

const About = () => {
  return (
    <section className="w-full h-250 bg-gray-300 py-20 px-10">
      <div className="w-full h-150 bg-white rounded-xl px-5">
        <div className="flex flex-row items-center pt-5">
          <img src={user} alt="user icon" className="w-5 h-5 mr-3" />
          <h2 className="font-bold text-blue-600"> ABOUT ME</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
