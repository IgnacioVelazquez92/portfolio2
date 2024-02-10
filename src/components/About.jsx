import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-stretch lg:items-center h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Nacho👋
            <br />
            FullStack Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            Soy desarrollador FullStack MERN con año y medio de experiencia en
            la creación de aplicaciones web. Actualmente, ocupo el puesto de
            Team Leader en Startek, donde lidero a un equipo hacia el
            cumplimiento de KPIs. Sin embargo, mi verdadera pasión reside en el
            mundo de la tecnología y sueño con la oportunidad de realizar una
            transición formal hacia el sector IT.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contactarme
            </a>
            <a
              href="assets/PDF/CV-Ignacio-Velazquez.pdf"
              download="cv"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-1/3  md:w-1/2 w-5/6 flex flex-col justify-evenly items-center mx-auto">
          <img
            className="object-cover object-center rounded-full mx-auto"
            alt="Ignacio"
            src="assets/img/IV.webp"
          />
          <div className="text-3xl">
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
      </div>
    </section>
  );
};

export default About;
