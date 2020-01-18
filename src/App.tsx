import React from "react";
import "./App.css";
import logo from "./assets/octocat-white.png";
import Routes from "./routes";

export type AppProps = {};
export const App: React.FC<AppProps> = () => {
  return (
    <div className="container">
      <div className="colorcompletetop"></div>
      <div className="titlebar">
        <img src={logo} alt="" className="logo" />
        <h2 className="title">API - GitHub</h2>
      </div>
      <div className="colorcompletebot"></div>

      <div className="content">
        <Routes></Routes>
      </div>
    </div>
  );
};

export default App;
