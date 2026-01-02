import user from "../../assets/user.png";
import rightArrow from "../../assets/right-arrow.png";
import imageMain from "../../assets/image-main.png";
import { Link } from "react-router-dom";
const About = () => {
  const data = [
    {
      id: 1,
      title: "05+",
      content: "Years Experience",
    },
    {
      id: 2,
      title: "60+",
      content: "Projects Done",
    },
    {
      id: 3,
      title: "100%",
      content: "Client Satisfaction",
    },
  ];
  return (
    <section className="w-full h-300 bg-gray-300 py-20 px-10">
      <div className="w-full h-250 bg-white rounded-xl px-5">
        <div className="flex flex-row items-center pt-5">
          <img src={user} alt="user icon" className="w-5 h-5 mr-3" />
          <h2 className="font-bold text-blue-600"> ABOUT ME</h2>
        </div>
        <div>
          <h3 className="text-3xl mt-5 font-bold">
            Bridging the Gap between engineering and design
          </h3>
          <p className="text-gray-500 mt-5 md:w-160">
            I'm a passionate developer with over 3 years of experience in
            building digital products. I specialize in the JavaScript ecosystem
            but love exploring new technologies . My goal is to create software
            that is not only functional but also intuitive and delightful to
            use. I thrive in collaborative environments and enjoy mentoring
            junior developers
          </p>
        </div>
        <div className="flex flex-row my-5 justify-around">
          {data.map((items) => (
            <div
              key={items.id}
              className="w-full h-25 bg-gray-200 flex flex-col px-3 mr-3 rounded-xl  sm:h-35 sm:justify-center sm:flex sm:items-center"
            >
              <h4 className="text-blue-500 text-xl font-bold mb-2 sm:text-2xl">
                {items.title}
              </h4>
              <p className="text-gray-500 font-semibold text-sm sm:text-md">
                {items.content}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Link to="./" className="font-bold text-blue-500 flex flex-row">
            Read full biography
            <img
              src={rightArrow}
              alt="arrow that points on right"
              className="w-4 h-4 translate-y-1 ml-2"
            />
          </Link>
          <div className="w-full h-90 flex justify-center">
            <img
              src={imageMain}
              alt="main image"
              className="h-80 object-contain rounded-full mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
