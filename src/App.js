import React, { Component } from "react";
import { getPaletteColors, getSingleColorShades } from "./colorHelpers";
import { Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PaletteList from "./PaletteList";
import NewPalette from "./NewPalette";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import Page from "./Page";
import { PalettesContext } from "./contexts/PalettesContext";

class App extends Component {
  static contextType = PalettesContext;
  getPalette = (routeProps) => {
    let paletteData;
    try {
      paletteData = getPaletteColors(
        this.context.palettes,
        routeProps.match.params.id
      );
    } catch (e) {
      return <Redirect to="/" />;
    }

    return (
      <Page>
        <Palette {...paletteData} />
      </Page>
    );
  };

  getSingleColorPalette = (routeProps) => {
    const { paletteID, colorID } = routeProps.match.params;
    const { palette, singleColorShades } = getSingleColorShades(
      this.context.palettes,
      paletteID,
      colorID
    );
    if (!singleColorShades.length) return <Redirect to="/" />;

    return (
      <Page>
        <SingleColorPalette
          {...palette}
          shades={singleColorShades}
          {...routeProps}
        />
      </Page>
    );
  };

  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={({ history }) => (
                      <Page>
                        <PaletteList history={history} />
                      </Page>
                    )}
                  />
                  <Route exact path="/palette/:id" render={this.getPalette} />
                  <Route
                    exact
                    path="/palette/:paletteID/:colorID"
                    render={this.getSingleColorPalette}
                  />
                  <Route
                    exact
                    path="/new-palette"
                    render={({ history }) => (
                      <Page>
                        <NewPalette history={history} />
                      </Page>
                    )}
                  />
                  <Route render={() => <Redirect to="/" />} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
