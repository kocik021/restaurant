import React, { Component } from "react";
import Header from "./pages/Header";
import MainMenu from "./pages/MainMenu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Meat from "./images/meat.png";
import Cake from "./images/cake.png";
import "./App.css";
import "./mobiles.css";
import Gallery from "./pages/Gallery";
import "./pages/landscape_mobiles.css";

class App extends Component {
  state = {
    name: "",
    gallery: [Cake, Meat],
    adressFirstLine: "1st street",
    adressSecondLine: "1ST AVE MANCHESTER",
    phoneNumber: "+44 888 999 000",
    email: "Fancyfood@restaurant.com",
    openDays: "Mon - Sun",
    openHours: "10:00 - 23:00",
    toggle: false
  };

  showMenu = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div className="App">
        <Header showMenu={this.showMenu} toggle={this.state.toggle} />
        <About />
        <MainMenu />
        <Gallery />
        <Contact
          adressFirst={this.state.adressFirstLine}
          adressSecond={this.state.adressSecondLine}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          openDays={this.state.openDays}
          openHours={this.state.openHours}
        />
      </div>
    );
  }
}

export default App;
