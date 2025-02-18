import React from "react";

const FeatureProfileComponent = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center mb-6">
        <img
          className="h-16 w-16 rounded-full"
          src="https://avatars.githubusercontent.com/u/76697055?v=4"
          alt=""
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">David Smith</h3>
          <p className="text-sm text-gray-500">@davidsmith</p>
        </div>
      </div>
      <div className="border-t border-b border-gray-200 py-4 mb-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-semibold text-gray-900">47</p>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900">2.1k</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900">892</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>
      </div>
      <button className="!rounded-button w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
        Generate Story <i className="fas fa-magic ml-2"></i>
      </button>
    </section>
  );
};

export default FeatureProfileComponent;
