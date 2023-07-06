import Telegram from "../assets/svg/Telegram.svg";
import Whatsapp from "../assets/svg/Whatsapp.svg";

import Trees from "../assets/images/trees.png";
import Ben1 from "../assets/images/ben-1.png";
import Ben2 from "../assets/images/ben-2.png";
import Ben3 from "../assets/images/ben-3.png";
import Ben4 from "../assets/images/ben-4.png";
import Ben5 from "../assets/images/ben-5.png";
import Catalog from "../assets/images/catalog.png";

const routes = [
  { name: "О нас", href: "#about" },
  { name: "Оплата и доставка", href: "#" },
  { name: "Товары из Китая", href: "#" },
  { name: "Статьи", href: "#" },
];

const media = [
  { name: "Telegram", img: Telegram, href: "#" },
  { name: "Whatsapp", img: Whatsapp, href: "#" },
];

const sliderData = [
  {
    title: "Сезон подготовки к новогодним продажам открыт!",
    list: [
      "Искусственные елки",
      "Гирлянды",
      "Игрушки и украшения",
      "Пиротехника",
      "Новогодние подарки",
    ],
    href: "#",
    img: Trees,
  },
  {
    title: "Сезон подготовки к новогодним продажам открыт!",
    list: [
      "Искусственные елки",
      "Гирлянды",
      "Игрушки и украшения",
      "Пиротехника",
      "Новогодние подарки",
    ],
    href: "#",
    img: Trees,
  },
  {
    title: "Сезон подготовки к новогодним продажам открыт!",
    list: [
      "Искусственные елки",
      "Гирлянды",
      "Игрушки и украшения",
      "Пиротехника",
      "Новогодние подарки",
    ],
    href: "#",
    img: Trees,
  },
  {
    title: "Сезон подготовки к новогодним продажам открыт!",
    list: [
      "Искусственные елки",
      "Гирлянды",
      "Игрушки и украшения",
      "Пиротехника",
      "Новогодние подарки",
    ],
    href: "#",
    img: Trees,
  },
];

const benefits = [
  {
    title: "Идеально для маркетплейсов",
    description: "Подробные описания, характеристики и фотографии товаров",
    image: Ben1,
  },
  {
    title: "Работаем официально",
    description:
      "Белая бухгалтерия: договора, закрывающие документы, ЭДО, оплата по счету или на сайте",
    image: Ben2,
  },
  {
    title: "Цены от производителей без наценок",
    description:
      "Недорогие, но качественные товары  + Прогрессирующая система скидок и бонусов",
    image: Ben3,
  },
  {
    title: "Быстрая обработка заказов. Доставка в РФ и СНГ",
    description:
      "Отгружаем заказ до любой транспортной компании. Отправка в течение 1-3 дней с момента получения оплаты",
    image: Ben4,
  },
  {
    title: "Собственный склад и офис",
    description:
      "Будем рады угостить ваc чашечкой кофе в нашем офисе с Екатеринбурге",
    image: Ben5,
  },
];

const catalogData = [
  {
    name: "Ель рожденственная с белыми кончиками",
    cost: "6000",
    image: Catalog,
    height: ["60", "90", "120", "150", "180", "210", "240"],
  },
  {
    name: "Ель рожденственная с белыми кончиками",
    cost: "6000",
    image: Catalog,
    height: ["60", "90", "120", "150", "180", "210", "240"],
  },
  {
    name: "Ель рожденственная с белыми кончиками",
    cost: "6000",
    image: Catalog,
    height: ["60", "90", "120", "150", "180", "210", "240"],
  },
  {
    name: "Ель рожденственная с белыми кончиками",
    cost: "6000",
    image: Catalog,
    height: ["60", "90", "120", "150", "180", "210", "240"],
  },
  {
    name: "Ель рожденственная с белыми кончиками",
    cost: "6000",
    image: Catalog,
    height: ["60", "90", "120", "150", "180", "210", "240"],
  },
  {
    name: "Ель рожденственная с белыми кончиками",
    cost: "6000",
    image: Catalog,
    height: ["60", "90", "120", "150", "180", "210", "240"],
  },
];

export { routes, media, sliderData, benefits, catalogData };
