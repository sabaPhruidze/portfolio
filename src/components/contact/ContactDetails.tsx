import email from "../../assets/contact/mail.png";
import pin from "../../assets/contact/pin.png";

const ContactDetails = () => {
  return (
    <section className="bg-white rounded-xl px-5 py-8 mt-10">
      <h2 className="font-bold text-xl">Contact Details</h2>
      <div className="flex flex-row items-center gap-3 mt-5">
        <div className="w-10 h-10 bg-blue-100 flex justify-center items-center rounded-full">
          <img src={email} alt="email icon" className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-500">Email</h3>
          <p className="font-bold">sabaphruidze01@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 mt-5">
        <div className="w-10 h-10 bg-blue-100 flex justify-center items-center rounded-full">
          <img src={pin} alt="email icon" className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-500">Email</h3>
          <p className="font-bold">sabaphruidze01@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
