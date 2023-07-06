import { benefits } from "../../scripts/data";

import "./Benefits.css";

const Item = (benefit) => {
  const { title, description, image } = benefit;
  return `
    <div class="benefits__item">
      <h3 class="benefits__item_title">${title}</h3>
      <p class="benefits__item_text">${description}</p>
      <img src="${image}" class="benefits__item_img" />
    </div>
  `;
};

const List = () => `
    <div class="benefits__list">
      ${benefits.map((benefit) => Item(benefit)).join("")}
    </div>
  `;

export default function Benefits() {
  const benefit = document.querySelector(".benefits");

  benefit.innerHTML = `
    ${List()}
  `;
}
