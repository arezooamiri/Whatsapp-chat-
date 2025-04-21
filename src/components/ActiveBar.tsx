import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChannelSvg from "../assets/Channelsvg";
import ChatSvg from "../assets/Chatsvg";
import CommunitiesSvg from "../assets/CommunitiesSvg";
import ProfileSvg from "../assets/ProfileSvg";
import SettingSvg from "../assets/SettingSvg";
import StatusSvg from "../assets/StatusSvg";
import { setActiveSection } from "../features/sideSection";
import { RootState } from "../features/store";

interface SvgItem {
  id: string;
  svg: ReactNode;
}

export default function ActiveBar() {
  const activeSection = useSelector(
    (state: RootState) => state.activeSection.value,
  );
  const dispatch = useDispatch();
  const svgItem: SvgItem[] = [
    { id: "Chats", svg: <ChatSvg className="text-gray-600" /> },
    { id: "Status", svg: <StatusSvg className="text-gray-600" /> },
    { id: "Channel", svg: <ChannelSvg className="text-gray-600" /> },
    { id: "Communities", svg: <CommunitiesSvg className="text-gray-600" /> },
  ];

  return (
    <div className="Activebar grid-cols-1 bg-gray-200 border-r border-gray-300 flex flex-col justify-between  items-center p-2">
      <div className=" flex flex-col gap-2 items-center">
        {svgItem.map((item, index) => (
          <button
            onClick={() => dispatch(setActiveSection(item.id))}
            key={index}
            className={
              activeSection
                ? "p-2  cursor-pointer"
                : "bg-gray-300 rounded-full p-2"
            }
          >
            {item.svg}
          </button>
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
