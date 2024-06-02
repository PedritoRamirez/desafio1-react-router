import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { Routes,Route } from "react-router-dom";
import Contactos from "./components/Contactos";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Contactos" element={<Contactos/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>   
    </>
  );
}

export default App;
