const createCatalogItemTemplate = ({
  name, description, pictureId, city, rating,
}) => `
  <article class="content">
      <div class="picture">
          <h3 tabindex="0">Kota. ${city}</h3>
          <img src="${pictureId}" alt="${name} in ${city}" tabindex="0">
      </div>
      <div class="desc">
          <h2 tabindex="0">${name}</h2>
          <h3 tabindex="0">Rating: ${rating}</h3>
          <p tabindex="0">${description.substring(0, 250)}...</p>
      </div>
  </article>
`;

export {
  createCatalogItemTemplate,
};
