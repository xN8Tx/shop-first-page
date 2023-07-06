import aboutImg from "../../assets/images/about.png";

import "./About.css";

export default function About() {
  const about = document.querySelector(".about");

  about.innerHTML = `
    <div class="about__text">
      <h2 class="about__text_header header-1">О нас</h2>
      <img src="${aboutImg}" class="about__text_img"/>
      <p class="about__text_text text-1">
        Мы надежный поставщик для маркетплейсов. Мы рады предложить вам недорогие, но качественные товары с качественными описаниями и фотографиями. 
        У нас вы можете купить замечательные товары: искусственные елки, гирлянды, пиротехнику, электронику, одежду, обувь, аксессуары.Минимальная сумма заказа всего 10 000 руб. 
      </p>
    </div>
    <div class="about__image">
      <img src="${aboutImg}"/>
    </div>
  `;
}
