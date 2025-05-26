const links = ["Home", "About", "Contact", "Products"];

const header = document.querySelector("header");

const nav = document.createElement("nav");

const menu = links
  .map((link) => {
    return `<a>${link}</a>`;
  })
  .join("");
nav.innerHTML = menu;
header?.append(nav);
