interface CharacterInfoDTO {
  id: number;
  player: string;
  playBy: string;
  avatar: string;

  name: string;
  alias: string;
  group: string;
  age: string;
  personality: string;
  home: string;

  joinedAt: Date;
  posts: number;
}

export function parse(html: string): CharacterInfoDTO {
  const parser = new DOMParser();
  const doc: HTMLDocument = parser.parseFromString(html, "text/html");

  const character: any = {};
  character.id = getUserId(doc);
  character.name = doc.getElementsByClassName("profileheadername")[0].innerHTML;
  character.player = doc.getElementsByClassName("profileuserhead")[0].innerHTML;

  character.group = getDetail(doc, 3);
  character.age = getDetail(doc, 5);
  character.alias = getDetail(doc, 4);
  character.home = getDetail(doc, 6);
  character.personality = getDetail(doc, 7);
  character.playBy = getDetail(doc, 8);
  character.posts = getPostCount(doc);
  character.joinedAt = getJoinDate(doc);
  character.avatar = getAvatarLink(doc);

  console.log(character);

  return character;
}

function getUserId(doc: HTMLDocument): number | undefined {
  const querySelectorgroupElements = doc.querySelector(".profileuserinfo:nth-of-type(2) i a");
  const href = querySelectorgroupElements ? querySelectorgroupElements.getAttribute("href") : undefined;
  if (href) {
    return Number.parseInt(href.split("mid=")[1]);
  } else {
    return undefined;
  }
}

function getDetail(doc: HTMLDocument, index: number) {
  const querySelectorgroupElements = doc.querySelector(
    ".profilemaincont .profiledescriptioncont:nth-of-type(" + index + ") i"
  );
  return querySelectorgroupElements ? querySelectorgroupElements.innerHTML : undefined;
}

function getPostCount(doc: HTMLDocument) {
  const querySelectorgroupElements = doc.querySelector(".profileuserinfo:nth-of-type(2) i a");
  return querySelectorgroupElements ? Number.parseInt(querySelectorgroupElements.innerHTML) : undefined;
}

function getJoinDate(doc: HTMLDocument) {
  const querySelectorgroupElements = doc.querySelector(".profileuserinfo:nth-of-type(5) i");
  return querySelectorgroupElements ? new Date(querySelectorgroupElements.innerHTML) : undefined;
}

function getAvatarLink(doc: HTMLDocument) {
  const querySelectorgroupElements = doc.querySelector(".profileavatar");
  const style: string | null = querySelectorgroupElements ? querySelectorgroupElements.getAttribute("style") : "";
  if (!style) {
    return undefined;
  } else {
    const strings = style.split("'");
    if (strings.length !== 3) {
      return undefined;
    } else {
      return strings[1];
    }
  }
}
