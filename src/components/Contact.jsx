import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <footer className="border-b border-neutral-900 pb-20">
      <div className="my-10 text-center text-2xl">
        <div className="text-center tracking-tighter">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href="mailto:yildirimog8@gmail.com" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
