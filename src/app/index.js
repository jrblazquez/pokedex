import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./List";
import Detail from "./Detail";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {
        byID: {
          1: {
            id: 1,
            name: "Bulbasaur"
          },
          2: {
            id: 2,
            name: "Ivysaur"
          },
          3: {
            id: 3,
            name: "Venusaur"
          }
        },
        all: [1, 2, 3]
      }
    };
  }

  getPokemon(id) {
    console.log(id);
    this.setState({
      ...this.state,
      pokemon: {
        ...this.state.pokemon,
        byID: {
          ...this.state.pokemon.byID,
          [id]: {
            id,
            name: "Charmander"
          }
        }
      }
    });
  }

  render() {
    const { pokemon } = this.state;
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={() => (
              <List
                items={this.state.pokemon.all.map(
                  id => this.state.pokemon.byID[id]
                )}
              />
            )}
          />
          <Route
            exact
            path={"/:id"}
            component={({ match }) => (
              <Detail
                id={match.params.id}
                {...pokemon.byID[match.params.id]}
                getPokemon={id => this.getPokemon(id)}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
