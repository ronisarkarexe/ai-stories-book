import { io } from "socket.io-client";
import { getUserInfo } from "../services/auth.service";

export const socketIo = io("https://notification-socket-io.onrender.com", {
  transports: ["websocket", "polling"],
  query: { userEmail: getUserInfo()?.email },
  withCredentials: true,
});
