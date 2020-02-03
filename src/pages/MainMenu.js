import React, { Component } from "react";
import Soups from "./Soups";
import MainDishes from "./MainDishes";
import Drinks from "./Drinks";
import Desserts from "./Desserts";

class MainMenu extends Component {
  state = {
    name: "",
    soups: [
      {
        key: 1,
        soupName: "Cream of corn soup, popcorn, smoked vegetables oil",

        price: "5.00$"
      },
      {
        key: 2,
        soupName:
          "Fish soup with seafood, tomatoes, shallot, snow peas, parsley",

        price: "8.00$"
      },
      {
        key: 3,
        soupName:
          "Risotto “Cacio e pepe” with three types of Parmesan, spring leek oil, leek confit",

        price: "7.00$"
      },
      {
        key: 4,
        soupName: "Pappardelle, olive oil, anchovies, wild broccoli Friarielli",

        price: "6.00$"
      }
    ],
    maindishes: [
      {
        key: 5,
        dishName:
          "Glazed black pork belly with peanuts, aubergine, young potatoes",

        price: "15.00$"
      },
      {
        key: 6,
        dishName:
          "Braised beef cheek, cauliflower mousse with almonds, gremolata",

        price: "17.00$"
      },
      {
        key: 7,
        dishName:
          "Duck breast, beetroot open ravioli, green peas with mint, raisins, pine nuts, clove sauce",

        price: "18.00$"
      },
      {
        key: 8,
        dishName:
          "My Wellington: Polish beef tenderloin, puff pastry & mushroom filling, asparagus, demi-glace sauce",

        price: "25.00$"
      }
    ],
    desserts: [
      {
        key: 9,
        dessertName:
          "Chocolate ravioli, ginger, Mascarpone, fresh strawberries with lemon balm",

        price: "6.00$"
      },
      {
        key: 10,
        dessertName:
          "Philadelphia cheesecake, rolled oats, hot white chocolate with Prosecco",

        price: "10.00$"
      },
      {
        key: 11,
        dessertName: "Tarte Tatin with Matcha ice cream",

        price: "9.00$"
      },
      {
        key: 12,
        dessertName:
          "Green celery with rum cream, crème fraiche, Muscovado sugar",

        price: "11.00$"
      }
    ]
  };
  render() {
    const soups = this.state.soups.map(soup => (
      <Soups
        key={soup.key}
        name={soup.soupName}
        price={soup.price}
        ingridients={soup.ingridients}
      />
    ));
    const maindishes = this.state.maindishes.map(maindish => (
      <MainDishes
        key={maindish.key}
        name={maindish.dishName}
        isVegan={maindish.isVegan}
        price={maindish.price}
        ingridients={maindish.ingridients}
      />
    ));
    const desserts = this.state.desserts.map(dessert => (
      <Desserts
        key={dessert.key}
        name={dessert.dessertName}
        isVegan={dessert.isVegan}
        price={dessert.price}
        ingridients={dessert.ingridients}
      />
    ));
    return (
      <>
        <section className="menu-wrapper">
          <h1 className="tag" id="soups">
            First courses
          </h1>
          <div className="soups">{soups}</div>
          <h1 className="tag" id="main">
            Main courses
          </h1>
          <div className="main-dishes">{maindishes}</div>
          <h1 className="tag" id="desserts">
            Desserts
          </h1>
          <div className="desserts-courses">{desserts}</div>
          <Drinks />
        </section>
      </>
    );
  }
}

export default MainMenu;
