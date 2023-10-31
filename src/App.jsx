import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./routes/Home"
import AdminDoador from "./routes/AdminDoador";

function App() {
  return (
    <Router basename="/casa-do-leo">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin/doador" element={<AdminDoador/>}/>
      </Routes>
    </Router>
  )
}

export default App
