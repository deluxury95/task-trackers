import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditTask from "./pages/EditTask";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:taskId" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
