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

const defaultTheme = createTheme();

export default function Album() {
  const getTaxes = async () => {
    try {
      const response = await api.get("/tax/get-taxes");

      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error("Error en las credenciales");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
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
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={getTaxes}>
                Obtener impuestos
              </Button>
              <Button variant="outlined">Cerrar sesión</Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
