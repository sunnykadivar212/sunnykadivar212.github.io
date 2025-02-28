import React from "react";
import data from '../../assets/data.json';

function About() {
  // Common link properties for better reusability
  const createLink = (url, label, text) => (
      <a
          href={url}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label={label}
          className="text-blue-600 hover:underline"
      >
        {text}
      </a>
  );

  return (
      <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
        <div className="flex w-full max-w-4xl flex-col gap-10 print:gap-6">
          <div className="text-left leading-8 space-y-2">
            <p className="text-lg">
              I'm <strong>{data.firstName || "Your Name"}</strong>, a Freelance Full Stack Developer living in {data.city || "Your City"}.
            </p>
            <p className="text-lg">
              Currently, I'm building{" "}
              {createLink(
                  data.currentlyWorkingonURL || data.githubUrl,
                  "Link to my personal projects",
                  data.currentlyWorkingon
              )}
              .
            </p>
            <p className="text-lg">
              My open-source projects and experiments are available on{" "}
              {createLink(
                  data.githubUrl || "#",
                  "Link to my GitHub",
                  <strong>GitHub</strong>
              )}
              .
            </p>
            <p className="text-lg">
              You can also follow me on{" "}
              {createLink(
                  data.XUrl || "#",
                  "Link to my X profile",
                  <strong>X</strong>
              )}{" "}
              where I share opinions, ideas, or memes.
            </p>
            <p className="text-lg">
              Or you can send me an email via{" "}
              {createLink(
                  data.mailto || "mailto:your-email@example.com",
                  "Send me an email",
                  <strong>{data.email || "your-email@example.com"}</strong>
              )}
              . I would be happy to connect.
            </p>
          </div>
        </div>
      </div>
  );
}

export default About;
