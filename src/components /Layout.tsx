import { ReactNode } from "react";
import ActiveBar from "./ActiveBar";
import MainSide from "./MainSide";
import Main from "./Main";


export default function Layout(props:{children:ReactNode}){
 

    return(

        <div className="h-screen w-screen grid grid-cols-12 ">
              <ActiveBar/>
              <MainSide/>
              <Main/>
        </div>
    )


     
}