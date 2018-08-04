import React from "react"
import ReactDOM from "react-dom"
import { loadDatabase } from "./client/src/api"

import App from "./client/src/App"

loadDatabase().then(db => console.log(db))

ReactDOM.render(<App />, document.getElementById("root"))
