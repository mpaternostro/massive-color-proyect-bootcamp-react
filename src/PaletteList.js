import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { PalettesContext } from "./contexts/PalettesContext";

export class PaletteList extends Component {
  static contextType = PalettesContext;
  constructor(props) {
    super(props);

    this.state = {
      openDeleteDialog: false,
      deletePaletteName: "",
      deletePaletteID: "",
    };
    this.goToPalette = this.goToPalette.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  goToPalette(paletteID) {
    this.props.history.push(`/palette/${paletteID}`);
  }

  handleDelete(evt) {
    const { deletePaletteID } = this.state;
    evt.stopPropagation();
    this.context.removePalette(deletePaletteID);
    this.handleCloseDialog();
  }

  handleOpenDialog(paletteName, paletteID) {
    this.setState({
      openDeleteDialog: true,
      deletePaletteName: paletteName,
      deletePaletteID: paletteID,
    });
  }

  handleCloseDialog() {
    this.setState({
      openDeleteDialog: false,
    });
  }

  render() {
    const { classes } = this.props;
    const { openDeleteDialog, deletePaletteName } = this.state;
    const miniPalettes = this.context.palettes.map((palette) => {
      return (
        <CSSTransition key={palette.id} timeout={500} classNames="fade">
          <MiniPalette
            key={palette.id}
            {...palette}
            goToPalette={this.goToPalette}
            handleOpenDialog={this.handleOpenDialog}
          />
        </CSSTransition>
      );
    });

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.navigator}>
            <h2 className={classes.title}>React Color Picker</h2>
            <Link to="/new-palette" className={classes.link}>
              Create Palette
            </Link>
          </nav>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <TransitionGroup component={null}>{miniPalettes}</TransitionGroup>
          </Grid>
        </div>
        <Dialog
          open={openDeleteDialog}
          onClose={this.handleCloseDialog}
          aria-labelledby="alert-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">
            Delete {deletePaletteName}?
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
