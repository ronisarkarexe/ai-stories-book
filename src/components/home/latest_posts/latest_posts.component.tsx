import React from "react";

const LatestPostsComponent = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>
      <div className="space-y-6">
        <article className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/76697055?v=4"
              alt=""
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Alex Rivera</p>
              <p className="text-xs text-gray-500">Mar 14, 2024 · 5 min read</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Finding Your Voice as a Writer
          </h3>
          <p className="text-gray-500 mb-4">
            Discover techniques and exercises that will help you develop your
            unique writing style and voice...
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <span className="flex items-center mr-4">
                <i className="far fa-heart mr-1"></i> 89
              </span>
              <span className="flex items-center mr-4">
                <i className="far fa-comment mr-1"></i> 12
              </span>
            </div>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-custom">
                Writing
              </span>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Creativity
              </span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/76697055?v=4"
              alt=""
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Emma Thompson</p>
              <p className="text-xs text-gray-500">Mar 13, 2024 · 8 min read</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            The Art of Storytelling in Digital Age
          </h3>
          <p className="text-gray-500 mb-4">
            How modern technology and traditional storytelling techniques can
            work together to create compelling narratives...
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <span className="flex items-center mr-4">
                <i className="far fa-heart mr-1"></i> 145
              </span>
              <span className="flex items-center mr-4">
                <i className="far fa-comment mr-1"></i> 28
              </span>
            </div>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Storytelling
              </span>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Digital
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default LatestPostsComponent;
