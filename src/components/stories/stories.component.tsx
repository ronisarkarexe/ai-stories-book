import React, { useState } from "react";
import StoriesViewComponent, { IStories } from "./stories.view.component";
import { Link } from "react-router-dom";
import { getUserInfo, isLoggedIn } from "../../services/auth.service";
import { getRequestLimit } from "./stories.utils";

const storie = [
  {
    id: "1",
    title: "The Whispering Walls",
    content:
      "Flora traced the faded wallpaper in her grandmother's attic, a curious bump beneath her fingers. Pushing against it, a section of the wall swung inward, revealing a dusty, arched doorway. It wasn't a closet; it was a tunnel swirling with emerald mist.  Heart pounding, Flora stepped through.  The air hummed with strange music, and the tunnel opened into a meadow bathed in violet sunlight. Crystal trees swayed in the breeze, their branches laden with glowing fruit.  A tiny, winged creature with iridescent scales flitted past her nose, chirping a melody. Fear gave way to wonder. This wasn't her grandmother's attic anymore. It was something magical, something…other.",
    tag: "fantasy",
    imageURL:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDB8fHx8MTc0MTA3ODI3OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "2",
    title: "The Clockwork Kingdom",
    content:
      'Leo hated dusting. But Mom insisted he clean the old grandfather clock in the hall.  Grumbling, he opened the clock\'s lower door, expecting to find cobwebs. Instead, he saw spiraling gears and gleaming brass, leading down like a slide.  Driven by curiosity, he slid down.  The gears whirred and clicked, depositing him in a vast room filled with intricate clockwork mechanisms.  Tiny, metal figures moved with precise, jerky motions, tending to the gears.  A figure with a brass head and a waistcoat approached Leo. "Welcome to Chronos," it chirped. "We\'ve been expecting you."',
    tag: "steampunk",
    imageURL:
      "https://images.unsplash.com/photo-1559590836-9eb74007ab44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxzdGVhbXB1bmt8ZW58MHx8fHwxNzQxMDc4Mjc4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const StoriesComponent = () => {
  const [stories, setStories] = useState<IStories[]>(storie);
  const userRole = getUserInfo();
  const login = isLoggedIn();

  return (
    <div className="bg-gradient-to-br animate-gradient-slow min-h-screen">
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
                  className="w-full h-40 resize-none border-none outline-none bg-transparent text-white focus:ring-0 text-lg leading-relaxed tracking-wide placeholder:italic placeholder:text-gray-400 font-[Poppins] md:font-[Inter]"
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
      <StoriesViewComponent
        stories={stories}
        isLogin={login}
        setStories={setStories}
      />
      <div className="absolute top-[-200px] left-[250px] w-[800px] h-[350px] bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default StoriesComponent;
