import React from "react"
import ReactDOM from "react-dom/client"

import App from "./Pages/Home"
import GlobalStyle from "./style/globalStyle.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
)
