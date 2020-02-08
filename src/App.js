import React from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Avatar1 from "./components/Avatar1";
import Avatar2 from "./components/Avatar2";
import Avatar3 from "./components/Avatar3";

const bartInfo = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2240-bart-simpson-skate.png",
  firstName: "Bart",
  lastName: "Simpson"
};

const homerInfo = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2249-homer-simpson-the-incredible-homer.png",
  firstName: "Homer",
  lastName: "Simpson"
};

const bartInfo1 = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png",
  firstName: "Bart",
  lastName: "Simpson"
};

const homerInfo1 = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png",
  firstName: "Homer",
  lastName: "Simpson"
};

const bartInfo2 = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2244-bart-simpson-nirvana-nevermind.png",
  firstName: "Bart",
  lastName: "Simpson"
};

const homerInfo2 = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
  firstName: "Homer",
  lastName: "Simpson"
};

const bartInfo3 = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png",
  firstName: "Bart",
  lastName: "Simpson",
  isImage: false
};

const homerInfo3 = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
  firstName: "Homer",
  lastName: "Simpson",
  isImage: false
};

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>Access Props</h1>
        <Avatar avatar={bartInfo} />
        <Avatar avatar={homerInfo} />
      </div>
      <hr/>
      <div>
        <h1>Spread Operator</h1>
        <Avatar1 {...bartInfo1} />
        <Avatar1 {...homerInfo1} />
      </div>
      <hr/>
      <div>
        <h1>Destructuting props</h1>
        <Avatar2 {...bartInfo2} />
        <Avatar2 {...homerInfo2} />
      </div>
      <hr/>
      <div>
        <h1>If Else props</h1>
        <Avatar3 {...bartInfo3} />
        <Avatar3 {...homerInfo3} />
      </div>
    </div>
  );
};

export default App;
