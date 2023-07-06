import { sliderData } from "../../scripts/data";

import firstBg from "../../assets/images/slider-bg-1.png";
import secondBg from "../../assets/images/slider-bg-2.png";

import "./Concept.css";

const Item = (slide, index) => {
  const { title, list, href, img } = slide;
  const isFirstSlide = index === 0;

  return `
    <div class="concept__item" slider-active="${isFirstSlide}" slider-index="${index}">
      <div class="concept__item_text">
        <h2 class="concept__item_header header-1">${title}</h2>
        <ul class="concept__item_list">
          ${list.map((sl) => `<li class="text-2">${sl}</li>`).join("")}
        </ul>
        <div>
          <button 
            href="${href}" 
            class="concept__item_btn"
          >
            Перейти к каталогу
          </button>
        </div>
      </div>
      <div class="concept__item_image">
        <img src="${img}"/>
      </div>
      <img src="${firstBg}" alt="" class="concept__item_bg first"/>
      <img src="${secondBg}" alt="" class="concept__item_bg second"/>
    </div>
  `;
};

const List = () => {
  return `
    <div class="concept__list">
      ${sliderData.map((slide, index) => Item(slide, index)).join("")}
    </div>
  `;
};

export default function Concept() {
  const concept = document.querySelector(".concept");

  const changeSlide = () => {
    const lastindex = sliderData.length - 1;
    let index = 0;

    setInterval(() => {
      const activeSlider = document.querySelector(
        '.concept__item[slider-active="true"]'
      );

      index = activeSlider.getAttribute("slider-index");

      if (index == lastindex) {
        index = 0;
      } else {
        index++;
      }

      const nextSlide = document.querySelector(
        `.concept__item[slider-index="${index}"]`
      );

      activeSlider.setAttribute("slider-active", "false");
      nextSlide.setAttribute("slider-active", "true");
    }, 4000);
  };

  const asyncInner = new Promise((res, rej) => {
    concept.innerHTML = `
      ${List()}
    `;
    res();
  });

  asyncInner.then(() => changeSlide());
}
