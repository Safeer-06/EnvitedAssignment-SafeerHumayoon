import "./App.css";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingComponent from "./containers/Landing";
import CreateEvent from "./containers/CreateEvent";
import Event from "./containers/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingComponent />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<Event />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
