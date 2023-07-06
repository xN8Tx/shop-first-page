import "./Navigation.css";

const profile = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6667 16.3333V18H3.33337V16.3333C3.33337 15.4493 3.68456 14.6014 4.30968 13.9763C4.93481 13.3512 5.78265 13 6.66671 13H13.3334C14.2174 13 15.0653 13.3512 15.6904 13.9763C16.3155 14.6014 16.6667 15.4493 16.6667 16.3333Z" stroke="#282828" stroke-width="1.43015" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0001 9.66667C11.8411 9.66667 13.3335 8.17428 13.3335 6.33333C13.3335 4.49238 11.8411 3 10.0001 3C8.15919 3 6.66681 4.49238 6.66681 6.33333C6.66681 8.17428 8.15919 9.66667 10.0001 9.66667Z" stroke="#282828" stroke-width="1.43015" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const likes = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8796 3.34757C16.4358 3.57803 16.9412 3.91583 17.3668 4.34166C17.7926 4.76729 18.1304 5.27265 18.3609 5.82887C18.5914 6.38508 18.71 6.98126 18.71 7.58333C18.71 8.1854 18.5914 8.78158 18.3609 9.33779C18.1304 9.89401 17.7926 10.3994 17.3668 10.825L16.4835 11.7083L10.0001 18.1917L3.51679 11.7083L2.63345 10.825C1.77371 9.96525 1.29071 8.79919 1.29071 7.58333C1.29071 6.36747 1.77371 5.20141 2.63345 4.34166C3.4932 3.48192 4.65926 2.99892 5.87512 2.99892C7.09098 2.99892 8.25704 3.48192 9.11679 4.34166L10.0001 5.225L10.8835 4.34166C11.3091 3.91583 11.8144 3.57803 12.3707 3.34757C12.9269 3.1171 13.523 2.99847 14.1251 2.99847C14.7272 2.99847 15.3234 3.1171 15.8796 3.34757Z" stroke="#282828" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const cart = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50039 18.8333C7.96062 18.8333 8.33372 18.4602 8.33372 18C8.33372 17.5397 7.96062 17.1666 7.50039 17.1666C7.04015 17.1666 6.66705 17.5397 6.66705 18C6.66705 18.4602 7.04015 18.8333 7.50039 18.8333Z" stroke="#282828" stroke-width="1.43015" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6669 18.8333C17.1271 18.8333 17.5002 18.4602 17.5002 18C17.5002 17.5397 17.1271 17.1666 16.6669 17.1666C16.2067 17.1666 15.8336 17.5397 15.8336 18C15.8336 18.4602 16.2067 18.8333 16.6669 18.8333Z" fill="#282828" stroke="#282828" stroke-width="1.43015" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.833679 1.33331H4.16701L6.40035 12.4916C6.47655 12.8753 6.68527 13.2199 6.98997 13.4652C7.29466 13.7105 7.67593 13.8408 8.06701 13.8333H16.167C16.5581 13.8408 16.9394 13.7105 17.2441 13.4652C17.5488 13.2199 17.7575 12.8753 17.8337 12.4916L19.167 5.49998H5.00035" stroke="#282828" stroke-width="1.43015" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default function Navigation() {
  const navigation = document.querySelector(".navigation");

  navigation.innerHTML = `
    <button class="navigation__button">
      <span class="navigation__button_burger"></span>
      Каталог
    </button>
    <form class="navigation__form">
      <input type="text" class="navigation__form_input" placeholder="Напишите, что вы ищете..."/>
      <button class="navigation__form_button">Найти</button>
    </form>
    <ul class="navigation__menu">
      <li class="navigation__menu_item text-3">
        ${profile}
        <span>
          Войти
        </span>
      </li>
      <li class="navigation__menu_item text-3">
        ${likes}
        <span>
          Избранное
        </span>
      </li>
      <li class="navigation__menu_item text-3">
        ${cart}
        <span>
          Корзина
        </span>
      </li>
    </ul>
  `;
}
