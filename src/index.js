import "./styles.css";
import { hero } from "./home.js";
import { about } from "./about.js";
import { menu } from "./menu.js";

let content = document.querySelector("#content");

let homeButton = document.querySelector("#home");
let menuButton = document.querySelector("#menu");
let aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => updatePage(hero));
menuButton.addEventListener("click", () => updatePage(menu));
aboutButton.addEventListener("click", () => updatePage(about));

let updatePage = (page) => {
  // wipe content

  if (page == content.firstChild) {
    // do nothing
  } else {
    content.innerHTML = "";
    content.appendChild(page);
  }
};

content.appendChild(hero);
