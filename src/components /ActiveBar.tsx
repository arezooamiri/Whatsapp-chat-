import ChannelSvg from "../assets/Channelsvg";
import ChatSvg from "../assets/Chatsvg";
import CommunitiesSvg from "../assets/CommunitiesSvg";
import ProfileSvg from "../assets/ProfileSvg";
import SettingSvg from "../assets/SettingSvg";
import StatusSvg from "../assets/StatusSvg";

export default function ActiveBar() {
  return (
    <div className="grid-cols-1 bg-gray-200 border-r border-gray-300 flex flex-col justify-between  items-center p-2">
      <div className=" flex flex-col gap-2 items-center">
        <button className=" hover:bg-gray-500 rounded-full p-2">
          <ChatSvg  className="fill-gray-500"/>
        </button>
        <button className=" hover:bg-gray-500 rounded-full p-2">
          <StatusSvg className="text-gray-500"  />
        </button>
        <button className=" hover:bg-gray-500 rounded-full p-2">
          <ChannelSvg className="text-gray-500"/>
        </button>
        <button className=" hover:bg-gray-500 rounded-full p-2">
          <CommunitiesSvg  className="text-gray-500"/>
        </button>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <button className=" hover:bg-gray-500 rounded-full p-2">
          <SettingSvg className="text-gray-500" />
        </button>
        <button className=" rounded-full p-2">
          <ProfileSvg/>
        </button>
      </div>
    </div>
  );
}
