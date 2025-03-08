import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './components/registration/Register.jsX'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App
