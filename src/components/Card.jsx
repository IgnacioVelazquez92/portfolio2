import React from "react";
import "./Card.css";
const Card = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden mx-auto shadow-lg relative border-double border-4 border-green-400/50 p-2 ">
      <div className="font-bold text-green-400 text-xl mb-1">
        {project.title}
      </div>
      <p className="text-gray-700 text-base mb-1">{project.subtitle}</p>
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full transition-transform duration-200 ease-in-out transform"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <a
            href={project.repoFront}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400  font-bold hover:underline mb-2"
          >
            Frontend Repo
          </a>
          {project.repoBack !== "" && (
            <a
              href={project.repoBack}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400  font-bold hover:underline mb-2"
            >
              Backend Repo
            </a>
          )}

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400  font-bold hover:underline"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
      <p className="text-gray-600 text-base overflow-y-auto max-h-32 custom-scrollbar p-3">
        {project.description}
      </p>
    </div>
  );
};

export default Card;
