import API_ENDPOINT from '../../global/api-endpoint';

const createCatalogItemTemplate = ({
  id, name, description, pictureId, city, rating,
}) => `
  <article class="restaurant-item">
    <div class="restaurant-item__header">
      <h3 class="restaurant-item__header__title" tabindex="0">Kota. ${city}</h3>
      <img
        class="restaurant-item__header__image"
        src="${API_ENDPOINT.IMAGE_MEDIUM(pictureId)}"
        alt="${name} in ${city}"
        tabindex="0"
      >
    </div>
    <div class="restaurant-item__body">
      <h2 tabindex="0"><a class="restaurant-item__body__title" href="/#/detail/${id}">${name}</a></h2>
      <h3 class="restaurant-item__body__subtitle" tabindex="0">Rating: ${rating}</h3>
      <p class="text-content" tabindex="0">${description.substring(0, 250)}...</p>
    </div>
  </article>
`;

const createCatalogDetailTemplate = ({
  id, name, description, city, address, pictureId, rating,
}) => `
  <article class="restaurant-detail">
    <div class="restaurant-detail__header">
      <h2 tabindex="0">${name}</h2>
      <p class="text-content" tabindex="0">Rating: ${rating}</p>
      <p class="text-content" tabindex="0">${address}, ${city}</p>
      <img
        class="restaurant-detail__header__image"
        src="${API_ENDPOINT.IMAGE_LARGE(pictureId)}"
        alt="${name} in ${city}"
        tabindex="0"
      >
    </div>
    <div class="restaurant-detail__categori">
      <h3 tabindex="0">Categori</h3>
      <div class="restaurant-detail__categori__content" tabindex="0"></div>
    </div>
    <div class="restaurant-detail__overview">
      <h3 tabindex="0">Overview</h3>
      <p class="restaurant-detail__overview__content text-content" tabindex="0">${description}</p>
    </div>
    <div class="restaurant-detail__menu">
      <h3 tabindex="0">Menu</h3>
      <div class="restaurant-detail__container">
        <div class="restaurant-detail__container-menu">
          <h4 tabindex="0">Food</h4>
          <ol class="restaurant-detail__menu__food" tabindex="0"></ol>
        </div>
        <div class="restaurant-detail__container-menu">
          <h4 tabindex="0">Drink</h4>
          <ol class="restaurant-detail__menu__drink" tabindex="0"></ol>
        </div>
      </div>
    </div>
    <div class="restaurant-detail__review">
      <h3 tabindex="0">Review</h3>
      <div class="restaurant-detail__review__content" tabindex="0"></div>
      <form class="restaurant-detail__review__form">
        <input class="restaurant-detail__review__form__id" disabled hidden value="${id}">
        <input type="text" class="restaurant-detail__review__form__name text-content" placeholder="Your name..." required tabindex="0">
        <textarea rows="4" class="restaurant-detail__review__form__content text-content" placeholder="Type review..." required tabindex="0"></textarea>
        <button type="submit" class="restaurant-detail__review__form__button text-content" tabindex="0">Send</button>
      </form>
    </div>
  </article>
`;

const createDetailCategoryTemplate = (name) => `
  <p class="restaurant-detail__categori__content__item text-content" tabindex="0">${name}</p>
`;

const createDetailMenuTemplate = (name) => `
  <li class="text-content" tabindex="0">${name}</li>
`;

const createDetailReviewTemplate = ({ name, review, date }) => `
  <div class="restaurant-detail__review__item">
    <h4 tabindex="0">${name}</h4>
    <p class="text-content" tabindex="0">${review}</p>
    <p class="restaurant-detail__review__item__date text-content">
      <time tabindex="0">${date}</time>
    </p>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this movie" id="favorite-button" class="favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this movie" id="favorite-button" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createCatalogItemTemplate,
  createCatalogDetailTemplate,
  createDetailCategoryTemplate,
  createDetailMenuTemplate,
  createDetailReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
