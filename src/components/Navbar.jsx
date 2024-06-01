import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center mb-10 py-6 justify-between">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl">Oy.Dev</h1>
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
