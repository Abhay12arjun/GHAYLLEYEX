import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import ConfigureDashboard from "./pages/ConfigureDashboard";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/configure" element={<ConfigureDashboard />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;