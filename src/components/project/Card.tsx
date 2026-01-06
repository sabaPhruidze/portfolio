import analytics from "../../assets/card/analytics.jpg";
import analyze from "../../assets/card/analyze.png";
import eye from "../../assets/card/eye.png";
const Card = () => {
  return (
    <div className="w-full bg-white mt-10 rounded-xl pb-10">
      <img
        src={analytics}
        alt="analytics"
        className="w-full h-40 object-cover rounded-xl"
      />
      <div className="px-5">
        <div className="flex flex-row mt-5 justify-between">
          <h3 className="font-bold text-xl ">E-commerce Analytics</h3>
          <div className="w-8 h-8 bg-gray-100 flex justify-center items-center rounded-xl">
            <img src={analyze} alt="analyze icon" className="w-5 h-5 " />
          </div>
        </div>
        <p className="mt-5 text-gray-500">
          A comprehensive dashboard for tracking sales, inventory, and customer
          metrics in real-time. Includes dark mode and export features.
        </p>
        <div>
          <div className="flex flex-row gap-3 mt-3">
            <p className="text-gray-700 bg-gray-200 px-2 py-0.5 rounded-md">
              React
            </p>{" "}
            <p className="text-gray-700 bg-gray-200 px-2 py-0.5 rounded-md">
              Typescript
            </p>
            <p className="text-gray-700 bg-gray-200 px-2 py-0.5 rounded-md">
              Tailwind
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 mt-10">
          <button className="w-[90%] py-1 bg-blue-700 text-white rounded-md cursor-pointer flex flex-row justify-center gap-2 items-center">
            <img src={eye} alt="eye icon" className="w-8 h-8 translate-y-0.5" />
            <p>Live Demo</p>
          </button>
          <button className="w-[10%] py-1 border border-gray-500 text-gray-700 rounded-md cursor-pointer">
            &lt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
