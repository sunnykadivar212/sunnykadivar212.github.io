import React from "react";
import Lottie from 'react-lottie';
import animationData from "../../assets/under-construction.json"

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
    // uncomment this and remove other thing of animation (lottie) when add projects
    // <div className="flex flex-col gap-16 lg:gap-6">
    //   <div className="my-4 grid gap-2 md:grid-cols-2 lg:gap-10">
    //     <a
    //       href="https://www.ashishcodejourney.tech/"
    //       className="flex flex-col bg-slate-50 items-center gap-4 rounded-2xl py-20 text-slate-700 transition-all duration-700 hover:bg-slate-200"
    //     >
    //       <img
    //         src="#"
    //         alt="project1"
    //         width={350}
    //         height={350}
    //         className="rounded-lg transition-all duration-300"
    //         style={{ viewTransitionName: "img-project1" }}
    //       />{" "}
    //       <div
    //         className="text-center text-sm"
    //         style={{ viewTransitionName: "title-project1" }}
    //       >
    //         project1
    //       </div>{" "}
    //     </a>
    //     <a
    //       href="https://www.ashishcodejourney.tech/"
    //       className="flex flex-col bg-slate-50 items-center gap-4 rounded-2xl py-20 text-slate-700 transition-all duration-700 hover:bg-slate-200"
    //     >
    //       <img
    //         src="#"
    //         alt="project2"
    //         width={350}
    //         height={350}
    //         className="rounded-lg transition-all duration-300"
    //         style={{ viewTransitionName: "img-project2" }}
    //       />{" "}
    //       <div
    //         className="text-center text-sm"
    //         style={{ viewTransitionName: "title-project2" }}
    //       >
    //         project2
    //       </div>{" "}
    //     </a>
    //     <a
    //       href="https://www.ashishcodejourney.tech/"
    //       className="flex flex-col bg-slate-50 items-center gap-4 rounded-2xl py-20 text-slate-700 transition-all duration-700 hover:bg-slate-200"
    //     >
    //       <img
    //         src="#"
    //         alt="project3"
    //         width={350}
    //         height={350}
    //         className="rounded-lg transition-all duration-300"
    //         style={{ viewTransitionName: "img-project3" }}
    //       />{" "}
    //       <div
    //         className="text-center text-sm"
    //         style={{ viewTransitionName: "title-project3" }}
    //       >
    //         project3
    //       </div>{" "}
    //     </a>

    //     <a
    //       href="https://www.ashishcodejourney.tech/"
    //       className="flex flex-col bg-slate-50 items-center gap-4 rounded-2xl py-20 text-slate-700 transition-all duration-700 hover:bg-slate-200"
    //     >
    //       <img
    //         src="#"
    //         alt="project4"
    //         width={350}
    //         height={350}
    //         className="rounded-lg transition-all duration-300"
    //         style={{ viewTransitionName: "img-project4" }}
    //       />{" "}
    //       <div
    //         className="text-center text-sm"
    //         style={{ viewTransitionName: "title-project4" }}
    //       >
    //         project4
    //       </div>{" "}
    //     </a>
    //   </div>
    // </div>

    <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-4xl flex-col gap-10 print:gap-6">
        <div className="flex flex-col items-center">
          <Lottie options={defaultOptions} height={300} width={300} />
          <p className="text-left leading-8 mt-8">
            <span className="text-lg">
              <strong>This page is under construction.</strong>
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

export default Projects;