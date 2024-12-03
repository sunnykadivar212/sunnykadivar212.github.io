import React, { useEffect, useState } from "react";
import data from '../../assets/data.json';

const githubUserName = data.githubUserName;
const xUserName = data.XUserName;

function Github() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUserName}`
        );
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error("Failed to fetch GitHub data");
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-black-900 border-opacity-75 h-12 w-12"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Hi 👋, I'm Ashish</h1>
      <h3 className="text-center text-xl mb-4">A Techie 🤓 Software developer from India 🇮🇳</h3>

      <div className="flex items-center justify-center">
        <img
          src={data.avatar_url}
          alt={`${data.login}'s Avatar`}
          className="rounded-full border-4 border-gray-600"
          width={150}
        />
      </div>

      <div className="mt-4">
        <p className="text-center text-xl font-bold">{data.name}</p>
        <p className="text-center text-gray-500">@{data.login}</p>
        <p className="text-center mt-2">{data.bio}</p>
      </div>

      <div className="mt-4 text-left max-w-md mx-auto">
        <p>💬 Ask me about <strong>Linux, React, Python and Java</strong></p>
        <p>📫 Reach me at <strong>vaghelaashish111@gmail.com</strong></p>
        <p>👨‍💻 All of my projects are available at <a href="https://ashishcodejourney.vercel.app" target="_blank" rel="noopener noreferrer">Ashish-CodeJourney</a></p>
        <p>⚡ <strong>Chai is way better than Coffee | Change my mind!</strong></p>
        <p>🌐 <a href="https://github.com/mdn/content/pulls?q=is%3Apr+is%3Amerged+author%3AAshish-CodeJourney" target="_blank" rel="noopener noreferrer">Some contributions in MDN web docs</a></p>
      </div>

      <div className="mt-4 flex justify-center">
        <img src="https://raw.githubusercontent.com/Ashish-CodeJourney/Ashish-CodeJourney/master/assets/terminal.svg" alt="Terminal Command" />
      </div>

      <div className="text-center mt-4">
        <p className="flex justify-center">
          <img
            src={`https://komarev.com/ghpvc/?username=${githubUserName}&label=Profile%20views&color=0e75b6&style=flat`}
            alt="Profile Views"
          />
        </p>
      </div>

      <div className="text-center mt-4">
        <h3 className="text-xl font-bold mb-2">Connect with me:</h3>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com/codejourney_" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="Twitter" height="30" width="40" />
          </a>
          <a href="https://linkedin.com/in/ashish-codejourney" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="LinkedIn" height="30" width="40" />
          </a>
          <a href="https://instagram.com/heyyy_ashish" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="Instagram" height="30" width="40" />
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2 text-center">Languages and Tools:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Add your language and tool icons here */}
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-2xl">
          <div>
            <p className="text-center text-lg font-bold">Top Languages</p>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubUserName}&show_icons=true&locale=en&layout=compact`}
              alt={`${data.login}'s Top Languages`}
            />
          </div>
          <div>
            <p className="text-center text-lg font-bold">GitHub Stats</p>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUserName}&show_icons=true&locale=en`}
              alt={`${data.login}'s GitHub Stats`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;