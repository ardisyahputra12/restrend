import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteInitiator from '../../utils/favorite-initiator';
import ReviewInitiator from '../../utils/review-initiator';
import {
  createCatalogDetailTemplate,
  createContentFailedTemplate,
  createDetailCategoryTemplate,
  createDetailMenuTemplate,
  createDetailReviewTemplate,
} from '../templates/template-creator';

class Detail extends HTMLElement {
  connectedCallback() {
    this.render();
    this._insertData();
  }

  render() {
    this.innerHTML = `
      <div class="container-detail-restaurant"></div>
      <div id="favorite-button-container"></div>
    `;
  }

  async _insertData() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetail(url.id);
    this._handleData(restaurant);
  }

  _handleData(restaurant) {
    const containerDetailRestaurant = this.querySelector('.container-detail-restaurant');
    if (!restaurant.error) {
      containerDetailRestaurant.innerHTML += createCatalogDetailTemplate(restaurant.restaurant);
      this._insertDataCategory(restaurant);
      this._insertDataMenuFood(restaurant);
      this._insertDataMenuDrink(restaurant);
      this._insertDataReview(restaurant);
      this._handleFavorite(restaurant);
      this._handleAddReview();
    } else {
      containerDetailRestaurant.innerHTML = createContentFailedTemplate();
    }
  }

  async _insertDataCategory(restaurant) {
    const restaurantDetailCategoriContent = this.querySelector('.restaurant-detail__categori__content');
    restaurant.restaurant.categories.forEach((category) => {
      restaurantDetailCategoriContent.innerHTML += createDetailCategoryTemplate(category.name);
    });
  }

  async _insertDataMenuFood(restaurant) {
    const restaurantDetailMenuFood = this.querySelector('.restaurant-detail__menu__food');
    restaurant.restaurant.menus.foods.forEach((food) => {
      restaurantDetailMenuFood.innerHTML += createDetailMenuTemplate(food.name);
    });
  }

  async _insertDataMenuDrink(restaurant) {
    const restaurantDetailMenuDrink = this.querySelector('.restaurant-detail__menu__drink');
    restaurant.restaurant.menus.drinks.forEach((drink) => {
      restaurantDetailMenuDrink.innerHTML += createDetailMenuTemplate(drink.name);
    });
  }

  async _insertDataReview(restaurant) {
    const restaurantDetailReviewContent = this.querySelector('.restaurant-detail__review__content');
    restaurant.restaurant.customerReviews.forEach((review) => {
      restaurantDetailReviewContent.innerHTML += createDetailReviewTemplate(review);
    });
  }

  async _handleFavorite(restaurant) {
    const favoriteButtonContainer = this.querySelector('#favorite-button-container');
    FavoriteInitiator.init({
      favoriteButtonContainer,
      restaurant,
    });
  }

  _handleAddReview() {
    ReviewInitiator.init({
      form: this.querySelector('.restaurant-detail__review__form'),
      id: this.querySelector('.restaurant-detail__review__form__id'),
      name: this.querySelector('.restaurant-detail__review__form__name'),
      review: this.querySelector('.restaurant-detail__review__form__content'),
    });
  }
}

customElements.define('detail-page', Detail);
const detail = '<detail-page></detail-page>';
export default detail;
