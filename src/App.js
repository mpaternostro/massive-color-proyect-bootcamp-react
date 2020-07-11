import React, { Component } from "react";
import "./App.css";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  getPalette = (routeProps) => {
    const paletteData = seedColors.find(
      ({ id }) => id === routeProps.match.params.id
    );
    if (!paletteData) return <Redirect to="/page-not-found" />;
    return <Palette palette={generatePalette(paletteData)} />;
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PaletteList palettes={seedColors} />}
          />
          <Route exact path="/palette/:id" render={this.getPalette} />
          <Route
            path="/page-not-found"
            render={() => <h1>Error 404: Page Not Found</h1>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
