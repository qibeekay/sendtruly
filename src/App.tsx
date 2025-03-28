import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import {
  About,
  Bulk,
  Footer,
  Navbar,
  Payment,
  Pricing,
  Reviews,
  TwoWays,
} from "./components";

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
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
