import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="flex justify-between text-center bg-gray-600 py-4 px-4 md:px-16 ">
        <span className="text-white text-lg"> ©Ignacio Velazquez</span>
        <div className="text-lg">
          <a
            href="https://www.instagram.com/ignaciovelazquez92/"
            target={"_blank"}
            className="text-green-400 hover:text-white mx-2 transition duration-300"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Ignacio_V10"
            target={"_blank"}
            className="text-green-400 hover:text-white mx-2 transition duration-300"
          >
            <i className="bi bi-twitter-x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/omar-ignacio-velazquez-44499414a/"
            target={"_blank"}
            className="text-green-400 hover:text-white mx-2 transition duration-300"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            target={"_blank"}
            href="https://github.com/IgnacioVelazquez92"
            className="text-green-400 hover:text-white mx-2 transition duration-300"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
