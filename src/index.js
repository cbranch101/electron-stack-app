import React from "react"
import ReactDOM from "react-dom"
import { loadDatabase } from "./client/src/api"

import App from "./client/src/App"

const testDatabase = async () => {
    const db = await loadDatabase()
    await db.insert({ foo: "bar" })
    const records = await db.find({})
    console.log(records)
}

testDatabase()
ReactDOM.render(<App />, document.getElementById("root"))
