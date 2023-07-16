import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import FavoritePresenter from '../../src/scripts/utils/favorite-presenter';

const createFavoritePresenterWithRestaurant = async (restaurant) => {
  await FavoritePresenter.init({
    favoriteButtonContainer: document.querySelector('#favorite-button-container'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoritePresenterWithRestaurant };
