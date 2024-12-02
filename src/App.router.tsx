import { Route, BrowserRouter as Router, Routes } from "react-router"
import Profile from "@/components/Profile"
import Home from "@/components/Home"
import Repo from "@/components/Repo"

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/repo" element={<Repo />} />
        </Routes>
    </Router>
  )
}

export default AppRouter