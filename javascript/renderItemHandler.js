import products from "./index.js";

const itemField = document.querySelector(".item-field");

const cacheData = sessionStorage.getItem("cache-cart"); 
const cacheCart = cacheData ? JSON.parse(cacheData) : [];

// Create custom alert element
const alert = document.createElement("div");
alert.className = "custom-alert";
alert.textContent = "Checkout yuk!";
document.body.appendChild(alert);

function renderItemHandler(items, forWhat) {
  function addToCard(id) {
    const product = products.find((item) => item.id === id);
    if (product) {
      product.isAddToCart = true;
      const existingProduct = cacheCart.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        product.quantity = 1;
        cacheCart.push(product);
      }

      console.log(cacheCart);
      sessionStorage.setItem("cache-cart", JSON.stringify(cacheCart));

      // Show custom alert
      alert.classList.add("show");
      setTimeout(() => {
        alert.classList.remove("show");
      }, 2000);
    }
  }

  const itemsToRender = forWhat === "home" ? items.slice(0, 3) : items;
  itemsToRender.forEach((item) => {
    const cardItem = document.createElement("div");
    cardItem.className = "card-item";

    cardItem.innerHTML = `
      <main class="card-main">
        <img src="${item.image}" alt="" />
      </main>
      <footer class="card-footer">
        <div class="left">
          <h4>${item.name}</h4>
          <p>${item.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}</p>
        </div>
        <div class="right">
          <button class="cart-button">
            <span class="cart-button-plus">+</span>
          </button>
        </div>
      </footer>
    `;

    console.log(cardItem);

    itemField.append(cardItem);

    const cartButton = cardItem.querySelector(".cart-button");
    cartButton.addEventListener("click", () => addToCard(item.id));
  });
}

if (window.location.pathname.endsWith("home.html")) {
  renderItemHandler(products, "home");
}

export default renderItemHandler;
