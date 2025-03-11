import React from "react";
import StoriesViewComponent from "./stories.view.component";
import { Link } from "react-router-dom";
import { getUserInfo, isLoggedIn } from "../../services/auth.service";
import { getRequestLimit } from "./stories.utils";

const StoriesComponent = () => {
  const userRole = getUserInfo();
  const login = isLoggedIn();

  return (
    <div className="bg-gradient-to-br from-slate-600 via-custom to-slate-800 animate-gradient-slow min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6 flex items-center justify-between">
          <Link to="/">
            <div className="!rounded-button bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white px-3 py-2 flex items-center gap-2 transition-all duration-300 rounded">
              <i className="fa-solid fa-left-long"></i> BACK
            </div>
          </Link>
          {!login && (
            <div className="!rounded-button bg-gradient-to-r from-white/20 to-white/10 text-white px-3 py-2 flex items-center gap-2 transition-all duration-300 rounded">
              Free access for 3 requests — login for more!
            </div>
          )}
          <button className="!rounded-button bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white px-3 py-2 flex items-center gap-2 transition-all duration-300 rounded">
            <span>{getRequestLimit(userRole?.subscriptionType as string)}</span>
            <i className="fas fa-bolt text-yellow-400"></i>
            <span className="border-l border-white/20 pl-2">Upgrade</span>
          </button>
        </header>

        <div className="mt-11">
          <h1 className="text-white text-4xl font-extrabold text-center mb-12 leading-snug drop-shadow-lg tracking-wide">
            ✨ One Prompt, Endless Stories –{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">
              Generate Story Today!
            </span>{" "}
            ✨
          </h1>

          <div className="max-w-3xl mx-auto p-4">
            <div className=" bg-slate-600 rounded-md p-4 border border-gray-400">
              <div className="relative">
                <textarea
                  className="w-full h-40 resize-none border-none outline-none bg-transparent text-white placeholder-gray-300 focus:ring-0 text-lg leading-relaxed tracking-wide placeholder:italic placeholder:text-gray-400 font-[Poppins] md:font-[Inter]"
                  placeholder="Every great story begins with a single idea. What’s yours?"
                ></textarea>
                <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                  <button className="rounded-lg bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-6 py-3 font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group">
                    <i className="fas fa-wand-magic-sparkles text-xl transition-transform duration-300 group-hover:animate-wiggle"></i>
                    <span>Generate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StoriesViewComponent />
    </div>
  );
};

export default StoriesComponent;
