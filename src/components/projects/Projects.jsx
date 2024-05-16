import Lottie from 'react-lottie';
import animationData from "../../assets/under-construction.json";
import data from '../../assets/data.json';

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
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center gap-4 rounded-2xl py-8 lg:py-12 px-6 lg:px-10 text-slate-700 transition-all duration-700 hover:bg-slate-200">
          <img
            src={data.project1ImageUrl}
            alt="project1"
            width={350}
            height={200}
            className="rounded-lg shadow-lg transition-all duration-300"
          />
          <div className="text-center text-lg font-semibold mt-4">{data.project1Name}</div>
          <div className="text-center text-m text-black-700 mt-2 ">
            {data.project1Description}
          </div>
          
          <a href={data.project1GithubUrl} className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          <a href={data.project1LiveUrl} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">Live</a>
          
        </div>
      </div>
      <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
        <div className="flex w-full max-w-4xl flex-col gap-10 print:gap-6">
          <div className="flex flex-col items-center">
            <Lottie options={defaultOptions} height={300} width={300} />
            <p className="text-left leading-8 mt-8">
              <span className="text-lg">
                <strong>Other projects are under construction.</strong>
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
