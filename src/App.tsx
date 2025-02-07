import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { About, Bulk, Footer, Navbar, Pricing, TwoWays } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/bulk-sms" element={<Bulk />} />
        <Route path="/2way-sms" element={<TwoWays />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
