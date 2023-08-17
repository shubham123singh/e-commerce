import { products } from "./db/product.js";

const productContainer = document.getElementById("products");

let Cart = [];

for (let product of products) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add(
    "card",
    "card-vertical",
    "d-flex",
    "direction-column",
    "relative",
    "shadow"
  );

  // image container
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card-image-container");

  const image = document.createElement("img");
  image.classList.add("card-image");
  image.setAttribute("src", product.img);
  image.setAttribute("alt", product.name);

  imageContainer.appendChild(image);

  // card detail container
  const cardDetailContainer = document.createElement("div");
  cardDetailContainer.classList.add("card-details");

  const brandContainer = document.createElement("div");
  brandContainer.classList.add("card-title");
  brandContainer.innerText = product.brand;

  cardDetailContainer.appendChild(brandContainer);

  //card description container

  const cardDescriptionContainer = document.createElement("div");
  cardDescriptionContainer.classList.add("card-description");
  cardDetailContainer.appendChild(cardDescriptionContainer);
  // product name
  const name = document.createElement("p");
  name.classList.add("card-des");
  name.innerText = product.name;

  // product price
  const price = document.createElement("p");
  price.classList.add("card-price", "d-flex","align-end", "gap-sm");
  price.innerText = `Rs ${product.newPrice}`;

  const oldprice = document.createElement("span");
  oldprice.classList.add("price-strike-through");
  oldprice.innerText = `Rs ${product.oldPrice}`;
  price.appendChild(oldprice);

  const discount = document.createElement("span");
  discount.classList.add("discount");
  discount.innerText = ` ${product.discount} % OFF`;
  price.appendChild(discount);

  cardDescriptionContainer.appendChild(price);

  // rating

  const ratings = document.createElement("p");
  ratings.classList.add("d-flex", "align-center");

  const rating = document.createElement("span");
  rating.innerText = product.rating;
  ratings.appendChild(rating);

  const star = document.createElement("span");
  star.classList.add("material-icons-outlined");
  star.innerText = "\u2605";
  ratings.appendChild(star);

  cardDescriptionContainer.appendChild(ratings);

  //button container
  const ctaButton = document.createElement("div");
  ctaButton.classList.add("cta-btn");
  const cartButton = document.createElement("button")
  cartButton.classList.add(
    "button",
    "btn-primary",
    "btn-icon",
    "cart-btn",
    "d-flex",
    "align-center",
    "justify-center",
    "gap",
    "cursor",
    "btn-margin"
  );
  cartButton.setAttribute("data-id", product._id);
  cartButton.innerText = "Add to cart";

  const cart = document.createElement("img");
  cart.classList.add("cart-image");
  cart.setAttribute("src", "https://uilight.netlify.app/assets/cart-white.png");
  cart.setAttribute("alt", "cart");
  
  cartButton.appendChild(cart);


  ctaButton.appendChild(cartButton);

  cardDetailContainer.appendChild(ctaButton);


  cardContainer.appendChild(imageContainer);
  cardContainer.appendChild(cardDetailContainer);

  // cardContainer.innerText = "product card";
  productContainer.appendChild(cardContainer);
}

// now we are going to add event to the buttom

productContainer.addEventListener("click", (event) =>{
  let productToAddToCart = products.filter(({_id}) => _id === event.target.dataset.id)
  Cart = [...Cart, ...productToAddToCart];
console.log(Cart);
});

