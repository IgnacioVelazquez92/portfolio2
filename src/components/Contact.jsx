import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Comment } from "react-loader-spinner";

export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, user, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          title: "¡Éxito!",
          text: "Enviado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        setUser({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          title: "¡Error!",
          text: "Upsss.. algo fallo, intenta vía mail",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        setLoading(false);
      }
    );
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 lg:py-20 py-10 mx-auto flex sm:flex-nowrap flex-wrap  seccion__animada">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113910.92162397077!2d-65.21699325!3d-26.848974300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225b89f0c06abf%3A0xd7ea64e06814c803!2sCapital%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1694993033019!5m2!1ses-419!2sar"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Lavalle 668 <br />
                SM de Tucumán, CP4000
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                ignaciov92@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                NÚMERO DE TELÉFONO
              </h2>
              <p className="leading-relaxed">3814443608</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¿Quieres decirme algo?
          </h2>
          <p className="leading-relaxed mb-5">
            Estoy a un click de distancia. Envíame tu consulta.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out peer"
              onChange={handleChange}
              pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
              required
            />
            <p className="mt-1  peer-invalid:block hidden text-pink-600 text-sm">
              Por favor introduce un mail valido.
            </p>
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className=" bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded flex justify-center gap-5"
          >
            {loading ? (
              <>
                <span className="text-lg text-white">Enviando</span>
                <Comment
                  visible={true}
                  height="30"
                  width="30"
                  ariaLabel="comment-loading"
                  wrapperStyle={{}}
                  wrapperClass="comment-wrapper"
                  color="#6366F1"
                  backgroundColor="#f4f4f4"
                />
              </>
            ) : (
              <span className="text-lg text-white">Enviar</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
