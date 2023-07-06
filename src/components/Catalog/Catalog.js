import { catalogData } from "../../scripts/data";

import Cart from "../../assets/svg/Cart.svg";
import Arrow from "../../assets/svg/Arrow.svg";

import "./Catalog.css";

const Item = (item) => {
  const { image, name, height, cost } = item;

  return `
    <div class="catalog__item">
      <img src="${image}" alt="" class="catalog__item_image"/>
      <div class="catalog__item_info">
        <p class="catalog__item_title text-1">
          ${name}
        </p>
        <div class="catalog__item_heights">
          <p class="text-2">Высота</p>
          <div class="catalog__item_height">
            ${height
              .map(
                (height) => `
              <p class="catalog__item_btn" data-active="false">
                ${height} cм.
              </p>`
              )
              .join("")}
          </div>
        </div>
        <div class="catalog__item_cost">
          <p>${cost} р.</p>
          <button>
            <img src="${Cart}" alt="" />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  `;
};

const List = () => {
  return `
    <div class="catalog__list">
      ${catalogData.map((item) => Item(item)).join("")}
    </div>
  `;
};

export default function Catalog() {
  const catalog = document.querySelector(".catalog");

  const filterClicks = () => {
    const items = document.querySelectorAll(".catalog__item");

    const onFilterClick = (item) => {
      item.addEventListener("click", (event) => {
        const targetClass = event.target.className;

        if (targetClass === "catalog__item_btn") {
          const allBtns = item.children[1].children[1].children[1].children;
          const btnStatus =
            event.target.getAttribute("data-active") === "true" ? true : false;

          Array.from(allBtns).forEach((btn) => {
            btn.setAttribute("data-active", "false");
          });
          event.target.setAttribute("data-active", `${!btnStatus}`);
        }
      });
    };

    items.forEach((item) => onFilterClick(item));
  };

  const arrowsClicks = () => {
    const container = document.querySelector(".catalog__container");
    const next = document.querySelector(".catalog__container_next");
    const prev = document.querySelector(".catalog__container_prev");

    const item = document.querySelector(".catalog__item").clientWidth;

    prev.addEventListener("click", () => {
      container.scrollBy({
        left: `-${item}`,
        behavior: "smooth",
      });
    });
    next.addEventListener("click", () => {
      container.scrollBy({
        left: item,
        behavior: "smooth",
      });
    });
  };

  const asyncInner = new Promise((res, rej) => {
    catalog.innerHTML = `
      <div class="catalog__title">
        <h3 class="header-1">Каталог</h3>
        <p class="text-1">/</p>
        <p class="text-1">Все товары</p>
      </div>
      <div class="catalog__container">
        <button class="catalog__container_prev">
          <img src="${Arrow}" alt=""/>
        </button>
        ${List()}
        <button class="catalog__container_next">
          <img src="${Arrow}" alt=""/>
        </button>
      </div>
    `;
    res();
  });

  asyncInner.then((res) => filterClicks()).then((res) => arrowsClicks());
}
