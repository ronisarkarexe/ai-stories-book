import React from "react";

const WriterFeedbackComponent = () => {
  return (
    <section className="mb-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-500">
            What Our Writers Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hear from our community of writers about their experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-950/60 p-6 rounded-xl transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full ring-4 ring-white"
                src="https://avatars.githubusercontent.com/u/143581055?v=4"
                alt=""
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Sarah Mitchell
                </h4>
                <p className="text-sm text-gray-500">Professional Writer</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &#34;The AI writing features have transformed how I create
              content. It&#39;s like having a creative partner!&#34;
            </p>
          </div>
          <div className="bg-blue-950/60 p-6 rounded-xl transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full ring-4 ring-white"
                src="https://avatars.githubusercontent.com/u/143581055?v=4"
                alt=""
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Robert Chen
                </h4>
                <p className="text-sm text-gray-500">Content Strategist</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &#34;The AI tools have revolutionized my content creation process.
              Highly recommended!&#34;
            </p>
          </div>
          <div className="bg-blue-950/60 p-6 rounded-xl transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full ring-4 ring-white"
                src="https://avatars.githubusercontent.com/u/143581055?v=4"
                alt=""
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Emma Thompson
                </h4>
                <p className="text-sm text-gray-500">Creative Director</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &#34;BlogVerse has helped me find my creative voice and connect
              with an amazing community of writers.&#34;
            </p>
          </div>
          <div className="bg-blue-950/60 p-6 rounded-xl transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full ring-4 ring-white"
                src="https://avatars.githubusercontent.com/u/143581055?v=4"
                alt=""
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Marcus Williams
                </h4>
                <p className="text-sm text-gray-500">Tech Blogger</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &#34;The platform&#39;s AI capabilities and user-friendly
              interface make writing a joy.&#34;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriterFeedbackComponent;
