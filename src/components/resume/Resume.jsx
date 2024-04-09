import React from "react";
import data from '../../assets/data.json';


const LinkedinUrl = data.linkedinUrl;
const LinkedinUsername = data.linkedinUserName;


function Resume() {
  return (
    <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-4xl flex-col gap-10 print:gap-6">
        <div className="flex w-full max-w-4xl flex-col gap-36 print:gap-10">
          <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
            <div
              className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4"
              data-svelte-h="svelte-llc306"
            >
              <div className="print:col-start-2 lg:col-span-3 lg:col-start-2">
                <h2 className="text-2xl font-bold text-blue-600">Experience</h2>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
              <div className="print:text-right lg:text-right">
                <span className="text-black/60">{data.workingInCurrentCompanySince} </span>
              </div>
              <div className="print:col-span-3 lg:col-span-3">
                <h2 className="inline font-bold">
                  {data.currentPosition}
                </h2>{" "}
                <span className="[&_a]:underline">
                  at{" "}
                  <a
                    href={data.companySite}
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    {data.company}
                  </a>{" "}
                  ({data.companyLocation}){" "}
                </span>
              </div>{" "}
              <div className="print:text-right lg:text-right">
                <span className="text-sm text-black/60">{data.workingShift}</span>
              </div>
              <div className="print:col-span-3 lg:col-span-3">
                <p>
                  actively helping in feature and performance improvement
                  projects such as:{" "}
                </p>
                <ul className="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
                  <li className="[&_a]:underline">
                    <a
                      href={data.workingProjectSite}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      {data.workingOn}
                    </a>
                    : {data.workingProjectDescription}.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
            <div
              className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4"
              data-svelte-h="svelte-1qclnao"
            >
              <div className="print:col-start-2 lg:col-span-3 lg:col-start-2">
                <h2 className="text-2xl font-bold text-blue-600 ">Education</h2>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
              <div className="print:text-right lg:text-right">
                <span className="text-black/60">{data.mastersCollegeTime} </span>
              </div>
              <div className="print:col-span-3 lg:col-span-3">
                <h2 className="inline font-bold">
                  {data.mastersDegree}
                </h2>{" "}
                <span>at {data.mastersUniversity} </span>
              </div>
              <div
                className="print:text-right lg:text-right"
                data-svelte-h="svelte-yw87rh"
              >
                <span className="text-sm text-black/60" />
              </div>
              <div className="print:col-span-3 lg:col-span-3">
                <p>{data.mastersUniversityLocation}</p>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
              <div className="print:text-right lg:text-right">
                <span className="text-black/60">{data.bacheloursCollegeTime}</span>
              </div>
              <div className="print:col-span-3 lg:col-span-3">
                <h2 className="inline font-bold">
                  {data.bacheloursDegree}
                </h2>{" "}
                <span>at {data.bacheloursUniversity} </span>
              </div>
              <div
                className="print:text-right lg:text-right"
                data-svelte-h="svelte-yw87rh"
              >
                <span className="text-sm text-black/60" />
              </div>
              <div className="print:col-span-3 lg:col-span-3">
                <p>{data.bacheloursUniversityLocation}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
            <div
              className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4"
              data-svelte-h="svelte-1prmtjf"
            >
              <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
                <h2 className="text-2xl font-bold text-blue-600">
                  Skills and Tech Stack
                </h2>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
              <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
                <ul className="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
                  <li>{data.knownSkills}</li>
                  <li>{data.knownLibrariesAndFrameWorks}</li>
                  <li>{data.knownTools}</li>
                  <li>
                    Currently I am improving my skills by building some projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
            <div
              className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4"
              data-svelte-h="svelte-vldwmu"
            >
              <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
                <h2 className="text-2xl font-bold text-blue-600">
                  Contact Info
                </h2>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
              <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
                <ul className="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
                  <li className="[&_a]:underline">
                    Email:{" "}
                    <a
                      href={data.mailto}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      {data.email}
                    </a>{" "}
                  </li>
                  <li className="[&_a]:underline">
                    Linkedin:{" "}
                    <a
                      href={`https://linkedin.com/in/ashish-codejourney/`}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      @{data.linkedinUserName}
                    </a>{" "}
                  </li>
                  <li className="[&_a]:underline">
                    Github:{" "}
                    <a
                      href="https://github.com/Ashish-CodeJourney"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      @{data.githubUserName}
                    </a>{" "}
                  </li>
                  <li className="[&_a]:underline">
                    Twitter:{" "}
                    <a
                      href="https://twitter.com/CLI_Craftsman"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      @{data.XUserName}
                    </a>{" "}
                  </li>
                  <li className="[&_a]:underline">
                    Telegram:{" "}
                    <a
                      href="https://t.me/heyyy_ashish"
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      @{data.telegramUserName}
                    </a>{" "}
                  </li>
                  <li className="[&_a]:underline">
                    Location: {data.city} (open to relocation){" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
