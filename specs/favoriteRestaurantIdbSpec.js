import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAll())
      .forEach(async (restaurant) => {
        await FavoriteRestaurantIdb.delete(restaurant.id);
      });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
