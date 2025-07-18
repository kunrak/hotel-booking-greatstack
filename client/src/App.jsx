import React from "react";
import Navbar from "./components/Navbar.jsx";
import { useLocation } from "react-router-dom";

const App = () => {

  const inOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div>
      {!inOwnerPath && <Navbar />}
    </div>
  )
}

export default App;