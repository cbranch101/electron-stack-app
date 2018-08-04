const { ipcRenderer } = window.require("electron")
import React from "react"
import ReactDOM from "react-dom"
import { loadDatabase } from "./client/src/api"

import App from "./client/src/App"

const testDatabase = async () => {
    const db = await loadDatabase()
    const records = await db.find({})
    console.log(records)
}

ipcRenderer.on("test-message", (event, arg) => {
    console.log("in render", arg)
})

setTimeout(() => {
    console.log("sending message")
    ipcRenderer.send("render-message", { render: "message" })
}, 3000)

testDatabase()
ReactDOM.render(<App />, document.getElementById("root"))
