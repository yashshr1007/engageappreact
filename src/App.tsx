import { useAuth0 } from "@auth0/auth0-react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";
import History from "./components/History";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

function App() {

  const {  isAuthenticated } = useAuth0()
  console.log("auth is "+ isAuthenticated)
  return (
    <>
    <div style={{ height: "100vh", width: "100vw", background: "#2d405f" }}>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRouter isAuthenticated={isAuthenticated}/>}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
      </div>
    </>
  )
}

export default App
