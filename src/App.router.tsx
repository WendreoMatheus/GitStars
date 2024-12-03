import { Route, BrowserRouter as Router, Routes } from 'react-router'
import './App.css'
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { NavHeader } from '@/components/NavHeader'
import { Home, Profile, Repo } from '@/Pages'

const AppRouter = () => {
  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/repo/:username/:repoName" element={<Repo />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
