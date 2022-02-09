const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

let todos = [
    {
        id : 1,
        title: "bangun pagi",
        isDone: true
    },
    {
        id : 2,
        title: "sholat subuh",
        isDone: false
    },
    {
        id : 3,
        title: "lari pagi",
        isDone: false
    }
]

//endpoint

app.get("/", (req, res) =>{
    res.send("mantap")
})

app.get("/todos", (req, res) => {
    res.send({
        data : todos
    })
})

app.get("/todo/:id", (req, res) =>{
    const {id} = req.params
    const data = todos.find(item => item.id == id)

    !data? (
        res.send({
            Status: "failed",
            message: "data is empty"
        })
    ):(
        res.send({
            data : data
        })
    )

})

app.post("/todo", (req, res) => {
    const data = req.body
    todos.push(data)

    res.send({data: todos})
})


app.use((req, res) => {
    res.send("<h1 style='text-align:center; margin-top:100px'>404</h1>")
})

app.listen(port, ()=>{
    console.log("server runing on port", port);
})