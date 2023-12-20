import GameScene from "./component/elements/GameScene";
import SideBar from "./component/elements/SideBar";
import Inspector from "./component/elements/Inspector";
import { useKeyboard } from "./hook/useKeyboard";

// css import css/App.css
import "./css/App.css"
import { useEffect } from "react";


function App() { 

  const moveDirection = useKeyboard();
  useEffect((moveDirection) => {
    console.log(moveDirection);
    
  }, [moveDirection]);

  return (
    <>
    <div className = "topMenu">ここはトップのメニューです。コンポネント化予定</div>
    <div className = "mainDiv">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className = "sceneDiv">
          <GameScene />
        </div>
        <div className = "InspectorDiv">
          <Inspector />
        </div>
      </div>
      <div>
        ddd
      </div>

    </>
  );
}

export default App;
