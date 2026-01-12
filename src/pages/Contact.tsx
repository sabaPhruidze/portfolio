import ContactDetails from "../components/contact/ContactDetails";
import GetInTouch from "../components/contact/GetInTouch";
import InputBox from "../components/contact/InputBox";
import Connect from "../components/contact/Connect";
const Contact = () => {
  return (
    <div className="px-5 pt-10 bg-gray-100 h-400">
      <GetInTouch />
      <InputBox />
      <ContactDetails />
      <Connect />
    </div>
  );
};

export default Contact;
