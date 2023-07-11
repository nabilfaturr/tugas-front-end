// const cacheCart = JSON.parse(sessionStorage.getItem("cache-cart"));
// const cartField = document.querySelector(".cart-field");

// console.log(cacheCart);

// function renderCart(items) {
//   if (items.length > 0) {
//     items.forEach((item) => {
//       const cardAtCart = document.createElement("div");
//       cardAtCart.className = "card-cart";
//       cardAtCart.innerHTML = `
//         <div class="cart-img">
//           <img src="${item.image}">
//         </div>
//         <div class="cart-main">
//           <h5>${item.name}</h5>
//           <div class="quantity">
//             <button class="decrement">-</button>
//             <p>${item.quantity}</p>
//             <button class="increment">+</button>
//           </div>
//         </div>
//         <div class="cart-price">
//           <p>${item.price.toLocaleString("id-ID", {
//             style: "currency",
//             currency: "IDR",
//             minimumFractionDigits: 0,
//           })}</p>
//         </div>
//       `;
//       cartField.appendChild(cardAtCart);

//       const incrementButton = cardAtCart.querySelector(".increment");
//       const decrementButton = cardAtCart.querySelector(".decrement");
//       const quantityElement = cardAtCart.querySelector(".quantity p");
//       const priceElement = cardAtCart.querySelector(".cart-price p");

//       incrementButton.addEventListener("click", () => {
//         item.quantity++;
//         quantityElement.textContent = item.quantity;
//         priceElement.textContent = item.price * item.quantity;
//         console.log(cacheCart);
//       });

//       decrementButton.addEventListener("click", () => {
//         if (item.quantity > 0) {
//           item.quantity--;
//           quantityElement.textContent = item.quantity;
//           priceElement.textContent = item.price * item.quantity;
//         }
//         if (item.quantity === 0) {
//           items.splice(index, 1);
//           delete cacheCart[item.id];
//           cardAtCart.remove();
//           sessionStorage.setItem("cache-cart", JSON.stringify(cacheCart));
//         }
//         console.log(cacheCart);
//       });
//     });
//   } else {
//     cartField.innerHTML = `<h1 class="cart-empty">Yah masih kosongg ni</h1>`;
//   }
// }

// renderCart(cacheCart);

// console.log(cacheCart);

// 1.2v

const cacheCart = JSON.parse(sessionStorage.getItem("cache-cart"));
const cartField = document.querySelector(".cart-field");

console.log(cacheCart);

function renderCart(items) {
  if (items.length > 0) {
    items.forEach((item, index) => {
      const cardAtCart = document.createElement("div");
      cardAtCart.className = "card-cart";
      cardAtCart.innerHTML = `
        <div class="cart-img">
          <img src="${item.image}">
        </div>
        <div class="cart-main">
          <h5>${item.name}</h5>
          <div class="quantity">
            <button class="decrement">-</button>
            <p>${item.quantity}</p>
            <button class="increment">+</button>
          </div>
        </div>
        <div class="cart-price">
          <p>${item.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}</p>
        </div>
      `;
      cartField.appendChild(cardAtCart);

      const incrementButton = cardAtCart.querySelector(".increment");
      const decrementButton = cardAtCart.querySelector(".decrement");
      const quantityElement = cardAtCart.querySelector(".quantity p");
      const priceElement = cardAtCart.querySelector(".cart-price p");

      incrementButton.addEventListener("click", () => {
        item.quantity++;
        quantityElement.textContent = item.quantity;
        priceElement.textContent = (item.price * item.quantity).toLocaleString(
          "id-ID",
          {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }
        );
        console.log(cacheCart);
      });

      decrementButton.addEventListener("click", () => {
        if (item.quantity > 0) {
          item.quantity--;
          quantityElement.textContent = item.quantity;
          priceElement.textContent = (
            item.price * item.quantity
          ).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          });
        }
        if (item.quantity === 0) {
          const itemIndex = cacheCart.findIndex(
            (cartItem) => cartItem.id === item.id
          );
          if (itemIndex !== -1) {
            cacheCart.splice(itemIndex, 1);
          }
          cardAtCart.remove();
          sessionStorage.setItem("cache-cart", JSON.stringify(cacheCart));
        }
        console.log(cacheCart);
      });
    });
  } else {
    cartField.innerHTML = `<h1 class="cart-empty">Yah masih kosongg ni</h1>`;
  }
}

renderCart(cacheCart);

console.log(cacheCart);
