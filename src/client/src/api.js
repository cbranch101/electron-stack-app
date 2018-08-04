import DataStore from "nedb"

export const loadDatabase = () => {
    const promise = new Promise(resolve => {
        const db = new DataStore("timers")
        db.loadDatabase(() => {
            resolve(db)
        })
    })

    return promise
}
