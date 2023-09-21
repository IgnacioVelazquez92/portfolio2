import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div className="flex mt-8 gap-2">
      <div className="flex items-center justify-center">
        <div data-aos="fade-up" className="flex space-x-2">
          <a
            href=""
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <AiFillGithub className="text-[28px]" />
          </a>
          <a
            href=""
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaLinkedinIn className="text-[28px]" />
          </a>
          <a
            href=""
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FiTwitter className="text-[28px]" />
          </a>
          <a
            href=""
            className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
          >
            <FaInstagram className="text-[28px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
