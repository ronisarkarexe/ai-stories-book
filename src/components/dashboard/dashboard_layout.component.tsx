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
    <div className="bg-gray-50 min-h-screen flex">
      <aside
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          isSidebarCollapsed ? "w-20" : "w-64"
        } flex flex-col`}
      >
        <div className="p-3 border-b border-gray-200">
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
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <i className={`${item.icon} w-5 h-5 mr-2`}></i>
              {!isSidebarCollapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
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
        <div className="bg-white border-b border-gray-200 px-6 py-3">
          <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
        </div>
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
