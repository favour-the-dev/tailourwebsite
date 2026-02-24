import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landing-page";
import AppProvider from "@/context/app-context";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
