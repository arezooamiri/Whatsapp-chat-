import { Children, ReactNode } from "react";
import Chats from "./Chats";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import Status from "./Status";
import Channel from "./Channel";
import Communities from "./Communities";





export default function MainSide(){
    const activeSection = useSelector((state:RootState) => state.activeSection.value); 
    return (
         <div className="col-start-2 col-end-8 ">
               {activeSection === "Chats" && <Chats/>}
               {activeSection==="Status" &&<Status/>}
               {activeSection==="Channel" &&<Channel/>}
               {activeSection==="Communities" && <Communities/>}
         </div>
    )
}