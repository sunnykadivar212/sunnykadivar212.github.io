import React from "react";
import data from '../../assets/data.json';

function About() {
  return (
      <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
        <div className="flex w-full max-w-4xl flex-col gap-10 print:gap-6">
          <p className="text-left leading-8">
          <span className="text-lg">
            I'm <strong>{data.firstName || "Your Name"}</strong>, a Freelance Full Stack Developer living in {data.city || "Your City"}.
          </span>
            <br />
            <span className="text-lg">
            Currently, I'm building{" "}
              <a
                  href={data.currentlyWorkingonURL || data.githubUrl}
                  target="_blank"
                  rel="noreferrer nofollow"
                  aria-label="Link to my personal projects"
                  className="text-blue-600 hover:underline"
              >
              {data.currentlyWorkingon}
            </a>
            .
          </span>
            <br />
            <span className="text-lg">
            My open-source projects and experiments are available on{" "}
              <a
                  href={data.githubUrl || "#"}
                  target="_blank"
                  rel="noreferrer nofollow"
                  aria-label="Link to my GitHub"
                  className="text-blue-600 hover:underline"
              >
              <strong>GitHub</strong>
            </a>
            .
          </span>
            <br />
            <span className="text-lg">
            You can also follow me on{" "}
              <a
                  href={data.XUrl || "#"}
                  target="_blank"
                  rel="noreferrer nofollow"
                  aria-label="Link to my X profile"
                  className="text-blue-600 hover:underline"
              >
              <strong>X</strong>
            </a>{" "}
              where I share opinions, ideas, or memes.
          </span>
            <br />
            <span className="text-lg">
            Or you can send me an email via{" "}
              <a
                  href={data.mailto || "mailto:your-email@example.com"}
                  target="_blank"
                  rel="noreferrer nofollow"
                  aria-label="Send me an email"
                  className="text-blue-600 hover:underline"
              >
              <strong>{data.email || "your-email@example.com"}</strong>
            </a>
            . I would be happy to connect.
          </span>
          </p>
        </div>
      </div>
  );
}

export default About;
