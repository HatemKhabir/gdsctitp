import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"

import Header from "../components/Header"

function App() {

  return (
    <>
     <div className="App">
       <Header/>
       <Routes>
      <Route path="/" element={<Home/>}/>
      
       </Routes>
     </div>
    </>
  )
}

export default App
