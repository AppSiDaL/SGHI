import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Piezas from "./pages/Piezas";
import Herramientas from "./pages/Herramientas";
import Ordenes from "./pages/Ordenes";
import Movimientos from "./pages/Movimientos";
import Menu from "./components/Menu/Index";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import piezasService from "./services/piezasService";
import herramientasService from "./services/herramientasService";
import ordenesService from "./services/ordenesService";
import ViewPiezas from "./components/Piezas/View";

export default function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      piezasService.setToken(user.token);
      herramientasService.setToken(user.token);
      ordenesService.setToken(user.token);
      if (location.pathname == "/login" || location.pathname == "/") {
        navigate("/");
      }
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <div style={{ margin: 0 }}>
      <Menu setUser={setUser} theme={theme} setTheme={setTheme} />
      <div style={{ height: 10 }} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/piezas" element={<Piezas theme={theme} />} />
        <Route path="/piezas/:id" element={<ViewPiezas />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/ordenes" element={<Ordenes />} />
        <Route path="/movimientos" element={<Movimientos />} />
      </Routes>
    </div>
  );
}
