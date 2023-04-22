import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing } from "./components/Landing";
import { Inbox } from "./components/Inbox";
import { Sent } from "./components/Sent";
import { EmailDetail } from "./components/EmailDetail";
import { SentDetails } from "./components/SentDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/inbox/:inboxId" element={<EmailDetail />} />
        <Route path="/sent/:sentId" element={<SentDetails />} />
      </Routes>
    </>
  );
}

export default App;
