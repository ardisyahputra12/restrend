import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createCatalogItemTemplate, createContentEmptyTemplate } from '../templates/template-creator';

class Favorite extends HTMLElement {
  connectedCallback() {
    this.render();
    this._insertData();
  }

  render() {
    this.innerHTML = `
      <section>
        <h2 class="main-content__title favorite-title" tabindex="0">Favorite</h2>
        <p class="main-content__caption" tabindex="0">Your favorite restaurant is saved here</p>
        <article class="container-list-restaurant"></article>
      </section>
    `;
  }

  async _insertData() {
    const restaurants = await FavoriteRestaurantIdb.getAll();
    this._handleData(restaurants);
  }

  _handleData(restaurants) {
    const containerListRestaurant = this.querySelector('.container-list-restaurant');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        containerListRestaurant.innerHTML += createCatalogItemTemplate(restaurant);
      });
    } else {
      containerListRestaurant.innerHTML = createContentEmptyTemplate();
    }
  }
}

customElements.define('favorite-page', Favorite);
const favorite = '<favorite-page></favorite-page>';
export default favorite;
