import "./App.css";
import SignUp from "./component/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" />
      </Routes>
        <SignUp />
      </Router>
    </>
  );
}

export default App;
