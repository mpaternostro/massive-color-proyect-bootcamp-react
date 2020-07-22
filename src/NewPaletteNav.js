import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const drawerWidth = 300;

const styles = (theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  Toolbar: {
    display: "flex",
    "& button": {
      margin: theme.spacing(1),
    },
  },
  ToolbarForm: {
    flex: "1",
    display: "flex",
  },
  goBack: {
    marginLeft: "auto",
    textDecoration: "none",
  },
});

export class NewPaletteNav extends Component {
  render() {
    const {
      toggleDrawer,
      open,
      handleAddPalette,
      handleChange,
      paletteName,
      paletteNameErrorMessage,
      classes,
    } = this.props;

    return (
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, { [classes.appBarShift]: open })}
      >
        <Toolbar className={classes.Toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            className={clsx(classes.menuButton, { [classes.hide]: open })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create a Palette
          </Typography>
          <form
            className={classes.ToolbarForm}
            onSubmit={(evt) => handleAddPalette(evt, paletteName)}
          >
            <TextField
              error={Boolean(paletteNameErrorMessage)}
              id="outlined-error-helper-text"
              label="Palette name"
              name="paletteName"
              helperText={paletteNameErrorMessage}
              variant="outlined"
              value={paletteName}
              onChange={handleChange}
            />
            <Link className={classes.goBack} to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </form>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NewPaletteNav);
