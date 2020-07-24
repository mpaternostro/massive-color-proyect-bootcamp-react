import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";
import { PalettesContext } from "./contexts/PalettesContext";

function MiniPalette(props) {
  const [open, setOpen] = React.useState(false);
  const context = useContext(PalettesContext);
  const { classes, paletteName, id, emoji, colors, handleClick } = props;
  const miniColorBoxes = colors.map(({ name, color }) => (
    <div
      className={classes.miniColorBox}
      key={name}
      style={{
        backgroundColor: color,
      }}
    />
  ));

  const handleDelete = (evt) => {
    evt.stopPropagation();
    context.removePalette(id);
  };

  const handleClickOpen = (evt) => {
    evt.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Delete ${paletteName}?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Paper elevation={3}>
        <div className={classes.container} onClick={handleClick}>
          <IconButton className={classes.delete} onClick={handleClickOpen}>
            <DeleteIcon />
          </IconButton>
          <div className={classes.miniColorBoxes}>{miniColorBoxes}</div>
          <div className={classes.title}>
            <span>{paletteName}</span>
            <span>{emoji}</span>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(MiniPalette);
