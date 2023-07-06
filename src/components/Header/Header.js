import { routes, media } from "../../scripts/data";

import "./Header.css";

const RoutesItems = (route) => {
  const { href, name } = route;
  return `
      <li>
        <a href="${href}" class="header__list_item text-3">
          ${name}
        </a>
      </li>`;
};

const MediaItems = (media) => {
  const { href, img } = media;
  return `
      <li>
        <a href="${href}" class="header__list_item">
          <img src="${img}" alt="" />
        </a>
      </li>`;
};

export default function Header() {
  const header = document.querySelector(".header");

  header.innerHTML = `
  <ul class="header__list">
    ${routes.map((route) => RoutesItems(route)).join("")}
  </ul>
  <ul class="header__list header__media">
    ${media.map((media) => MediaItems(media)).join("")}
  </ul> 
`;
}
