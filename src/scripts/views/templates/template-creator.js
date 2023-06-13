import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (Restaurant) => `
<article class="post-item">
<img  loading="lazy" class="post-item_thumbnail"
     src="${
  Restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL_MEDIUM + Restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}"
     alt="${Restaurant.name}">
<div class="post-item_content">
  <p class="post-item_City">Kota ${Restaurant.city}</p>
  <p class="post-item_Rating">Rating: ${Restaurant.rating}</p>
  <h1 class="post-item_title2">Alamat</h1>
  <p class="post-item_description">${Restaurant.address}</p>
  <h1 class="post-item_title">${Restaurant.name}</h1>
  <p class="post-item_description">${Restaurant.description}</p>
  <h1 class="post-item_title2">Kategori</h1>
  <p class="post-item_description">${Restaurant.categories
    .map((categori) => `${categori.name}`)
    .join(', ')}</p>
  <h1 class="post-item_title2">Masakan</h1>
  <p class="post-item_description">${Restaurant.menus.foods
    .map((food) => `${food.name}`)
    .join(', ')}</p>
  <h1 class="post-item_title2">Minuman</h1>
  <p class="post-item_description">${Restaurant.menus.drinks
    .map((drink) => `${drink.name}`)
    .join(', ')}</p>
  <h1 class="post-item_title2">Review</h1>${Restaurant.customerReviews
    .map(
      (review) => `
  <h1 class="post-item_title2">User:${review.name}</h1>
  <p class="post-item_description">Tanggal:${review.date}</p>
  <p class="post-item_description">Comment:${review.review}</p>
    `,
    )
    .join('')}
</div>
</article>
`;

const createRestaurantItemTemplate = (Restaurant) => `
<article class="post-item">
<img loading="lazy" class="post-item_thumbnail"
     src="${
  Restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL_SMALL + Restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}"
     alt="${Restaurant.name}">
<div class="post-item_content">
  <p class="post-item_City">Kota ${Restaurant.city}</p>
  <p class="post-item_Rating">Rating: ${Restaurant.rating}</p>
  <h1 class="post-item_title"><a href="#/detail/${Restaurant.id}">${
  Restaurant.name
}</a></h1>
</div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
