import React from "react";

const TrendingTopicComponent = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Trending Topics
      </h3>
      <div className="flex flex-wrap gap-2">
        <a
          href="#"
          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200"
        >
          #AIWriting
        </a>
        <a
          href="#"
          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200"
        >
          #StoryGeneration
        </a>
        <a
          href="#"
          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
        >
          #Writing
        </a>
        <a
          href="#"
          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
        >
          #Creativity
        </a>
        <a
          href="#"
          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
        >
          #DigitalMarketing
        </a>
        <a
          href="#"
          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
        >
          #Storytelling
        </a>
        <a
          href="#"
          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"
        >
          #Productivity
        </a>
      </div>
    </section>
  );
};

export default TrendingTopicComponent;
