import RestaurantSource from '../../data/restaurant-source';
import { createCatalogItemTemplate, createContentFailedTemplate } from '../templates/template-creator';

class Home extends HTMLElement {
  connectedCallback() {
    this.render();
    this._insertData();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <picture>
          <source srcset="./images/hero-image-small.webp" type="image/webp" media="(max-width: 600px)">
          <source srcset="./images/hero-image-small.jpg" type="image/jpeg" media="(max-width: 600px)">
          <source srcset="./images/hero-image-large.webp" type="image/webp">
          <img class="hero-img lazyload" data-src="./images/hero-image-large.jpg" alt="Hero Element" tabindex="0">
        </picture>
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
    this._handleData(restaurants);
  }

  _handleData(restaurants) {
    const containerListRestaurant = this.querySelector('.container-list-restaurant');
    if (!restaurants.error) {
      restaurants.restaurants.forEach((restaurant) => {
        containerListRestaurant.innerHTML += createCatalogItemTemplate(restaurant);
      });
    } else {
      containerListRestaurant.innerHTML = createContentFailedTemplate();
    }
  }
}

customElements.define('home-page', Home);
const home = '<home-page></home-page>';
export default home;
