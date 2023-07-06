import arrow from "../../assets/svg/Arrow.svg";
import arrowSmall from "../../assets/svg/ArrowSmall.svg";
import telegram from "../../assets/svg/socialstg.svg";
import vk from "../../assets/svg/socials.svg";
import mir from "../../assets/images/mir.png";
import master from "../../assets/images/master-card.png";
import visa from "../../assets/images/visa.png";

import "./Footer.css";

const mock = [
  "О компании",
  "Блог",
  "Стать поставщиком",
  "Стать инвестором",
  "Контакты",
  "Пользовательское соглашение",
  "Политика конфиденциальности и оферта",
];

const Item = (text) => {
  return `
    <li class="footer__item_item text-3">${text}</li>
  `;
};

export default function Footer() {
  const footer = document.querySelector(".footer");

  const listsClicks = () => {
    const lists = document.querySelectorAll(".footer__item_list[data-active]");

    lists.forEach((list) => {
      list.addEventListener("click", (event) => {
        if (!event.target.classList.contains("text-1")) return null;
        const listStatus =
          list.getAttribute("data-active") === "true" ? true : false;

        list.setAttribute("data-active", `${!listStatus}`);
      });
    });
  };

  const scrollTo = () => {
    const scrollItem = document.querySelector(".footer__scroll");

    scrollItem.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const asyncInner = new Promise((resolve, reject) => {
    footer.innerHTML = `
      <div class="footer__row">
        <div class="footer__item">
          <ul class="footer__item_list" data-active="false">
            <li class="text-1">
              Компания
              <span>
                <img src="${arrowSmall}" alt="" />
              </span>
            </li>
            ${mock.map((text) => Item(text)).join("")}
          </ul>
        </div>
        <div class="footer__item">
          <ul class="footer__item_list" data-active="false">
            <li class="text-1">
              Покупателям
              <span>
                <img src="${arrowSmall}" alt="" />
              </span>
            </li>
            ${mock.map((text) => Item(text)).join("")}
          </ul>
        </div>
        <div class="footer__item"></div>
        <div class="footer__item">
          <form class="footer__form">
            <p class="text-2 footer__form_title">Следите за новинками и акциями</p>
            <input class="footer__form_input" type="text" placeholder="Адрес электронной почты"/>
            <button class="footer__form_btn">
              <img src="${arrow}" alt="" srcset="" />
            </button>
          </form>
          <p class="text-4 footer__item_text">Нажимая кнопку, я соглашаюсь на получение информации, принимаю условия политики конфиденциальности и пользовательского соглашения, даю согласие на обработку персональных данных </p>
          <div class="footer__item_social">
            <img src="${telegram}" alt="" />
            <img src="${vk}" alt="" />
          </div>
          <div class="footer__scroll">
            <img src="${arrow}" />
          </div>
        </div>
      </div>
      <div class="footer__rights">
        <p class="text-3">© 2022</p>
        <div class="footer__rights_list">
          <img src="${mir}" alt="" />
          <img src="${master}" alt="" />
          <img src="${visa}" alt="" />
        </div>
      </div>
    `;
    resolve();
  });

  asyncInner.then(() => listsClicks()).then(() => scrollTo());
}
