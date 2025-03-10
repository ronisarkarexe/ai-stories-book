import React, { useState } from "react";
import { getShortenedText } from "./stories.utils";

const stories = [
  {
    id: 1,
    title: "The Whispering Walls",
    content:
      "Flora traced the faded wallpaper in her grandmother's attic, a curious bump beneath her fingers. Pushing against it, a section of the wall swung inward, revealing a dusty, arched doorway. It wasn't a closet; it was a tunnel swirling with emerald mist.  Heart pounding, Flora stepped through.  The air hummed with strange music, and the tunnel opened into a meadow bathed in violet sunlight. Crystal trees swayed in the breeze, their branches laden with glowing fruit.  A tiny, winged creature with iridescent scales flitted past her nose, chirping a melody. Fear gave way to wonder. This wasn't her grandmother's attic anymore. It was something magical, something…other.",
    tag: "fantasy",
    imageURL:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDB8fHx8MTc0MTA3ODI3OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "The Clockwork Kingdom",
    content:
      'Leo hated dusting. But Mom insisted he clean the old grandfather clock in the hall.  Grumbling, he opened the clock\'s lower door, expecting to find cobwebs. Instead, he saw spiraling gears and gleaming brass, leading down like a slide.  Driven by curiosity, he slid down.  The gears whirred and clicked, depositing him in a vast room filled with intricate clockwork mechanisms.  Tiny, metal figures moved with precise, jerky motions, tending to the gears.  A figure with a brass head and a waistcoat approached Leo. "Welcome to Chronos," it chirped. "We\'ve been expecting you."',
    tag: "steampunk",
    imageURL:
      "https://images.unsplash.com/photo-1559590836-9eb74007ab44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxzdGVhbXB1bmt8ZW58MHx8fHwxNzQxMDc4Mjc4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "The Sunken City",
    content:
      "Maya loved rainy days.  Exploring the flooded basement of her old house was her favorite pastime.  One particularly stormy day, she discovered a loose brick in the wall, revealing a dark hole.  Intrigued, she waded closer.  The hole widened, revealing a shimmering, underwater passage. Holding her breath, Maya plunged into the passage. She emerged into a breathtaking underwater city, illuminated by bioluminescent coral. Strange, fish-like humanoids swam through the streets, their scales catching the light. Maya marveled at the sight, her fear forgotten.  This wasn't just a flooded basement. It was Atlantis, brought to life.",
    tag: "aquatic",
    imageURL:
      "https://images.unsplash.com/photo-1619458845477-d3c58085beea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxhcXVhdGljfGVufDB8fHx8MTc0MTA3ODI3OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    title: "The Shadow Forest",
    content:
      "Ethan followed his runaway dog, Buster, into the dense woods behind his house. Buster disappeared into a thicket of thorny bushes. Ethan followed, pushing aside the branches.  He stumbled into a clearing, but Buster was gone.  In his place stood a towering oak tree, its trunk hollow and dark.  A faint whisper echoed from within. Drawn by an unseen force, Ethan stepped inside. The darkness consumed him, and he felt himself falling, falling…  He landed softly on mossy ground. Above him, the sky was a swirling vortex of purple and green.  Giant mushrooms glowed in the twilight, and shadowy figures flitted between the trees.  This was no ordinary forest. This was the land of shadows.",
    tag: "dark fantasy",
    imageURL:
      "https://images.unsplash.com/photo-1505635552518-3448ff116af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeXxlbnwwfHx8fDE3NDEwNzgyNzh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

interface IStories {
  id: number;
  title: string;
  content: string;
  tag: string;
  imageURL: string;
}

const StoriesViewComponent = () => {
  const [selectedStory, setSelectedStory] = useState<IStories | null>(
    stories[0]
  );

  const handelStorySelection = (story: IStories) => {
    setSelectedStory(story);
  };

  return (
    <div className="mt-16 mx-10 pb-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 ">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">
                {selectedStory?.title}
              </h1>
            </div>
            <div className="flex justify-end mb-4">
              <div className="flex -space-x-5 ">
                {stories.map((story) => (
                  <button
                    key={story.id}
                    className="relative w-16 h-16 rounded-full border-2 border-white hover:scale-110 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-fuchsia-600"
                    onClick={() => handelStorySelection(story)}
                  >
                    <img
                      src={story.imageURL}
                      alt={story.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Generated Story</h3>
              <span className="text-sm text-gray-800">400 Words</span>
              <span className="text-sm text-gray-800">
                <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group">
                  <span>Publish</span>
                </button>
              </span>
            </div>
            <div className="prose max-w-none">
              <p>{selectedStory?.content}</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 ">
          <div className="mb-5">
            <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">
              Preview
            </h1>
          </div>
          <div className="bg-gray-400 rounded-lg shadow-lg">
            <div className="relative flex flex-col rounded-lg">
              <div className="relative m-2.5 overflow-hidden text-white rounded-md">
                <img
                  src={selectedStory?.imageURL}
                  alt="card-image"
                  className="w-full h-40 object-cover rounded-b-md"
                />
              </div>
              <div className="px-3 py-1">
                <div className="mb-2 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  {selectedStory?.tag.toUpperCase()}
                </div>
                <h6 className="mb-1 text-slate-800 text-xl font-semibold">
                  {selectedStory?.title}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  {getShortenedText(selectedStory?.content)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesViewComponent;
