import React from "react";

const ExploreFeatureComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="relative group overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDB8fHx8MTc0MjQ1NjEwOHww&ixlib=rb-4.0.3&q=80&w=1080"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
          <h3 className="text-white text-xl font-semibold">
            The Last Spellkeeper
          </h3>
          <p className="text-gray-200 text-sm mt-2">
            A young apprentice discovers an ancient spell that could change the
            fate of magic forever.
          </p>
          <div className="flex items-center mt-4">
            <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">
              Fantasy
            </span>
            <div className="ml-auto flex items-center text-white text-sm">
              <i className="fas fa-heart mr-1"></i>
              <span>2.4k</span>
              <i className="fas fa-comment ml-3 mr-1"></i>
              <span>156</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1559590836-9eb74007ab44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTc0MjN8MHwxfHNlYXJjaHwxfHxzdGVhbXB1bmt8ZW58MHx8fHwxNzQxMDc4Mjc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
          <h3 className="text-white text-xl font-semibold">Neon Horizons</h3>
          <p className="text-gray-200 text-sm mt-2">
            In a world where technology rules supreme, one hacker fights to
            expose the truth.
          </p>
          <div className="flex items-center mt-4">
            <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
              Sci-Fi
            </span>
            <div className="ml-auto flex items-center text-white text-sm">
              <i className="fas fa-heart mr-1"></i>
              <span>1.8k</span>
              <i className="fas fa-comment ml-3 mr-1"></i>
              <span>98</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreFeatureComponent;
