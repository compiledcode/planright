import React from "react"
import { Route, Routes } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import Homepage from "./components/Homepage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  )
}

//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>

export default App
