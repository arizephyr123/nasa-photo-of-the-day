import React from "react";
import "./App.css";
import DataList from "./Components/DataFetched";
// import DropDown from "./Components/DropDown";

function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="satellite emoji">🛰</span> NASA Photo of the Day <span role="img" aria-label="rocket emoji">🚀</span>
      </h1>
      {/* <DropDown /> */}
      <div>
      <DataList />
      </div>
    </div>
  );
}

export default App;
