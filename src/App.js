import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import {
  AboutPage,
  CommercialGlazierPage,
  ContactPage,
  EmergencyRepairsPage,
  GlassRepairPage,
  HomePage,
  ProjectsPage,
} from "./pages/index";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/emergency-repairs/" element={<EmergencyRepairsPage />} />
        <Route
          path="/commercial-glazier/"
          element={<CommercialGlazierPage />}
        />
        <Route path="/glass-repair/" element={<GlassRepairPage />} />
        <Route path="/projects/" element={<ProjectsPage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/contact/" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
