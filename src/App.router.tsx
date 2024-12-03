import { Route, BrowserRouter as Router, Routes } from 'react-router'
import Profile from '@/Pages/Profile'
import Home from '@/Pages/Home'
import Repo from '@/Pages/Repo'
import './App.css'
import 'bulma/css/bulma.min.css'

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
