import React from "react";

const RecommendedWritersComponent = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
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
              <p className="text-sm font-medium text-gray-900">Lisa Wang</p>
              <p className="text-xs text-gray-500">Tech Writer</p>
            </div>
          </div>
          <button className="!rounded-button text-custom text-sm font-medium hover:text-indigo-700">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/76697055?v=4"
              alt=""
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">James Wilson</p>
              <p className="text-xs text-gray-500">Travel Blogger</p>
            </div>
          </div>
          <button className="!rounded-button text-custom text-sm font-medium hover:text-indigo-700">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/76697055?v=4"
              alt=""
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Maria Garcia</p>
              <p className="text-xs text-gray-500">Food Writer</p>
            </div>
          </div>
          <button className="!rounded-button text-custom text-sm font-medium hover:text-indigo-700">
            Follow
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedWritersComponent;
