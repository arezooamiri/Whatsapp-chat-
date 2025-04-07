import { useState } from "react";
import ChannelSvg from "../assets/Channelsvg";
import ChatSvg from "../assets/Chatsvg";
import CommunitiesSvg from "../assets/CommunitiesSvg";
import ProfileSvg from "../assets/ProfileSvg";
import SettingSvg from "../assets/SettingSvg";
import StatusSvg from "../assets/StatusSvg";

export default function ActiveBar() {
  const [activeItem,setActiveItem]=useState('' )
  const svgItem = [
    <ChatSvg className="text-gray-600" />,
    <StatusSvg className="text-gray-600" />,
    <ChannelSvg className="text-gray-600" />,
    <CommunitiesSvg className="text-gray-600" />
  ];
 
  return (
    <div className="grid-cols-1 bg-gray-200 border-r border-gray-300 flex flex-col justify-between  items-center p-2">
      <div className=" flex flex-col gap-2 items-center">
        {svgItem.map((svgItem, index) => (
          <button    key={index} className= {activeItem ? 'bg-gray-300 rounded-full p-2' :'p-2'}> {svgItem}</button>
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <button className=" hover:bg-gray-400 rounded-full p-2">
          <SettingSvg className="text-gray-600" />
        </button>
        <button className=" rounded-full p-2">
          <ProfileSvg />
        </button>
      </div>
    </div>
  );
}
