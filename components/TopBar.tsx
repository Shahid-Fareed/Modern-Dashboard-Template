"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";

function TopBar() {
  const [isFocused, setFocused] = useState(false);
  return (
    <div className="bg-[#F9FAFB] p-5 flex items-center justify-between">
      <div
        className={`flex items-center px-5 rounded-md ${
          isFocused ? "bg-white" : ""
        }`}
      >
        <CiSearch className="mr-2" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Keywords..."
          className="bg-transparent h-11 w-[300px] outline-none focus:bg-white"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
      <ul className="flex text-2xl gap-3 text-gray-300">
        <li>
          <IoMdNotifications />
        </li>
        <li>
          <AiFillQuestionCircle />
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
