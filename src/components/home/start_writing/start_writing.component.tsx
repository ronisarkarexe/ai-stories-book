import React from "react";
import aiWriter from "../../../assets/aiwriter.webp";
import { Link } from "react-router-dom";

const StartWritingComponent = () => {
  return (
    <section className="mb-16 mx-5">
      <div className="bg-gradient-to-r from-blue-950 to-purple-600 rounded-lg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-300 mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Writing?</h2>
            <p className="text-xl text-indigo-400 mb-6">
              Join thousands of writers who are already creating amazing content
              with our AI-powered platform.
            </p>
            <Link to="/stories">
              <button className="!rounded-button bg-white text-blue-800 px-8 py-3 font-medium hover:bg-gray-100 cursor-pointer">
                Get Started Free
              </button>
            </Link>
          </div>
          <div className="flex-shrink-0">
            <img
              src={aiWriter}
              alt="Writing Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWritingComponent;
