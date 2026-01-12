import rigthTop from "../../assets/contact/arrow-upper-right.png";
import linkedin from "../../assets/footer/linkedin.png";
import github from "../../assets/footer/github.png";
const Connect = () => {
  const DATA = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/saba-phruidze-45b583266/",
      ariaLabelForA: "My linkedin Page",
      img: linkedin,
      alt: "Linkedin icon",
      name: "Linkedin",
    },
    {
      id: 2,
      href: "https://github.com/sabaPhruidze",
      ariaLabelForA: "my Github Page",
      img: github,
      alt: "Github icon",
      name: "Github",
    },
  ];
  return (
    <section className="bg-white rounded-xl px-5 py-8 mt-10 lg:mt-5">
      <h2 className="font-bold text-xl ">Connect</h2>
      {DATA.map((item) => (
        <div className="flex flex-row" key={item.id}>
          <a
            href={item.href}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={item.ariaLabelForA}
            className="w-full flex flex-row justify-between mt-5"
          >
            <div className="flex flex-row gap-3">
              <img
                src={item.img}
                alt={item.alt}
                className="w-6 h-6 -translate-y-0.5 "
              />
              <p className="font-semibold">{item.name}</p>
            </div>
            <img
              src={rigthTop}
              alt="right upper arrow image"
              className="w-4 h-4"
            />
          </a>
        </div>
      ))}
    </section>
  );
};

export default Connect;
