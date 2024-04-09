import React from 'react'

function Projects() {
  return (
    <div className="flex flex-col gap-16 lg:gap-6">
  <div className="my-4 grid gap-2 md:grid-cols-2 lg:gap-10">
    <a
      href="https://www.kmaster.ashishcodejourney.tech/"
      className="flex flex-col bg-slate-50 items-center gap-4 rounded-2xl py-20 text-slate-700 transition-all duration-700 hover:bg-slate-200"
    >
      <img
        src="../public/projects/kmaster.jpg"
        alt="daisyUI"
        width={350}
        height={350}
        className="rounded-lg transition-all duration-300"
        style={{ viewTransitionName: "img-kmaster" }}
      />{" "}
      <div
        className="text-center text-sm"
        style={{ viewTransitionName: "title-kmaster" }}
      >
        Keyboard Master
      </div>{" "}
    </a>
    <a
      href="https://github.com/Ashish-CodeJourney/CYBERTRACE"
      className="flex flex-col bg-slate-50 items-center gap-4 rounded-2xl py-20 text-slate-700 transition-all duration-700 hover:bg-slate-200"
    >
      <img
        src="../public/projects/cybertrace.jpg"
        alt="project1"
        width={350}
        height={350}
        className="rounded-lg transition-all duration-300"
        style={{ viewTransitionName: "img-cybertrace" }}
      />{" "}
      <div
        className="text-center text-sm"
        style={{ viewTransitionName: "title-cybertrace" }}
      >
        CyberTrace
      </div>{" "}
    </a>
    <a
      href="https://github.com/Ashish-CodeJourney/Library_management"
      className="flex flex-col bg-slate-50 items-center gap-4 rounded-2xl py-20 text-slate-700 transition-all duration-700 hover:bg-slate-200"
    >
      <img
        src="../public/projects/library.jpg"
        alt="Library Management system"
        width={350}
        height={350}
        className="rounded-lg transition-all duration-300"
        style={{ viewTransitionName: "img-library" }}
      />{" "}
      <div
        className="text-center text-sm"
        style={{ viewTransitionName: "title-library" }}
      >
        Library Management system
      </div>{" "}
    </a>

  </div>
</div>

  )
}

export default Projects