import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../../assets/under-construction.json";
import data from '../../assets/data.json';
import project1Image from '../../assets/project1.png';

function ProjectCard({ name, description, image, githubUrl, liveUrl }) {
  return (
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center rounded-2xl py-8 lg:py-12 px-6 lg:px-10 text-slate-900 transition-all duration-700 hover:bg-slate-900 group">
          <img
              src={image}
              alt={name}
              width={350}
              height={200}
              className="rounded-lg shadow-lg transition-all duration-300"
          />
          <div className="text-center md:text-left">
            <div className="text-lg font-semibold mt-4 group-hover:text-white">
              {name}
            </div>
            <div className="text-m text-black-700 mt-2 group-hover:text-white">
              {description}
            </div>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                  href={githubUrl}
                  className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <a
                  href={liveUrl}
                  className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

function UnderConstruction() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
        <div className="flex w-full max-w-4xl flex-col gap-10 print:gap-6">
          <div className="flex flex-col items-center">
            <Lottie options={defaultOptions} height={300} width={300} />
            <p className="text-left leading-8 mt-8 text-center">
            <span className="text-lg font-semibold">
              Other projects are under construction.
            </span>
              <br />
              <span className="text-lg">
              Please check back later for updates.
            </span>
            </p>
          </div>
        </div>
      </div>
  );
}

function Projects() {
  return (
      <div className="flex flex-col gap-16 lg:gap-6">
        <ProjectCard
            name={data.project1Name}
            description={data.project1Description}
            image={data.project1Image || project1Image}
            githubUrl={data.project1GithubUrl}
            liveUrl={data.project1LiveUrl}
        />
        <UnderConstruction />
      </div>
  );
}

export default Projects;
