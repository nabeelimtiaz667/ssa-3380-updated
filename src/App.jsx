import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import InteractiveAvatar from "./views/InteractiveAvatar";
import InteractiveSessions from "./views/InteractiveSessions";
import JotForm from "./views/JotForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (home page) */}
        <Route path="/" element={<InteractiveSessions />} />
        <Route path="/avatar" element={<InteractiveAvatar />} />
        <Route path="/form-mock" element={<JotForm />} />
      </Routes>
    </Router>
  );
}

export default App;
