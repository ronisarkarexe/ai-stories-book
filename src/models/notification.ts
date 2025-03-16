interface NotificationPayload {
  userName?: string;
  title: string;
  message: string;
}

export interface INotification {
  type: "success" | "error" | "info" | "warning";
  data: NotificationPayload;
  status?: string;
  email: string;
}

export interface NotificationResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  status: string;
  type: string;
  data: NotificationPayload;
}
