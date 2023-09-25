import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import Card from "./Card";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 lg:py-20 py-10 mx-auto text-center lg:px-40  seccion__animada">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            En esta sección, te muestro una selección de proyectos en los que he
            trabajado con dedicación. Cada proyecto no solo refleja mi
            experiencia en constante evolución, sino que también ilustra mis
            esfuerzos por adquirir nuevos conocimientos y habilidades. Como
            programador Junior, mi compromiso es claro: seguir aprendiendo y
            mejorando cada día.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
