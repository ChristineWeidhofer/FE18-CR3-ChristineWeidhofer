export const dishes = [
  {
    name: "Risotto",
    image: "risotto.jpg",
    descr: "Our typical northern Italian dish, creamy and rich in cheese",
    price: 13,
    avail: true
  },
  {
    name: "Pizza",
    image: "pizza.jpg",
    descr: "Our 'Pizza Margherita' is the most famous and simplest of pizzas - tomato sauce, mozzarella, and basil",
    price: 14,
    avail: false
  },
  {
    name: "Pasta",
    image: "pasta.jpg",
    descr: "Our 'Tagliatelle al Ragù', originally from Bologna, with long-cooked meat and tomato sauce",
    price: 13,
    avail: true
  },
  {
    name: "Gnocchi",
    image: "gnocchi.jpg",
    descr: "Our small rounds of potato dough with cheese, spinach, eggs and our variety of sauces",
    price: 13,
    avail: false
  },
  {
    name: "Focaccia",
    image: "focaccia.jpg",
    descr: "Our humble mixture of flour, water, yeast, and salt, with the final touch of olive oil",
    price: 7,
    avail: true
  },
  {
    name: "Gelato",
    image: "gelato.jpg",
    descr: "Our traditional dessert you can enjoy all year round - many flavors available",
    price: 7,
    avail: true
  }
];

export interface IDish {
  name: string;
  image: string;
  descr: string;
  price: number;
  avail: boolean;
}