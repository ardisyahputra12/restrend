import data from '../../../public/data/DATA.json';
import { createCatalogItemTemplate } from '../templates/template-creator';

class Home extends HTMLElement {
  connectedCallback() {
    this.render();
    this._insertData();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <img class="hero-img" src="./images/heros/hero-image.jpg" alt="Hero Element" tabindex="0">
        <p class="hero-content" tabindex="0">Restrend</p>
      </section>
      <section id="main-content">
        <h2 class="title" tabindex="0">Explore Restaurant</h2>
        <p class="caption" tabindex="0">Find your favorite restaurant and satisfy yourself here</p>
        <article class="catalog-list"></article>
      </section>
    `;
  }

  _insertData() {
    const catalogList = this.querySelector('.catalog-list');
    data.restaurants.forEach((restaurant) => {
      catalogList.innerHTML += createCatalogItemTemplate(restaurant);
    });
  }
}

customElements.define('home-page', Home);
const home = '<home-page></home-page>';
export default home;
