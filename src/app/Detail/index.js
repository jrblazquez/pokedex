import React, { Component } from "react";

class Detail extends Component {
  componentDidMount() {
    const { id, name, getPokemon } = this.props;
    if (typeof name === "undefined") {
      getPokemon(id);
    }
  }

  render() {
    const { id, name } = this.props;
    console.log("render: ", id, name);
    return (
      <div>
        {id} {name}
      </div>
    );
  }
}

export default Detail;
