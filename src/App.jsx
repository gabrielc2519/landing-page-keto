import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Keto from "./pages/Keto";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      {/* tus rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keto" element={<Keto />} />
        {/* otras rutas... */}
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Landing del curso Código Keto */}
        <Route path="/keto" element={<Keto />} />
      </Routes>
    </BrowserRouter>
  );
}
