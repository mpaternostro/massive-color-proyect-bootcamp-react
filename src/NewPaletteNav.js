import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Palette as PaletteIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import NewPaletteDataForm from "./NewPaletteDataForm";
import styles from "./styles/NewPaletteNavStyles";

export class NewPaletteNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ openDialog: true });
  }

  handleClose() {
    this.setState({ openDialog: false });
  }

  render() {
    const { toggleDrawer, open, handleAddPalette, classes } = this.props;
    const { openDialog } = this.state;

    return (
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, { [classes.appBarShift]: open })}
      >
        <Toolbar className={classes.Toolbar}>
          <div className={classes.left}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              className={clsx(classes.paletteButton, { [classes.hide]: open })}
            >
              <PaletteIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} noWrap>
              Create a Palette
            </Typography>
          </div>
          <div className={classes.buttons}>
            <Link to="/" className={classes.goBack}>
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClickOpen}
            >
              Save
            </Button>
          </div>
        </Toolbar>
        {openDialog && (
          <NewPaletteDataForm
            handleClose={this.handleClose}
            handleAddPalette={handleAddPalette}
          />
        )}
      </AppBar>
    );
  }
}

export default withStyles(styles)(NewPaletteNav);
