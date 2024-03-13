import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Public from "./pages/Public";
import Layout from "./pages/Layout";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Layout/>}>
        <Route index element={<Public/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
