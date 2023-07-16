const assert = require('assert');

Feature('Unfavoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
  I.waitForElement('.content-empty__text');
  I.see('Favorite is empty!', '.content-empty__text');
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant-item');

  // favoriting
  I.amOnPage('/');
  I.seeElement('.main-content__title');

  I.waitForElement('.restaurant-item__body__title');
  I.seeElement('.restaurant-item__body__title');

  const firstRestaurant = locate('.restaurant-item__body__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#favorite-button');
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant-item');

  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-item__body__title');
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  // unfavoriting
  I.click(firstRestaurant);

  I.waitForElement('#favorite-button');
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
