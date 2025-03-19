import React from "react";

const RecommendedWritersComponent = () => {
  return (
    <section className="bg-blue-500/10 rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-300 mb-4">
        Recommended Writers
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/76697055?v=4"
              alt=""
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-400">Lisa Wang</p>
              <p className="text-xs text-gray-500">Tech Writer</p>
            </div>
          </div>
          <button className="!rounded-button text-indigo-600 text-sm font-medium hover:text-indigo-700 cursor-pointer">
            Follow
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedWritersComponent;
