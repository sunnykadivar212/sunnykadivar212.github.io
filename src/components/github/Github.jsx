import React, { useEffect, useState, useMemo } from "react";

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/ashish-codejourney"
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

  const memoizedData = useMemo(() => data, [data]);

  if (!memoizedData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-black-900 border-opacity-75 h-12 w-12"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center">
        <img
          src={memoizedData.avatar_url}
          alt={`${memoizedData.login}'s Avatar`}
          className="rounded-full border-4 border-gray-600"
          width={150}
        />
      </div>

      <div className="mt-4">
        <p className="text-center text-xl font-bold">{memoizedData.name}</p>
        <p className="text-center text-gray-500">@{memoizedData.login}</p>
        <p className="text-center mt-2">{memoizedData.bio}</p>
      </div>

      {/* Other parts of your component */}
    </div>
  );
}

export default Github;
