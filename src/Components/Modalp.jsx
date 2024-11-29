import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const ModalP = ({ open, setOpen, setProducts }) => {
  const handleClose = () => setOpen(false);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [añadiendoProducto, setAñadiendoProducto] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const CargarProducto = () => {
    if (nombre && precio && categoria) {
      setAñadiendoProducto(true);
      const nuevoProducto = {
        id: Date.now(), // Generar un ID único
        nombre,
        precio,
        categoria,
      };
      setTimeout(() => {
        setProducts((prevProducts) => [...prevProducts, nuevoProducto]);
        setAñadiendoProducto(false);
        handleClose();
      }, 1000);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Nuevo Producto
        </Typography>{" "}
        <br></br>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          onChange={(e) => setNombre(e.target.value)}
        />
        <br></br>
        <TextField
          id="outlined-basic"
          label="Precio"
          variant="outlined"
          onChange={(e) => setPrecio(e.target.value)}
        />
        <br></br>
        <TextField
          id="outlined-basic"
          label="categoria"
          variant="outlined"
          onChange={(e) => setCategoria(e.target.value)}
        />
        <br></br>
        <Button
          variant="contained"
          onClick={CargarProducto}
          disabled={añadiendoProducto}
        >
          {añadiendoProducto ? <CircularProgress size={24} /> : "Guardar"}
        </Button>
        <Button variant="text" onClick={handleClose}>
          Cancelar
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalP;
