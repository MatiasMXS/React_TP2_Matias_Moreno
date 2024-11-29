import {
  Box,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Productmockup } from "../utils/ProductMockup";
import ModalP from "./Modalp";

export const ProfuctTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  // Estados para los campos del modal

  const handleOpen = () => setOpen(true);

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

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography id="modal-modal-title" variant="h3" component="h2">
        Lista de Productos
      </Typography>
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
              <TableHead sx={{ backgroundColor: "lightblue" }}>
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
        <Button variant="contained" onClick={handleOpen}>
          Agregar Producto
        </Button>

        <ModalP open={open} setOpen={setOpen} setProducts={setProducts} />
      </div>
    </Box>
  );
};

export default ProfuctTable;
