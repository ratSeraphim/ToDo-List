import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePage from "./components/Create/CreatePage";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };
  return (
    <Router>
      <div className="App">
        <Navbar handleInputChange={handleChange} searchInput={searchInput} />
        <div className="content">
          <Routes>
            <Route path="/create" element={<CreatePage />} />
            <Route path="/edit/:i" element={<CreatePage />} />
            <Route path="/" element={<Home searchInput={searchInput} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
