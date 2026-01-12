import email from "../../assets/contact/mail.png";
import pin from "../../assets/contact/pin.png";

const ContactDetails = () => {
  return (
    <section className="bg-white rounded-xl px-5 py-8 mt-10">
      <h2 className="font-bold text-xl md:text-2xl ">Contact Details</h2>
      <address className="not-italic">
        <div className="flex flex-row items-center gap-3 mt-5">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-100 flex justify-center items-center rounded-full">
            <img
              src={email}
              alt="email icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-500 md:text-lg md:font-semibold">Email</h3>
            <a
              className="font-bold hover:underline md:text-lg"
              href="mailto:sabaphruidze01@gmail.com"
              aria-label="Send me the email by clicking here"
            >
              sabaphruidze01@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 mt-5">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-100 flex justify-center items-center rounded-full">
            <img src={pin} alt="email icon" className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-500 md:text-lg md:font-semibold">
              Location
            </h3>
            <a
              className="font-bold hover:underline md:text-lg"
              href="https://www.google.com/maps/place/%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98/@41.6387676,44.7176433,9.5z/data=!4m6!3m5!1s0x40440cd7e64f626b:0x61d084ede2576ea3!8m2!3d41.6938026!4d44.8015168!16zL20vMGJtNGo?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="You can open the location in google maps"
            >
              Georgia, Tbilisi
            </a>
          </div>
        </div>
      </address>
    </section>
  );
};

export default ContactDetails;
