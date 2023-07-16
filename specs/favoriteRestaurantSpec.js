import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Favorite A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoritePresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="favorite this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoritePresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoritePresenterWithRestaurant({ id: 1 });
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.get(1);
    expect(restaurant)
      .toEqual({ id: 1 });
    FavoriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await TestFactories.createFavoritePresenterWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.put({ id: 1 });
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAll())
      .toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoritePresenterWithRestaurant({});
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAll())
      .toEqual([]);
  });
});
