import right from "../../assets/skillLab/right.png";
import type { Data } from "./Main";

type CardProps = {
  DATA: Data[];
};
const Card = ({ DATA }: CardProps) => {
  return (
    <>
      {DATA.map((item: Data) => (
        <div
          key={item.id}
          className="w-full h-100 border border-gray-500 rounded-xl bg-white mt-10"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-40 object-cover rounded-t-xl"
          />
          <div className="px-5">
            <div className="flex flex-row gap-3 py-5">
              {item.tags.map((tag) => (
                <div
                  className={`px-2 py-1 rounded-xl ${
                    tag.id === 1
                      ? "bg-blue-200"
                      : tag.id === 3
                      ? "bg-blue-100"
                      : tag.id === 5
                      ? "bg-orange-200"
                      : "bg-gray-200"
                  }`}
                >
                  <p
                    className={`font-semibold text-sm ${
                      tag.id === 1
                        ? "text-blue-700"
                        : tag.id === 3
                        ? "text-blue-500"
                        : tag.id === 5
                        ? "text-orange-700"
                        : "text-gray-700"
                    }`}
                  >
                    {tag.name}
                  </p>
                </div>
              ))}
            </div>
            <h2 className="font-bold text-xl mb-5">{item.title}</h2>
            <p>{item.content}</p>
            <div className="w-full h-0.5 bg-gray-300 my-3" />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <p className="mr-2 font-semibold">Try Demo</p>
                <img
                  src={right}
                  alt="right icon"
                  className="w-4 h-4 translate-y-1"
                />
              </div>
              <p className="font-bold scale-y-[1.5] -translate-y-0.5 mr-2 text-gray-500">
                &lt; &gt;
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
