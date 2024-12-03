import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    CssBaseline,
    Divider,
    Avatar,
    Box,
    Tooltip,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles"; // Herramientas para personalizar estilos
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    Dashboard,
    Movie,
    EventNote,
    Theaters,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { blue, blueGrey, grey } from "@mui/material/colors";

const drawerWidth = 240; // Define el ancho del Drawer cuando está expandido

// Estilo personalizado para el campo de búsqueda
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius, // Bordes redondeados
    backgroundColor: alpha(theme.palette.common.white, 0.15), // Color blanco semitransparente
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25), // Efecto hover
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto", // Se adapta al tamaño de la pantalla
    },
}));

// Contenedor del ícono de búsqueda
const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none", // Evita que el usuario pueda interactuar con el ícono
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

// Estilo personalizado para el campo de entrada
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit", // Color de texto heredado del tema
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0), // Espaciado interno
        paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Espacio para el ícono de búsqueda
        transition: theme.transitions.create("width"), // Animación suave en el ancho
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch", // Se expande en pantallas grandes
        },
    },
}));

const AdminNavbar: React.FC = () => {
    const [open, setOpen] = React.useState(false); // Estado para manejar el estado abierto/cerrado del Drawer

    // Alterna entre abrir y cerrar el Drawer
    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    // Lista de elementos del menú con texto, ícono y ruta de navegación
    const menuItems = [
        { text: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
        { text: "Movies", icon: <Movie />, path: "/admin/movies" },
        { text: "Reservations", icon: <EventNote />, path: "/admin/reservations" },
        { text: "Screenings", icon: <Theaters />, path: "/admin/screenings" },
    ];

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline /> {/* Asegura un estilo base consistente para Material UI */}

            {/* AppBar (barra superior) */}
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: blueGrey[900],
                    zIndex: (theme) => theme.zIndex.drawer + 1, // Coloca el AppBar por encima del Drawer
                }}
            >
                <Toolbar>
                    {/* Botón del menú hamburguesa */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Título del AppBar */}
                    <Typography variant="h5" noWrap sx={{ flexGrow: 1 }} >
                        CINEMATRON
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m280-620 80-80-80-80-80 80 80 80Zm200-40ZM160-400q-33 0-56.5-23.5T80-480v-360q0-33 23.5-56.5T160-920h640q33 0 56.5 23.5T880-840v360q0 33-23.5 56.5T800-400H671q6-20 8-40t0-40h121v-360H160v360h121q-2 20 0 40t8 40H160Zm500-280q25 0 42.5-17.5T720-740q0-25-17.5-42.5T660-800q-25 0-42.5 17.5T600-740q0 25 17.5 42.5T660-680ZM200-40v-84q0-35 19.5-65t51.5-45q49-23 102-34.5T480-280q54 0 107 11.5T689-234q32 15 51.5 45t19.5 65v84H200Zm80-80h400v-4q0-12-7-22t-18-15q-42-19-86-29t-89-10q-45 0-89 10t-86 29q-11 5-18 15t-7 22v4Zm200-200q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T540-460q0-25-17.5-42.5T480-520q-25 0-42.5 17.5T420-460q0 25 17.5 42.5T480-400Zm0-60Zm0 340Z"/></svg> */}
                    </Typography>

                    {/* Campo de búsqueda */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…" // Texto de marcador de posición
                            inputProps={{ "aria-label": "search" }} // Accesibilidad
                        />
                    </Search>
                </Toolbar>
            </AppBar>

            {/* Drawer (Menú lateral) */}
            <Drawer
                variant="permanent" // El Drawer siempre está presente (expandido o reducido)
                sx={{
                    width: open ? drawerWidth : 70, // Ancho del Drawer según su estado
                    flexShrink: 0, // Evita que el Drawer cambie de tamaño inesperadamente
                    "& .MuiDrawer-paper": {
                        width: open ? drawerWidth : 70, // Estilo del Drawer en estado abierto o reducido
                        boxSizing: "border-box", // Incluye bordes y padding en el ancho
                        transition: (theme) =>
                            theme.transitions.create("width", {
                                easing: theme.transitions.easing.sharp,
                                duration: theme.transitions.duration.enteringScreen,
                            }),
                    },
                }}
            >
                <Toolbar /> {/* Espaciador para alinear con el AppBar */}
                <Box
                    sx={{
                        overflow: "auto", // Permite desplazar si el contenido es más alto que el Drawer
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                >
                    {/* Lista de elementos del menú */}
                    <List>
                        {menuItems.map((item, index) => (
                            <Tooltip
                                title={!open ? item.text : ""} // Muestra texto del elemento si el Drawer está cerrado
                                placement="right"
                                key={index}
                                arrow
                            >
                                <ListItem
                                    component={Link}
                                    to={item.path} // Navegación
                                    sx={{
                                        justifyContent: open ? "flex-start" : "center", // Centra íconos cuando está reducido
                                        padding: open ? "8px 16px" : "8px", // Espaciado diferente según el estado
                                        "&:hover": { backgroundColor: blue[100] },
                                        color: grey[800],
                                    }}
                                >
                                    <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                                        {item.icon} {/* Ícono del elemento */}
                                    </ListItemIcon>
                                    {open && <ListItemText primary={item.text} />} {/* Texto del elemento solo si el Drawer está abierto */}
                                </ListItem>
                            </Tooltip>
                        ))}
                    </List>

                    <Divider />
                    {/* Información del usuario (Avatar, nombre y correo) */}
                    <Box
                        sx={{
                            marginTop: "auto", // Empuja hacia la parte inferior del Drawer
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: open ? 2 : 1,
                        }}
                    >
                        <Avatar sx={{ bgcolor: "orange", width: 50, height: 50 }}>IL</Avatar>
                        {open && (
                            <>
                                <Typography variant="body1" sx={{ mt: 1 }}>
                                    Ivan Labiaguerre
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    labiaguerreivan@gmail.com
                                </Typography>
                            </>
                        )}
                    </Box>
                </Box>
            </Drawer>

            {/* Contenido principal (lo que se muestra al lado del menú lateral) */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3, // Padding
                    marginLeft: open ? drawerWidth : 70, // Ajusta el margen según el ancho del Drawer
                    transition: (theme) =>
                        theme.transitions.create("margin", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                }}
            >
                <Toolbar /> {/* Espaciador para alinear con el AppBar */}

            </Box>
        </Box>
    );
};

export default AdminNavbar;
