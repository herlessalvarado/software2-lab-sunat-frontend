import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { api } from "../../services/axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../state/Auth/useAuth";

const defaultTheme = createTheme();

export default function Album() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [taxes, setTaxes] = React.useState([]);

  const getTaxes = async () => {
    try {
      const response = await api.get("/tax/get-taxes");

      if (response.status === 200) {
        console.log(response.data);
        setTaxes(response.data);
      } else {
        console.error("Error en las credenciales");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handleLogout = async () => {
    logout();
    navigate("/login");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            SUNAT API
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Impuestos
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={getTaxes}>
                Obtener impuestos
              </Button>
              <Button variant="outlined" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </Stack>
          </Container>
          {taxes.length > 0 && (
            <Container maxWidth="sm" sx={{ mt: 4 }}>
              {taxes.map((tax) => (
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Mes: {tax.month} <br /> Año: {tax.year} <br /> Impuesto: S/.{" "}
                  {tax.value["$numberDecimal"]}
                </Typography>
              ))}
            </Container>
          )}
        </Box>
      </main>
    </ThemeProvider>
  );
}
