import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePage from "./components/Create/CreatePage";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/create" element={<CreatePage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
