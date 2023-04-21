import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing } from "./components/Landing";
import { Inbox } from "./components/Inbox";
import { Sent } from "./components/Sent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
      </Routes>
    </>
  );
}

export default App;
