import React from "react"
import { Route, Routes } from "react-router-dom"

import { Navbar } from "./components"
import { Home } from "./Pages/Home"
import { Scheduling } from "./Pages/Scheduling"

function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route element={<Scheduling />} path="/agendamento" />
      </Routes>
    </>
  )
}

export default Router
