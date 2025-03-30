import React from "react";
import { useGetUsersListQuery } from "../../../redux/apis/user.api";
import { User } from "../../../models/user";
import LoadingAnimation from "../../loading/loading.component";

const UserListComponent = () => {
  const { data: users, isLoading } = useGetUsersListQuery(undefined);
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div>
      <div className="w-full flex justify-between items-center mb-3 pl-3">
        <div></div>
        <div className="ml-3">
          <div className="w-full max-w-sm min-w-[200px] relative">
            <div className="relative">
              <input
                className="w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Search user..."
              />
              <button
                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center rounded "
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  className="w-8 h-8 text-slate-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <table className="w-full text-left table-auto min-w-max">
          <thead className="bg-slate-500 text-slate-200">
            <tr>
              <th className="p-4">
                <p className="text-sm font-normal leading-none">Name</p>
              </th>
              <th className="p-4">
                <p className="text-sm font-normal leading-none">Email</p>
              </th>
              <th className="p-4">
                <p className="text-sm font-normal leading-none">Status</p>
              </th>
              <th className="p-4">
                <p className="text-sm font-normal leading-none">
                  Subscription Type
                </p>
              </th>
              <th className="p-4">
                <p className="text-sm font-normal leading-none">
                  Apply For Writer
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {(users?.data ?? []).length > 0 ? (
              users?.data.map((user: User) => (
                <tr
                  key={user._id}
                  className="border-b border-slate-200 bg-slate-800"
                >
                  <td className="p-4 py-5">
                    <p className="block font-semibold text-sm text-slate-400">
                      {user.name}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">{user.email}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">{user.status}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {user.subscriptionType}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {user.isApplyForWriter ? "YES" : "NO"}
                    </p>
                  </td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListComponent;
