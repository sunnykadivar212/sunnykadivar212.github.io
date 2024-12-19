import React from "react";
import { Frown } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
            <div className="flex flex-col items-center gap-8">
                <Frown
                    className="text-blue-600 animate-bounce"
                    size={64}
                />
                <h1 className="text-4xl font-bold text-blue-600">
                    404 - Page Not Found
                </h1>
                <p className="text-gray-600 max-w-md">
                    Oops! It seems like the page you’re looking for doesn’t exist or might have been moved to a different location. Don’t worry, we’ll help you get back on track.
                </p>
                <Link
                    to="/"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-500 hover:shadow-xl transition-all"
                >
                    Go Back to Home
                </Link>
            </div>
        </main>
    );
}

export default NotFound;
