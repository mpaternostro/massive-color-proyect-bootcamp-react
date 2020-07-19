import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from "react-color";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  Button,
  TextField,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@material-ui/icons";
import DraggableColorBox from "./DraggableColorBox";

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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: "0",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  currentPalette: {
    height: "calc(100vh - 64px)",
    margin: "0",
    padding: "0",
  },
});

export class NewPalette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      color: "#fff",
      currentPalette: [
        { name: "red", color: "#FF0000" },
        { name: "blue", color: "#0048FF" },
      ],
      colorName: "",
      errorMessage: "",
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorNameChange = this.handleColorNameChange.bind(this);
  }

  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }

  handleChange(color) {
    this.setState({ color: color.hex });
  }

  checkInput() {
    function someEqualValue(palette, value, propName) {
      return palette.some(
        (color) =>
          color[propName] ===
          (value.toLowerCase() ? value.toLowerCase() : value)
      );
    }

    const { color, currentPalette, colorName } = this.state;

    if (!colorName) return "You must specify a color name.";
    if (
      someEqualValue(currentPalette, colorName, "name") &&
      someEqualValue(currentPalette, color, "color")
    )
      return "Color name and value must be unique.";
    if (someEqualValue(currentPalette, colorName, "name"))
      return "Color name must be unique.";
    if (someEqualValue(currentPalette, color, "color"))
      return "Color value must be unique.";
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const errorMessage = this.checkInput();
    if (errorMessage) return this.setState({ errorMessage });

    this.setState({
      currentPalette: [
        ...this.state.currentPalette,
        { name: this.state.colorName, color: this.state.color },
      ],
      color: "#fff",
      colorName: "",
      errorMessage: "",
    });
  }

  handleColorNameChange(evt) {
    this.setState({ colorName: evt.target.value, errorMessage: "" });
  }

  render() {
    const { classes } = this.props;
    const { open, color, currentPalette, colorName, errorMessage } = this.state;

    return (
      <div>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, { [classes.appBarShift]: open })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleDrawer}
              edge="start"
              className={clsx(classes.menuButton, { [classes.hide]: open })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design your Palette</Typography>
          <div>
            <Button variant="contained" color="secondary">
              Clear Palette
            </Button>
            <Button variant="contained" color="primary">
              Add Random Color
            </Button>
          </div>
          <ChromePicker
            color={color}
            onChange={this.handleChange}
            disableAlpha={true}
          />
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <TextField
              error={Boolean(errorMessage)}
              id="outlined-error-helper-text"
              label="Color name"
              helperText={errorMessage}
              variant="outlined"
              value={colorName}
              onChange={this.handleColorNameChange}
            />
            <Button
              variant="contained"
              // color="secondary"
              type="submit"
              style={{ backgroundColor: this.state.color, transition: "none" }}
            >
              Add Color
            </Button>
          </form>
          {/* <ValidatorForm onSubmit={this.handleSubmit}>
            <TextValidator
              label="Color Name"
              value={colorName}
              validators={["required, isColorNameTaken"]}
              errorMessages={[
                "This field is required",
                "Color name already used",
              ]}
              onChange={this.handleColorNameChange}
            />
            <Button
              variant="contained"
              // color="secondary"
              type="submit"
              style={{ backgroundColor: this.state.color, transition: "none" }}
            >
              Add Color
            </Button>
          </ValidatorForm> */}
        </Drawer>
        <main
          className={clsx(classes.content, { [classes.contentShift]: !open })}
        >
          <div className={classes.drawerHeader} />
          <ul className={classes.currentPalette}>
            {currentPalette.map((color) => (
              <DraggableColorBox {...color} />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(NewPalette);
