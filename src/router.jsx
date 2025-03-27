import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accout from "./pages/Accout";
//import Home from "./pages/Home";

//<Route path="/home" element={<Home />} />

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accout />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;