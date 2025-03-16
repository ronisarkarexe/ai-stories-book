import React from "react";
import { NotificationResponse } from "../../models/notification";

interface INotificationComponentProps {
  notifications: NotificationResponse[];
  showNotification: boolean;
  setShowNotification: (show: boolean) => void;
}

const NotificationComponent: React.FC<INotificationComponentProps> = ({
  notifications,
  showNotification,
  setShowNotification,
}) => {
  console.log("notifications bar", notifications);
  return (
    <div className="fixed inset-y-0 right-0 bg-slate-900 w-96 shadow-xl transform transition-transform duration-300 translate-x-0 z-50 ">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-3 border-b border-gray-600 sticky top-0 ">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl font-semibold text-gray-400">
              Notifications
            </h3>
          </div>
          <button
            className="text-gray-400 hover:text-gray-500 transition-colors cursor-pointer"
            onClick={() => setShowNotification(!showNotification)}
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-full p-3 mt-1 bg-blue-500/20 rounded flex">
                <div
                  aria-label="post icon"
                  role="img"
                  className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.30325 12.6667L1.33325 15V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V12C14.6666 12.1768 14.5963 12.3464 14.4713 12.4714C14.3463 12.5964 14.1767 12.6667 13.9999 12.6667H4.30325ZM5.33325 6.66667V8H10.6666V6.66667H5.33325Z"
                      fill="#4338CA"
                    />
                  </svg>
                </div>
                <div className="pl-3">
                  <p className="focus:outline-none text-sm leading-none">
                    <span className="text-indigo-700">Sarah</span> posted in the
                    thread:{" "}
                    <span className="text-indigo-700">Update gone wrong</span>
                  </p>
                  <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
                    2 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
