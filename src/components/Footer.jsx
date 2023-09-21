import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="bg-gray-600 py-3 px-16">
        <div className="container flex justify-between text-center">
          <span className="text-white text-small">
            © 2023 Ignacio Velazquez 💙
          </span>
          <div className="">
            <a
              href="#"
              className="text-green-400 hover:text-white mx-2 transition duration-300"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="#"
              className="text-green-400 hover:text-white mx-2 transition duration-300"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="#"
              className="text-green-400 hover:text-white mx-2 transition duration-300"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-green-400 hover:text-white mx-2 transition duration-300"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
