import ContactDetails from "../components/contact/ContactDetails";
import GetInTouch from "../components/contact/GetInTouch";
import InputBox from "../components/contact/InputBox";
import Connect from "../components/contact/Connect";
import Location from "../components/contact/Location";
const Contact = () => {
  return (
    <div className="px-5 pt-10 bg-gray-100 h-500 xl:px-10 lg:h-400">
      <GetInTouch />
      <div className="lg:flex lg:flex-row lg:gap-5 lg:justify-center">
        <InputBox />
        <div>
          <ContactDetails />
          <Connect />
        </div>
      </div>
      <Location />
    </div>
  );
};

export default Contact;
