import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Productmockup } from "../utils/ProductMockup";
import ModalP from "./Modalp";

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

export const ProfuctTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [añadiendoProducto, setAñadiendoProducto] = useState(false);

  // Estados para los campos del modal
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProducts(Productmockup);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  if (loading) {
    return <CircularProgress />;
  }

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
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <div
        style={{
          marginLeft: "180px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Categoría</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.nombre}</TableCell>
                    <TableCell>${product.precio}</TableCell>
                    <TableCell>{product.categoria}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div
        style={{
          marginLeft: "180px",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button onClick={handleOpen}>Agregar Producto</Button>

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
      </div>
    </Box>
  );
};

export default ProfuctTable;
