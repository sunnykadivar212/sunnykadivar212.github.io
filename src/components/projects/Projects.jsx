import Lottie from 'react-lottie';
import animationData from "../../assets/under-construction.json";
import data from '../../assets/data.json';
import project1Image from '../../assets/project1.png';

function Projects() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <div className="flex flex-col gap-16 lg:gap-6">
        {/* Project 1 */}
        <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center rounded-2xl py-8 lg:py-12 px-6 lg:px-10 text-slate-900 transition-all duration-700 hover:bg-slate-900 group">
            <img
                src={data.project1Image || project1Image}
                alt="project1"
                width={350}
                height={200}
                className="rounded-lg shadow-lg transition-all duration-300"
            />
            <div className="text-center md:text-left">
              <div className="text-lg font-semibold mt-4 group-hover:text-white">
                {data.project1Name}
              </div>
              <div className="text-m text-black-700 mt-2 group-hover:text-white">
                {data.project1Description}
              </div>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <a
                    href={data.project1GithubUrl}
                    className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
                <a
                    href={data.project1LiveUrl}
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

        {/* Other Projects Section */}
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
      </div>
  );
}

export default Projects;
