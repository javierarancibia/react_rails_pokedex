import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PokeModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    onAddId(props.pokeId)
    
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Detalles
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>Animated React Modal</h2>
            {/* <p>
              {props.pokemonData.length > 0 ? (
               <h2> { pokemonData.id } </h2>
              ) : (
                <h1>Esperando info...</h1>
              )}
            </p> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PokeModal;
