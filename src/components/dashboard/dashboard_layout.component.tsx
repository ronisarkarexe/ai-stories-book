import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { menuItems } from "./dashboard.utils";
import logo from "../../assets/logo.png";

const DashboardLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();
  const currentPage = menuItems
    .filter(
      (item) =>
        location.pathname === item.path ||
        location.pathname.startsWith(item.path + "/")
    )
    .sort((a, b) => b.path.length - a.path.length)[0];
  const pageTitle = currentPage ? currentPage.name : "Dashboard";

  return (
    <div className="min-h-screen flex">
      <aside
        className={`bg-slate-800 transition-all duration-300 ${
          isSidebarCollapsed ? "w-20" : "w-64"
        } flex flex-col`}
      >
        <div className="p-3 bg-slate-800">
          <img src={logo} alt="Logo" className="h-8 mx-auto" />
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                location.pathname === item.path ||
                location.pathname.startsWith(item.path + "/")
                  ? "bg-blue-500/30 text-gray-400"
                  : "text-gray-400 hover:bg-blue-500/20"
              }`}
            >
              <i className={`${item.icon} w-5 h-5 mr-2`}></i>
              {!isSidebarCollapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
        <div className="p-4 bg-slate-800">
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 bg-blue-500/30 hover:bg-blue-500/20 rounded-md"
          >
            <i
              className={`fas ${
                isSidebarCollapsed ? "fa-chevron-right" : "fa-chevron-left"
              } mr-2`}
            ></i>
            {!isSidebarCollapsed && <span>Collapse Sidebar</span>}
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <div className="px-4 py-3 bg-slate-800">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-500">
              {pageTitle}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="ml-3 relative">
                  <div className="relative inline-flex">
                    <button
                      type="button"
                      className="!rounded-button p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      <i className="fa-solid fa-bell"></i>
                    </button>
                    <span className="absolute top-0.5 right-0.5 grid min-h-[18px] min-w-[18px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-700 text-xs text-white">
                      {5}
                    </span>
                  </div>
                </div>
                <div className="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      className="!rounded-button flex text-sm rounded-full focus:outline-none"
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://avatars.githubusercontent.com/u/76697055?v=4"
                        alt="profile"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
