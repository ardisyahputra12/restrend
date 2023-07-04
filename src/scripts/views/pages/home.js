import RestaurantSource from '../../data/restaurant-source';
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
        <h2 class="main-content__title" tabindex="0">Explore Restaurant</h2>
        <p class="main-content__caption" tabindex="0">Find your favorite restaurant and satisfy yourself here</p>
        <article class="container-list-restaurant"></article>
      </section>
    `;
  }

  async _insertData() {
    const restaurants = await RestaurantSource.getList();
    const containerListRestaurant = this.querySelector('.container-list-restaurant');
    restaurants.forEach((restaurant) => {
      containerListRestaurant.innerHTML += createCatalogItemTemplate(restaurant);
    });
  }
}

customElements.define('home-page', Home);
const home = '<home-page></home-page>';
export default home;
