import { useState } from "react";
import PlusHeader from "../assets/PlusHeader";
import ToggleButton from "../assets/ToggleButton";
import ToggleHeader from "./ToggleHeader";

export default function ChatsHeader() {
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex flex-col gap-6 p-4  relative">
      <div className="flex   justify-between items-center">
        <h1 className="text-xl font-bold">Chats</h1>
        <div className="flex justify-center gap-6 ">
          <button className=" cursor-pointer">
            <PlusHeader className="text-gray-600" />
          </button>
          <button
            className=" cursor-pointer focus:bg-gray-200 focus:p-2 focus:rounded-full"
            onClick={handelClick}
          >
            <ToggleButton className="text-gray-600" />
          </button>
          {toggle && <ToggleHeader />}
        </div>
      </div>
    </div>
  );
}
