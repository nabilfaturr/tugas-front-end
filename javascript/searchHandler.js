import products from "./index.js";

const searchField = document.querySelector(".search-field");
const searchForm = document.querySelector(".search-form");


searchForm.onsubmit = (e) => {
  e.preventDefault();

  const searchTerm = searchField.value.toLowerCase();
  console.log(searchTerm);
  const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  sessionStorage.setItem("user-search", JSON.stringify(searchResults));

  console.log(searchResults);

  console.log(products);
  
  window.location.href = "searchItem.html";
};


export default searchField;