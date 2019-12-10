import React from "react";

import CharacterInfo from "../Character/CharacterInfo";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <div className="wrapper">
        <div className="search">
          Enter your user ID: <input name="userId" type="text" placeholder="User ID" value={213} readOnly={true} />
        </div>
        <CharacterInfo />
      </div>
    </main>
  );
}
