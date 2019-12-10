import React from "react";

import characterRnfoResource from "./character-info-resource";
import * as CharacterInfoParser from "./CharacterInfoParser";

import "./CharacterInfo.css";

export default function CharacterInfo() {
  const characterInfoDTO = CharacterInfoParser.parse(characterRnfoResource);
  return (
    <article className="characterInfo">
      <h2>
        {characterInfoDTO.name} (
        <a
          href={"http://freakuency.jcink.net/index.php?showuser=" + characterInfoDTO.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          #{characterInfoDTO.id})
        </a>
      </h2>
      <img alt="avatar" src={characterInfoDTO.avatar} style={{ display: "inline-block" }} />
      <div style={{ display: "inline-block" }}>
        <div className="table">
          {renderDetail("Csoport", characterInfoDTO.group)}
          {renderDetail("Kor", characterInfoDTO.age)}
          {renderDetail("Jellem", characterInfoDTO.personality)}
          {renderDetail("Alias", characterInfoDTO.alias)}
          {renderDetail("Lakhely", characterInfoDTO.home)}

          {renderDetail(<hr />, <hr />)}

          {renderDetail("Play By", characterInfoDTO.playBy)}
          {renderDetail("Csatlakozott", characterInfoDTO.joinedAt.toDateString())}
          {renderDetail("Hozzászólások", characterInfoDTO.posts + "")}
          {renderDetail("Játékos", characterInfoDTO.player)}
        </div>
      </div>
    </article>
  );
}

let renderDetail = function(label: React.ReactElement | string, value: React.ReactElement | string) {
  return (
    <div className="row">
      <div className="th">{label}</div>
      <div className="td">{value}</div>
    </div>
  );
};

// function fetch(id: number) {
//   fetch("http://freakuency.jcink.net/index.php?showuser=" + id + "")
//     .then(function(response) {
//       // When the page is loaded convert it to text
//       return response.text();
//     })
//     .then(parse)
//     .catch(function(err) {
//       console.log("Failed to fetch page: ", err);
//     });
// }
