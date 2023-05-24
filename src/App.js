import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboards from "./pages/Leaderboards";
import Add from "./pages/Add";
import Threads from "./pages/Threads";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Coba from "./pages/coba";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/add" element={<Add />} />
        <Route path="/threads/:id" element={<Threads />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coba" element={<Coba />} />
      </Routes>
    </div>
  );
}

export default App;
