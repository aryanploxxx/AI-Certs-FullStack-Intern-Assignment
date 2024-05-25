const express = require('express')
const path = require('path')
const app = express()
const port = 3000;

// To create a Unique ID for every Task
const { v4: uuidv4 } = require('uuid');

const router = express.Router()

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const todoRouter = require('./routers/todoRouter')
const renderPages = require('./routers/renderPages')

app.use("/tasks", todoRouter)
app.use("/", renderPages)

tasks = [
{
    "id": "4386f138-3c51-440b-a08e-5f658c2a8baa",
    "title": "Test Title",
    "description": "Test Description",
    "status": "Pending",
    "due_date": "Sunday, May 26, 2024 at 10:43 PM",
    "backgroundColor": "bg-slate-300"
},
{
    "id": "30818d17-41a8-4408-a1e9-4d5a7e92ca69",
    "title": "Sample Title",
    "description": "Sample Description",
    "status": "In-Progress",
    "due_date": "Sunday, May 26, 2024 at 10:43 PM",
    "backgroundColor": "bg-slate-300"
}
]

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})