
import ActiveBar from "./components /ActiveBar"
import MainSide from "./components /MainSide"
import Main from "./components /Main"

function App() {
 

  return (
      
              <div className="h-screen w-screen grid grid-cols-18 ">
                    <ActiveBar />
                    <MainSide/>
                    <Main/>
              </div>
  )
}

export default App
