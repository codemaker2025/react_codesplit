import Task from "./components/Task";
import Home from "./components/Home";
import Navbar from "./components/Navbar"; // Import the Navbar component
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskDB from "./components/TaskDB";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/localstorage" element={<Task />} />
          <Route path="/database" element={<TaskDB />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
