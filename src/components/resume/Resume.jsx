import data from "../../assets/data.json";

function Resume() {
  return (
    <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-4xl flex-col gap-10">
        <div className="flex w-full max-w-4xl flex-col gap-36">
          {/* Experience */}
          <div className="flex flex-col gap-16">
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:col-span-3 lg:col-start-2">
                <h2 className="text-2xl font-bold text-blue-600">Experience</h2>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:text-right">
                <span>{data.workingInCurrentCompanySince}</span>
              </div>
              <div className="lg:col-span-3">
                <h2 className="inline font-bold">{data.currentPosition}</h2>{" "}
                <span>
                  at <a href={data.companySite}>{data.company}</a> ({data.companyLocation})
                </span>
              </div>
              <div className="lg:text-right">
                <span>{data.workingShift}</span>
              </div>
              <div className="lg:col-span-3">
                <p>actively helping in feature and performance improvement projects such as:</p>
                <ul className="mx-5 my-2 list-disc">
                  <li>
                    <a href={data.workingProjectSite}>{data.workingOn}</a>: {data.workingProjectDescription}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Open Source Contributions */}
          <div className="flex flex-col gap-16">
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:col-span-3 lg:col-start-2">
                <h2 className="text-2xl font-bold text-blue-600">Open Source Contributions</h2>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:text-right">
                <span>{data.openSourceContributionSince}</span>
              </div>
              <div className="lg:col-span-3">
                <h2 className="inline font-bold">{data.openSourceContributionsTitle}</h2>
                <ul className="mx-5 my-2 list-disc">
                  <li>{data.openSourceContributionDetails1}</li>
                  <li>{data.openSourceContributionsDetails2}</li>
                  <li>{data.openSourceContributionsDetails3}</li>
                  <li>
                    <a href={data.openSourceContributionsUrl}>
                      {data.openSourceContributionsUrlText}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-16">
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:col-span-3 lg:col-start-2">
                <h2 className="text-2xl font-bold text-blue-600">Education</h2>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:text-right">
                <span>{data.mastersCollegeTime}</span>
              </div>
              <div className="lg:col-span-3">
                <h2 className="inline font-bold">{data.mastersDegree}</h2> <span>at {data.mastersUniversity}</span>
                <p>{data.mastersUniversityLocation}</p>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:text-right">
                <span>{data.bacheloursCollegeTime}</span>
              </div>
              <div className="lg:col-span-3">
                <h2 className="inline font-bold">{data.bacheloursDegree}</h2> <span>at {data.bacheloursUniversity}</span>
                <p>{data.bacheloursUniversityLocation}</p>
              </div>
            </div>
          </div>

          {/* Skills and Tech Stack */}
          <div className="flex flex-col gap-16">
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:col-span-3 lg:col-start-2">
                <h2 className="text-2xl font-bold text-blue-600">Skills and Tech Stack</h2>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:col-span-3 lg:col-start-2">
                <ul className="mx-5 my-2 list-disc">
                  <li>{data.knownSkills}</li>
                  <li>{data.knownLibrariesAndFrameWorks}</li>
                  <li>{data.knownTools}</li>
                  <li>Currently I am improving my skills by building some projects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-16">
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:col-span-3 lg:col-start-2">
                <h2 className="text-2xl font-bold text-blue-600">Contact Info</h2>
              </div>
            </div>
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:col-span-3 lg:col-start-2">
                <ul className="mx-5 my-2 list-disc">
                  <li>Email: <a href={data.mailto}>{data.email}</a></li>
                  <li>Linkedin: <a href={data.linkedinUrl}>@{data.linkedinUserName}</a></li>
                  <li>Github: <a href="https://github.com/Ashish-CodeJourney">@{data.githubUserName}</a></li>
                  <li>X: <a href={data.XUrl}>@{data.XUserName}</a></li>
                  <li>Dev.to: <a href={data.devToUrl}>@{data.XUserName}</a></li>
                  <li>Telegram: <a href={data.telegramUrl}>@{data.devToUserName}</a></li>
                  <li>Location: {data.city} (open to relocation)</li>
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