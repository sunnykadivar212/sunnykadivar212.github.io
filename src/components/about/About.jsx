import React from "react";

function About() {
  return (
    <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-4xl flex-col gap-10 print:gap-6">
        <p className="text-left">
          I'm <strong>Ashish</strong>, a freelance web developer living in Istanbul.
        </p>
        <p className="text-left">
          Currently, I'm working on {" "}
          <a
            href="https://www.bidclips.com/"
            target="_blank"
            rel="noreferrer nofollow"
            className="text-black-600 hover:underline"
          >
            <strong>BidClips</strong>
          </a>
          .
        </p>
        <p className="text-left">
          My open-source projects and experiments are available on{" "}
          <a
            href="https://github.com/Ashish-CodeJourney"
            target="_blank"
            rel="noreferrer nofollow"
            className="text-black-600 hover:underline"
          >
            <strong>GitHub</strong>
          </a>
          .
        </p>
        <p className="text-left">
          You can also follow me on{" "}
          <a
            href="https://x.com/CLI_Craftsman"
            target="_blank"
            rel="noreferrer nofollow"
            className="text-black-600 hover:underline"
          >
            <strong>X</strong>
          </a>{" "}
          where I share opinions, ideas, or memes.
        </p>
        <p className="text-left">
          Or you can send me an email via{" "}
          <a
            href="mailto:pouya.saadeghi@gmail.com"
            target="_blank"
            rel="noreferrer nofollow"
            className="text-black-600 hover:underline"
          >
            <strong>vaghelaashish111@gmail.com</strong>
          </a>
          . I would be happy to connect.
        </p>
      </div>
    </div>
  );
}

export default About;
