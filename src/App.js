import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="main">
          <Routes>
            <Route path="/" element={<p>Home</p>} />
            <Route path="/complete" element={<p>Completed</p>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
