import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const social = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/o%C4%9Fuzhan-y%C4%B1ld%C4%B1r%C4%B1m/",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/YildirimogCod",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/oguzhann.yldrm/",
    icon: FaInstagram,
  },
];
const Navbar = () => {
  return (
    <nav className="flex items-center mb-10 py-6 justify-between">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl">Oy.Dev</h1>
      </div>
      <div className="flex items-center gap-4 text-2xl">
        {social.map((item, index) => (
          <a href={item.url} target="_blank" rel="noreferrer" key={index}>
            <item.icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
