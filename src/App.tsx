import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { About, Bulk, Footer, Navbar, Pricing } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/bulk-sms" element={<Bulk />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
