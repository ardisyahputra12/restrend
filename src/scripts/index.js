import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from "../public/data/DATA.json";


/**
 * Header
 */
const tabMenuElement = document.querySelector("#tab-menu");
const drawerElement = document.querySelector("#drawer");
tabMenuElement.addEventListener("click", ev => {
  drawerElement.classList.toggle("open");
  tabMenuElement.innerHTML = drawerElement.classList.contains("open")
    ? `<img src="./icons/close-icon.svg" alt="close menu" tabindex="0">`
    : `<img src="./icons/hamburger-icon.svg" alt="open menu" tabindex="0">`;
  ev.stopPropagation();
});


/**
 * Catalog List
 */
data.restaurants.forEach(restaurant => {
  const { name, description, pictureId, city, rating } = restaurant;
  document.querySelector(".catalog-list").innerHTML += `
    <article class="content">
        <div class="picture">
            <h3 tabindex="0">Kota. ${city}</h3>
            <img src="${pictureId}" alt="${name} in ${city}" tabindex="0">
        </div>
        <div class="desc">
            <h2 tabindex="0">${name}</h2>
            <h3 tabindex="0">Rating: ${rating}</h3>
            <p tabindex="0">${description.substring(0, 250)}...</p>
        </div>
    </article>
  `;
});