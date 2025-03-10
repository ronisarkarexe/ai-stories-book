import React from "react";
import StoriesViewComponent from "./stories.view.component";

const StoriesComponent = () => {
  return (
    <div className="bg-gradient-to-br from-slate-700 via-custom to-indigo-800 animate-gradient-slow min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-white text-xl font-semibold">
              STORY SPARK AI
            </span>
          </div>
          <div className="!rounded-button bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white px-3 py-2 flex items-center gap-2 transition-all duration-300">
            Hello World
          </div>
          <button className="!rounded-button bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white px-3 py-2 flex items-center gap-2 transition-all duration-300">
            <span>20</span>
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

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-xl">
              <div className="relative">
                <textarea
                  className="w-full h-36 resize-none border-none outline-none border-0 bg-transparent text-gray-900 placeholder-gray-500 focus:ring-0 text-lg leading-relaxed tracking-wide placeholder:italic placeholder:text-gray-400 font-[Poppins] md:font-[Inter]"
                  placeholder="Every great story begins with a single idea. What’s yours?"
                ></textarea>
                <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                  <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group">
                    <i className="fas fa-wand-magic-sparkles mr-2 text-lg transition-transform duration-300 group-hover:animate-wiggle"></i>
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
