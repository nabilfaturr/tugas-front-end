import searchField from "./searchHandler.js";
import renderItemHandler from "./renderItemHandler.js";

const searchResult = JSON.parse(sessionStorage.getItem("user-search"));
console.log(searchResult);

const itemField = document.querySelector(".item-field");

if (searchResult.length > 0) {
    renderItemHandler(searchResult, "any");
} else {
    const emptyMessage = document.createElement("h1");
    emptyMessage.innerHTML = "Yahhhh ngga ada :(";
    itemField.appendChild(emptyMessage);
}


