import React, { useEffect, useState } from "react";
import data from '../../assets/data.json';
import {
    Twitter, Linkedin, Instagram, Mail, Terminal, Code, Zap, Smile, Globe
} from 'lucide-react';

// Extract username from data to avoid naming conflict with state
const githubUsername = data.githubUserName;

function ProfileLink({ href, icon: Icon, children }) {
    return (
        <p>
            <Icon className="inline-block mr-2" />
            {children}
        </p>
    );
}

function SocialLink({ href, children }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

function Github() {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${githubUsername}`
                );
                if (response.ok) {
                    const result = await response.json();
                    setProfileData(result);
                } else {
                    console.error("Failed to fetch GitHub data");
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full border-t-4 border-black-900 border-opacity-75 h-12 w-12"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-3xl font-bold mb-4">
                <Smile size={24} className="inline-block mr-2" /> Hi, I'm Ashish
            </h1>
            <h3 className="text-center text-xl mb-4">
                A Techie <Code size={24} className="inline-block" /> Software developer from India
            </h3>

            <div className="flex items-center justify-center">
                <img
                    src={profileData.avatar_url}
                    alt={`${profileData.login}'s Avatar`}
                    className="rounded-full border-4 border-gray-600"
                    width={150}
                />
            </div>

            <div className="mt-4">
                <p className="text-center text-xl font-bold">{profileData.name}</p>
                <p className="text-center text-gray-500">@{profileData.login}</p>
                <p className="text-center mt-2">{profileData.bio}</p>
            </div>

            <div className="mt-4 text-left max-w-md mx-auto">
                <ProfileLink icon={Mail} href="#">
                    Reach me at <strong>vaghelaashish111@gmail.com</strong>
                </ProfileLink>
                <ProfileLink icon={Code} href="#">
                    All of my projects are available at <a href="https://ashishcodejourney.vercel.app" target="_blank" rel="noopener noreferrer">Ashish-CodeJourney</a>
                </ProfileLink>
                <ProfileLink icon={Zap} href="#">
                    <strong>Chai is way better than Coffee | Change my mind!</strong>
                </ProfileLink>
                <ProfileLink icon={Globe} href="#">
                    <a href="https://github.com/mdn/content/pulls?q=is%3Apr+is%3Amerged+author%3AAshish-CodeJourney" target="_blank" rel="noopener noreferrer">Some contributions in MDN web docs</a>
                </ProfileLink>
            </div>

            <div className="mt-4 flex justify-center">
                <img src="https://raw.githubusercontent.com/Ashish-CodeJourney/Ashish-CodeJourney/master/assets/terminal.svg" alt="Terminal Command" />
            </div>

            <div className="text-center mt-4">
                <div className="flex justify-center">
                    <img
                        src={`https://komarev.com/ghpvc/?username=${githubUsername}&label=Profile%20views&color=0e75b6&style=flat`}
                        alt="Profile Views"
                    />
                </div>
            </div>

            <div className="text-center mt-4">
                <h3 className="text-xl font-bold mb-2">Connect with me:</h3>
                <div className="flex justify-center space-x-4">
                    <SocialLink href="https://twitter.com/codejourney_">
                        <Twitter size={40} />
                    </SocialLink>
                    <SocialLink href="https://linkedin.com/in/ashish-codejourney">
                        <Linkedin size={40} />
                    </SocialLink>
                    <SocialLink href="https://instagram.com/heyyy_ashish">
                        <Instagram size={40} />
                    </SocialLink>
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
                            src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&show_icons=true&locale=en&layout=compact`}
                            alt={`${profileData.login}'s Top Languages`}
                        />
                    </div>
                    <div>
                        <p className="text-center text-lg font-bold">GitHub Streak Stats</p>
                        <img
                            src={`https://nirzak-streak-stats.vercel.app/?user=${githubUsername}`}
                            alt={`${profileData.login}'s GitHub Streak Stats`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;