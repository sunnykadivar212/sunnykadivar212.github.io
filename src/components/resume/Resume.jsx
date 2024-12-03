import React from "react";
import data from "../../assets/data.json";

function Section({ title, children }) {
  return (
      <section className="flex flex-col gap-16">
        <header className="grid items-baseline gap-x-10 lg:grid-cols-4">
          <div className="lg:col-span-3 lg:col-start-2">
            <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
          </div>
        </header>
        {children}
      </section>
  );
}

function JobDetails({ startDate, endDate, position, company, companySite, location, jobType, description, projects }) {
  return (
      <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
        <div className="lg:text-right">
          <span>{startDate} – {endDate || "Present"}</span>
        </div>
        <div className="lg:col-span-3">
          <h3 className="inline font-bold">{position}</h3>{" "}
          <span>
          at <a href={companySite} className="text-blue-500">{company}</a> ({location})
        </span>
        </div>
        <div className="lg:text-right">
          <span>{jobType}</span>
        </div>
        <div className="lg:col-span-3">
          <p>{description}</p>
          {projects && (
              <ul className="mx-5 my-2 list-disc">
                {projects.map((project, index) => (
                    <li key={index}>
                      <a href={project.site} className="text-blue-500">{project.name}</a>: {project.description}
                    </li>
                ))}
              </ul>
          )}
        </div>
      </div>
  );
}

function Resume() {
  return (
      <main className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
        <div className="flex w-full max-w-4xl flex-col gap-10">
          {/* Experience */}
          <Section title="Experience">
            <JobDetails
                startDate={data.currentJobStartDate}
                endDate="Present"
                position={data.currentPosition}
                company={data.currentCompany}
                companySite={data.currentCompanySite}
                location={data.currentCompanyLocation}
                jobType={data.currentJobType}
                description={data.currentJobDescription}
            />
            <JobDetails
                startDate={data.previousCompanyStartDate}
                endDate={data.previousCompanyEndDate}
                position={data.previousJobTitle}
                company={data.previousCompany}
                companySite={data.previousCompanySite}
                location={data.previousCompanyLocation}
                jobType={data.previousJobType}
                description={data.previousJobDescription}
                projects={data.previousProjects}
            />
          </Section>

          {/* Open Source Contributions */}
          <Section title="Open Source Contributions">
            <div className="grid items-baseline gap-x-10 lg:grid-cols-4">
              <div className="lg:text-right">
                <span>{data.openSourceContributionSince}</span>
              </div>
              <div className="lg:col-span-3">
                <h3 className="inline font-bold">{data.openSourceContributionsTitle}</h3>
                <ul className="mx-5 my-2 list-disc">
                  <li>{data.openSourceContributionDetails1}</li>
                  <li>{data.openSourceContributionsDetails2}</li>
                  <li>{data.openSourceContributionsDetails3}</li>
                  <li>
                    <a href={data.openSourceContributionsUrl} className="text-blue-500">
                      {data.openSourceContributionsUrlText}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            {[data.mastersCollegeTime, data.bachelorsCollegeTime].map((time, index) => (
                <div key={index} className="grid items-baseline gap-x-10 lg:grid-cols-4">
                  <div className="lg:text-right">
                    <span>{time}</span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="inline font-bold">{index === 0 ? data.mastersDegree : data.bachelorsDegree}</h3>{" "}
                    <span>
                  at {index === 0 ? data.mastersUniversity : data.bachelorsUniversity}
                </span>
                    <p>{index === 0 ? data.mastersUniversityLocation : data.bachelorsUniversityLocation}</p>
                  </div>
                </div>
            ))}
          </Section>

          {/* Skills and Tech Stack */}
          <Section title="Skills and Tech Stack">
            <ul className="mx-5 my-2 list-disc">
              <li>{data.knownSkills}</li>
              <li>{data.knownLibrariesAndFrameWorks}</li>
              <li>{data.knownTools}</li>
              <li>Currently improving skills by building projects</li>
            </ul>
          </Section>

          {/* Contact Info */}
          <Section title="Contact Info">
            <ul className="mx-5 my-2 list-disc">
              <li>Email: <a href={data.mailto} className="text-blue-500">{data.email}</a></li>
              <li>LinkedIn: <a href={data.linkedinUrl} className="text-blue-500">@{data.linkedinUserName}</a></li>
              <li>GitHub: <a href={data.githubUrl} className="text-blue-500">@{data.githubUserName}</a></li>
              <li>X: <a href={data.XUrl} className="text-blue-500">@{data.XUserName}</a></li>
              <li>Dev.to: <a href={data.devToUrl} className="text-blue-500">@{data.devToUserName}</a></li>
              <li>Telegram: <a href={data.telegramUrl} className="text-blue-500">@{data.telegramUserName}</a></li>
              <li>Location: {data.city} (open to relocation)</li>
            </ul>
          </Section>
        </div>
      </main>
  );
}

export default Resume;
