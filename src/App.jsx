import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Keto from "./pages/keto";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Landing del curso Código Keto */}
        <Route path="/keto" element={<Keto />} />
      </Routes>
    </BrowserRouter>
  );
}
