import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import Counters from "./customHooks/counter";
import FourzeroFourPage from "./routes/FourzeroFourPage";
import Homepage from "./routes/homepage";
import ErrorBoundary from "./routes/ErrorBoundary";
function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="*" element={<FourzeroFourPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/counter" element={<Counters />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
export default App;
