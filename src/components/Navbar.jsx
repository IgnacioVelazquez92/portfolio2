import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [estilo, setEstilo] = useState("");

  const handleClick = () => {
    if (click) {
      setEstilo("animate__animated animate__bounceOutRight");
      setTimeout(() => setClick(false), 300);
    } else {
      setClick(true);
      setEstilo("animate__animated animate__fadeInLeft");
    }
  };
  const content = (
    <>
      <div
        className={`lg:hidden block absolute top-16 w-full left-0 right-0 bg-gray-800/95 transition ${estilo}`}
      >
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="about">
            <li
              className="my-4 py-4 border-b border-slate-800 hover:bg-green-400 hover:rounded "
              onClick={handleClick}
            >
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="projects">
            <li
              className="my-4 py-4 border-b border-slate-800  hover:bg-green-400 hover:rounded"
              onClick={handleClick}
            >
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="skills">
            <li
              className="my-4 py-4 border-b border-slate-800  hover:bg-green-400 hover:rounded"
              onClick={handleClick}
            >
              Skills
            </li>
          </Link>
          <Link spy={true} smooth={true} to="testimonials">
            <li
              className="my-4 py-4 border-b border-slate-800  hover:bg-green-400 hover:rounded"
              onClick={handleClick}
            >
              Testimonials
            </li>
          </Link>
          <Link spy={true} smooth={true} to="contact">
            <li
              className="my-4 py-4 border-b border-slate-800  hover:bg-green-400 hover:rounded"
              onClick={handleClick}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="lg:sticky top-0 z-50">
      <div className="h-10vh flex justify-between  text-white  lg:py-5 md:px-20 px-6 py-4 border-b bg-gray-800/90 ">
        <div className="flex items-center flex-1">
          <span className="sm:text-3xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-50">
            Ignacio Velazquez
          </span>
        </div>
        <div className="lg:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10 ">
            <ul className="flex gap-8 mr-16 text-[18px] ">
              <Link spy={true} smooth={true} to="about">
                <li className="hover:text-green-400  transition cursor-pointer">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="projects">
                <li className="hover:text-green-400 transition cursor-pointer">
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="skills">
                <li className="hover:text-green-400 transition cursor-pointer">
                  Skills
                </li>
              </Link>
              <Link spy={true} smooth={true} to="testimonials">
                <li className="hover:text-green-400 transition cursor-pointer">
                  Testimonials
                </li>
              </Link>
              <Link spy={true} smooth={true} to="contact">
                <li className="hover:text-green-400 transition cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>

        <button
          className="block lg:hidden transtion text-3xl font-bold text-green-400"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
