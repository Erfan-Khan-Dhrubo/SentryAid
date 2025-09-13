import { io } from "socket.io-client";

const socket = io("https://sentryaid-backend.onrender.com"); // https://sentryaid-backend.onrender.com
export default socket;
