import React from "react";
import image from "./img/titanic.jpg";
import "./styles.css";

export default class App extends React.Component {
  state = {
    title: "Titanic",
    synopsis:
      "A poor artist and a rich young woman meet and fall in love on the fateful journey of the Titanic in 1912. Although she is engaged to the arrogant heir of a steel mill, the young woman defies her family and friends in her search for true love."
  };
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <img src={image} alt="img-Titanic" />
        <h2>{this.state.synopsis}</h2>
      </>
    );
  }
}
