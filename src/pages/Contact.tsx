import ContactDetails from "../components/contact/ContactDetails";
import GetInTouch from "../components/contact/GetInTouch";
import InputBox from "../components/contact/InputBox";

const Contact = () => {
  return (
    <div className="px-5 pt-10 bg-gray-100 h-400">
      <GetInTouch />
      <InputBox />
      <ContactDetails />
    </div>
  );
};

export default Contact;
