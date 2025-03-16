import React from "react";
import { NotificationResponse } from "../../models/notification";
import { getNotificationIcon } from "./notification.utils";

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
            {notifications.length > 0 ? (
              <div className="space-y-4">
                {notifications.map((notify) => {
                  const { icon, textColor } = getNotificationIcon(
                    notify.type
                  );
                  return (
                    <div
                      key={notify._id}
                      className={`w-full p-3 mt-1 bg-blue-500/20 rounded flex`}
                    >
                      <div
                        aria-label="post icon"
                        role="img"
                        className={`focus:outline-none w-8 h-8 border rounded-full border-gray-400 flex items-center justify-center`}
                      >
                        <i className={`fa-solid ${icon} ${textColor}`}></i>
                      </div>
                      <div className="pl-3">
                        <p
                          className={`focus:outline-none text-sm leading-none ${textColor}`}
                        >
                          {notify.data.title}
                        </p>
                        <p
                          className={`focus:outline-none text-sm leading-none ${textColor} mt-1`}
                        >
                          {notify.data.message}
                        </p>
                        <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <span className="text-gray-400">
                  No Notification available!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
