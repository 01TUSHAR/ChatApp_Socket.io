import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Home from './pages/Home'
import { useAuthStore } from './store/userAuthStore.js'

function App() {
  const { authUser, checkAuth } = useAuthStore()
  return (
    <Routes>
      <Navbar />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />

      {/* home */}
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
