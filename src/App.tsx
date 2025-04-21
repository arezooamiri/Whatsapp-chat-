import ActiveBar from "./components/ActiveBar";
import Main from "./components/Main";
import MainSide from "./components/MainSide";

function App() {
  return (
    <div className="h-screen w-screen grid grid-cols-18 ">
      <ActiveBar />
      <MainSide />
      <Main />
    </div>
  );
}

export default App;
