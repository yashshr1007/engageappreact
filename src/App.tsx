import { useAuth0 } from "@auth0/auth0-react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";
import History from "./components/History";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

function App() {

  const {  isAuthenticated} = useAuth0()
  return (
    <>
    <div style={{ height: "100vh", width: "100vw", background: "#2d405f" }}>
      <Router basename="/engageappreact">
      <Routes>
        <Route path="/" element={!isAuthenticated ? <LandingPage /> : <Navigate replace to={"/home"} />} />
        <Route element={<PrivateRouter isAuthenticated={isAuthenticated}/>}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/history" element={<History />} />
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>
    </Router>
      </div>
    </>
  )
}

export default App
