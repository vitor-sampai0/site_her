import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home/Home'
import WrongPerson from './pages/WrongPerson/WrongPerson'
import LoadingPage from './pages/LoadingPage/LoadingPage'
import ComfortQuestion from './pages/ComfortQuestion/ComfortQuestion'
import Invitation from './pages/Invitation/Invitation'
import Success from './pages/Success/Success'
import Stars from './components/Background/Stars'

export default function App() {
  return (
    <div className="app-root">
      <Stars />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wrong" element={<WrongPerson />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/comfort" element={<ComfortQuestion />} />
            <Route path="/invite" element={<Invitation />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
