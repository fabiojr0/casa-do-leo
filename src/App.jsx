import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./routes/Home"
import AdminDoador from "./routes/AdminDoador";
import Events from "./routes/Events";

function App() {
  return (
    <Router basename="/casa-do-leo">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin/doador" element={<AdminDoador/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </Router>
  )
}

export default App
