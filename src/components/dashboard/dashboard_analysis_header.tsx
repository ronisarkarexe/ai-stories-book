import React from "react";
import { DashboardAnalysis } from "../../models/analysis";

const DashboardAnalysisHeader: React.FC<{ data: DashboardAnalysis }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-slate-800 p-6">
      <h1 className="text-3xl font-bold text-gray-400 mb-8">
        Dashboard Analysis Header Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-500/10 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Users</p>
              <h3 className="text-2xl font-bold text-gray-300">
                {data.users.total}
              </h3>
            </div>
            <div className="bg-blue-300 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <div>
              <p className="text-indigo-500 text-xs">Active</p>
              <p className="text-green-600 font-medium">{data.users.active}</p>
            </div>
            <div>
              <p className="text-indigo-500 text-xs">Writers</p>
              <p className="text-purple-600 font-medium">
                {data.users.writers}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Posts</p>
              <h3 className="text-2xl font-bold text-gray-300">
                {data.posts.total}
              </h3>
            </div>
            <div className="bg-green-300 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <div>
              <p className="text-indigo-500 text-xs">Published</p>
              <p className="text-blue-600 font-medium">
                {data.posts.published}
              </p>
            </div>
            <div>
              <p className="text-indigo-500 text-xs">Featured</p>
              <p className="text-yellow-600 font-medium">
                {data.posts.featured}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Subscriptions</p>
              <h3 className="text-2xl font-bold text-gray-300">
                {data.subscriptionTypes.free +
                  data.subscriptionTypes.pro +
                  data.subscriptionTypes.premium}
              </h3>
            </div>
            <div className="bg-purple-300 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <div>
              <p className="text-indigo-500 text-xs">Free</p>
              <p className="text-pink-600 font-medium">
                {data.subscriptionTypes.free}
              </p>
            </div>
            <div>
              <p className="text-indigo-500 text-xs">Pro</p>
              <p className="text-blue-600 font-medium">
                {data.subscriptionTypes.pro}
              </p>
            </div>
            <div>
              <p className="text-indigo-500 text-xs">Premium</p>
              <p className="text-yellow-600 font-medium">
                {data.subscriptionTypes.premium}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">
                Writer Applications
              </p>
              <h3 className="text-2xl font-bold text-gray-300">
                {data.users.applyForWriter}
              </h3>
            </div>
            <div className="bg-yellow-300 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-indigo-200 rounded-full">
              <div
                className="h-2 bg-yellow-500 rounded-full"
                style={{
                  width: `${
                    (data.users.applyForWriter / data.users.total) * 100
                  }%`,
                }}
              ></div>
            </div>
            <p className="text-indigo-500 text-xs mt-2">
              {((data.users.applyForWriter / data.users.total) * 100).toFixed(
                1
              )}
              % of total users
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-blue-500/10 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-400 mb-4">
            Posts per Month
          </h3>
          <div className="space-y-4">
            {Object.entries(data.posts.perMonth).map(([month, count]) => (
              <div key={month} className="flex items-center">
                <p className="w-24 text-indigo-500 text-sm">{month}</p>
                <div className="flex-1 bg-gray-200 h-4 rounded-full">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{
                      width: `${
                        ((count as number) /
                          Math.max(...(Object.values(data.posts.perMonth) as number[]))) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
                <p className="w-12 text-right text-indigo-400 font-medium">
                  {count as number}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-500/10 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">
            Topics Distribution
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(data.posts.topics).map(([topic, count]) => (
              <div key={topic} className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center mr-3">
                  <span className="text-purple-800 text-xs font-bold">
                    {(((count as number) / data.posts.total) * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 font-medium">{topic}</p>
                  <p className="text-gray-300 text-sm">{count as number} posts</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-500/10 rounded-lg shadow p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-400 mb-4">
          User Status Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="p-3 bg-blue-100 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Active Users</p>
              <p className="text-2xl font-bold text-blue-600">
                {data.users.active}
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="p-3 bg-gray-100 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Inactive Users</p>
              <p className="text-2xl font-bold text-gray-600">
                {data.users.inactive}
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-red-50 rounded-lg">
            <div className="p-3 bg-red-100 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Blocked Users</p>
              <p className="text-2xl font-bold text-red-600">
                {data.users.blocked}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalysisHeader;
