import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Events from "./routes/Events";
import AdminDoador from "./routes/AdminDoador";
import AdminDoação from "./routes/AdminDoação";
import AdminTipoDeDoação from "./routes/AdminTipoDeDoação";
import AdminFotos from "./routes/AdminFotos";
import AdminUser from "./routes/AdminUser";
import Forms from "./routes/Forms";
import Admin from "./routes/Admin";

function App() {
  return (
    <Router basename="/casa-do-leo">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/galeria" element={<Events />} />
        <Route path="/formulario" element={<Forms />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/doador" element={<AdminDoador />} />
        <Route path="/admin/doacao" element={<AdminDoação />} />
        <Route path="/admin/tipo_de_doacao" element={<AdminTipoDeDoação />} />
        <Route path="/admin/fotos" element={<AdminFotos />} />
        <Route path="/admin/admin_user" element={<AdminUser />} />
      </Routes>
    </Router>
  );
}

export default App;
