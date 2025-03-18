import React, { useEffect, useState } from "react";
import { isLoggedIn, removeUserInfo } from "../../services/auth.service";
import { Link } from "react-router-dom";

interface INavListComponentProps {
  setShowNotification: (value: boolean) => void;
  newNotify: number;
}

const NavListComponent: React.FC<INavListComponentProps> = ({
  setShowNotification,
  newNotify,
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(isLoggedIn());

  const handelLogout = () => {
    removeUserInfo();
    setIsLogin(false);
  };

  useEffect(() => {
    setIsLogin(isLoggedIn());
  }, []);

  return (
    <div className="relative z-10 mx-auto max-w-8xl px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-16">
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
            {isLogin && (
              <a
                href="/dashboard"
                className="text-white hover:text-custom transition"
              >
                DASHBOARD
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className="!rounded-button p-2 text-gray-400 hover:text-gray-500"
            >
              <i className="fas fa-search"></i>
            </button>
            <div className="ml-3 relative">
              <div className="relative inline-flex">
                <button
                  type="button"
                  className="!rounded-button p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setShowNotification(true)}
                >
                  <i className="fa-solid fa-bell"></i>
                </button>
                <span className="absolute top-0.5 right-0.5 grid min-h-[18px] min-w-[18px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-700 text-xs text-white">
                  {newNotify}
                </span>
              </div>
            </div>
            <div className="ml-3 relative">
              {isLogin ? (
                <button
                  onClick={handelLogout}
                  className="!rounded-button bg-blue hover:bg-blue text-white px-6 py-2 font-medium transition-all cursor-pointer"
                >
                  LOGOUT
                </button>
              ) : (
                <Link to="/login">
                  <button className="!rounded-button bg-blue hover:bg-blue text-white px-6 py-2 font-medium transition-all cursor-pointer">
                    LOGIN
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavListComponent;
