import pizza from '../images/pizza.png';
import pizza2 from '../images/pizza2.jpeg';
import pizzaChicken from '../images/chicken-pizza.jpeg';
import healthyPizza from '../images/healthy-pizza.jpeg';
import burger from '../images/burger.jpeg';
import gyro from '../images/gyro.jpeg';
import sandwich from '../images/sandwich.jpeg';
import fries from '../images/fries.jpeg';


export function formatPrice(price) {
  return price.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: pizza,
    section: "Pizza",
    price: 1
  },
  {
    name: "Pepperoni Pizza",
    img: pizza2,
    section: "Pizza",
    price: 1.5
  },
  {
    name: "Chicken Pizza",
    img: pizzaChicken,
    section: "Pizza",
    price: 2
  },
  {
    img: healthyPizza,
    name: "Veggie Pizza",
    section: "Pizza",
    price: 2
  },
  {
    img: burger,
    name: "Burger",
    section: "Sandwich",
    price: 3
  },
  { 
    img: gyro, 
    name: "Gyro", 
    section: "Sandwich", 
    price: 4.5 
  },
  {
    img: sandwich,
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 6
  },
  {
    img: fries,
    name: "Fries",
    section: "Sides",
    price: 1
  },
  {
    price: 1,
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Root Beer"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

//  © created by react.school
