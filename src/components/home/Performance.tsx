import progress from "../../assets/growth.png";
import checkmark from "../../assets/checkmark.png";

const Performance = () => {
  return (
    <section
      id="bottom"
      className="w-full h-80 bg-white mt-15 rounded-xl p-10 shadow-xl shadow-dark md:h-90 md:w-150 mx-auto"
    >
      <div className="flex justify-end">
        <div className="w-45 h-20 shadow-xl shadow-dark rounded-xl flex flex-row items-center justify-between px-5 animate-[bounce_3s_infinite]">
          <div className="w-8 h-8 rounded-full bg-green-200 flex justify-center items-center">
            <img
              src={checkmark}
              alt="check mark"
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div>
            <p className="font-bold text-gray-300 text-sm">System Status</p>
            <p className="font-bold text-green-600">Operational</p>
          </div>
        </div>
      </div>

      <div className="w-45 h-20 shadow-xl shadow-dark rounded-xl flex flex-row items-center justify-between px-5 mt-15">
        <div>
          <div className="flex flex-row items-end">
            <p className="font-bold text-gray-300 text-sm mr-1">PERFORMANCE</p>
            <img
              src={progress}
              alt="progress icon"
              className="w-4 h-4 rounded-full"
            />
          </div>
          <div className="mt-3">
            <div className="w-full h-2 bg-gray-200 overflow-hidden rounded-full">
              <div className="h-full w-[90%] bg-blue-600 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <p className="font-bold text-gray-300 text-sm mr-1">Optimization</p>
            <p className="font-bold"> 98%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
