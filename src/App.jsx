import "./App.css";
import Dashboard from "./component/Pages/Dashboard";
import SignUp from "./component/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<div>
          <h1>Home page</h1>
        </div>} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
