import React from "react";
import { TImeFormate } from "./../../Utilities/timeFormater";

const UserAlertMsg = ({ message }) => {
  const { title, msg, status, createdAt } = message;
  return (
    <div className="py-4 px-8 border border-pink-400 rounded-2xl flex justify-between items-center w-10/12 mx-auto">
      <div className="flex flex-col gap-2">
        <div>Title: {title}</div>
        <div>{msg}</div>
      </div>
      <div>{TImeFormate(new Date(createdAt))}</div>
    </div>
  );
};

export default UserAlertMsg;
