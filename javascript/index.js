let products = [
  {
    id: 1,
    name: "Nike Air Jordan 1 Mid",
    price: 1_290_000,
    quantity: 1,
    image: "assets/air-jordan-1.jpg",
  },
  {
    id: 2,
    name: "Nike Air Max 97",
    price: 1_210_000,
    quantity: 1,
    image: "assets/nike-airmax-97.jpg",
  },
  {
    id: 3,
    name: "Nike Air Jordan 5 Retro SE",
    price: 1_230_000,
    quantity: 1,
    image: "assets/jordan-retro-5-se.jpg",
  },
  {
    id: 4,
    name: "Vans oldskool low",
    price: 900_000,
    quantity: 1,
    image: "assets/vans.jpg",
  },
  {
    id: 5,
    name: "Adidas Ultra boost",
    price: 1_500_000,
    quantity: 1,
    image: "assets/ultra-boost.jpg",
  },
];

products = products.map((item) => {
  return {
    ...item,
    isAddToCart: false,
  };
});

console.log(products);

export default products;
