import React from "react";

interface INavListComponentProps {
  setShowNotification: (value: boolean) => void;
}

const NavListComponent: React.FC<INavListComponentProps> = ({
  setShowNotification,
}) => {
  return (
    <div className="relative z-10 mx-auto max-w-8xl px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-16">
          <a href="/" className="flex items-center space-x-2">
            <img src="" alt="Logo" className="h-8 w-auto" />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-custom transition">
              HOME
            </a>
            <a
              href="/http_codes"
              className="text-white hover:text-custom transition"
            >
              EXPLORE
            </a>
            <a
              href="/repos"
              className="text-white hover:text-custom transition"
            >
              CATEGORIES
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* <button className="!rounded-button bg-blue hover:bg-blue text-white px-6 py-2 font-medium transition-all">
            JOIN
          </button> */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className="!rounded-button p-2 text-gray-400 hover:text-gray-500"
            >
              <i className="fas fa-search"></i>
            </button>
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="!rounded-button p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setShowNotification(true)}
                >
                  <i className="fa-solid fa-bell"></i>
                </button>
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
  );
};

export default NavListComponent;
