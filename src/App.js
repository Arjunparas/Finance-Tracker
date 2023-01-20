import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Revenue from "./pages/Revenue";

function App() {
 
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/expenses" element={<Expenses/>}/>
      <Route path="/revenue" element={<Revenue/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
