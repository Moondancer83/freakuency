import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="headercontent">
        <div className="headerlogo">
          <a href="http://freakuency.jcink.net/index.php?act=idx">freakuency</a>
        </div>
        <div className="headerdesc">
          Sok ezer évvel ezelőtt a Földön katasztrófák sora borította fel a természet rendjét és formálta át a bolygót.
          Így születtek meg a mítoszok ezerarcú teremtményei, akik ma is köztünk élnek.
        </div>
      </div>
    </header>
  );
}
