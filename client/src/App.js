import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Yashvardhan from "./pages/Yashvardhan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="yashvardhan" element={<Yashvardhan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
