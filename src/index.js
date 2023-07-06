import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Catalog from "./components/Catalog/Catalog";
import Concept from "./components/Concept/Concept";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

import "./styles/style.css";

window.addEventListener("DOMContentLoaded", () => {
  Header();
  Navigation();
  Concept();
  Benefits();
  Catalog();
  About();
  Footer();
});
