import { io } from "socket.io-client";

const socket = io("https://sentryaid-backend.onrender.com"); // http://localhost:5001
export default socket;
