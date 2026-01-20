import branding from "../../assets/Education/branding.png";
import cloud from "../../assets/Education/cloud.png";
import graduation from "../../assets/Education/graduation-cap.png";
import book from "../../assets/Education/open-book.png";

const Education = () => {
  type Data = {
    mainImageSrc: string;
    mainImageAlt: string;
    mainTitle: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    where: string;
    year?: string;
  };
  const DATA: Data[] = [
    {
      mainImageSrc: graduation,
      mainImageAlt: "graduation icon",
      mainTitle: "Education",
      imageSrc: book,
      imageAlt: "icon of book",
      title: "BS in Computer Science",
      where: "State Technical university",
      year: "2014 - 2018",
    },
    {
      mainImageSrc: branding,
      mainImageAlt: "sertification icon",
      mainTitle: "Certifications",
      imageSrc: cloud,
      imageAlt: "icon of cloud",
      title: "AWS Certified Developer",
      where: "Amazon Web Services * 2023",
    },
  ];
  return (
    <section className="w-full h-100 bg-gray-300 px-10 ">
      {DATA.map((item) => (
        <div key={item.title}>
          <div className="flex flex-row pt-10">
            <img
              src={item.mainImageSrc}
              alt={item.mainImageAlt}
              className="w-8 h-8 translate-y-1 mr-3"
            />
            <h2 className="font-bold text-2xl">{item.mainTitle}</h2>
          </div>
          <div className="flex flex-row mt-5 bg-white border border-gray-400 rounded-xl px-5 py-3">
            <div className="w-10 h-10 flex justify-center items-center bg-blue-100 rounded-md mr-3">
              <img src={item.imageSrc} alt="icon of book" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className=" text-sm text-gray-500">{item.where}</p>
              <p className=" text-sm text-gray-500">{item.year}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
