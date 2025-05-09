import { SVGProps } from "react";

const ChatSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height="24"
      width="24"
      preserveAspectRatio="xMidYMid meet"
      {...props}
      fill="none"
    >
      <title>chats-outline</title>
      <path
        d="M4.8384 8.45501L5 8.70356V9V17.8333C5 18.7538 5.7462 19.5 6.6667 19.5H20.3333C21.2538 19.5 22 18.7538 22 17.8333V6.66667C22 5.74619 21.2538 5 20.3333 5H2.5927L4.8384 8.45501Z"
        stroke="currentColor"
        stroke-width="2"
      ></path>
      <line
        x1="10"
        y1="10"
        x2="17"
        y2="10"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      ></line>
      <line
        x1="10"
        y1="14"
        x2="15"
        y2="14"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      ></line>
    </svg>
  );
};
export default ChatSvg;
