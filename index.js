const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000;
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

// Attach the livereload script to the responses
app.use(connectLivereload());


const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// mongoose.connect(process.env.URL)
//     .then(()=>{ console.log("Database Connected.") })
//     .catch((err)=>{ console.log(`Error Message: ${err}`)})

// const List = require('./models/todo')

// const todoRouter = require('./routers/todo')
// app.use("/list", todoRouter)

// app.get("/", async (req,res)=> {
//     const lists = await List.find({}).sort({ _id: -1 })
//     // console.log(lists)
//     return res.render("index", {all_lists:lists, message:"", todo:""})
// })

tasks = [ {
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
}]

function generatebackgroundColor() {
    const colors = ["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"];
    const randomIndexColor = Math.floor(Math.random() * 22);
    const shades = [50,100,200];
    const randomIndexShade = Math.floor(Math.random() * 3);
    const bg = "bg-"+colors[randomIndexColor]+"-"+shades[randomIndexShade];
    return bg;
}

app.get('/', (req, res) => {
    res.render('index', {tasks: tasks})
})

app.get('/tasks', (req, res) => {
    res.json({tasks: tasks})
})

app.get('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === (req.params.id));
    if (index > -1) {
        res.json(tasks[index]);
    } else {
        res.status(404).send('Task not found');
    }
})

app.post('/tasks', (req, res) => {
    try {
        const {title, description} = req.body
        
        if(!title || !description) {
            res.status(200).render('index', {tasks: tasks})
        } else {
            let currentDate = new Date();
            let formattedCurrentDate = currentDate.toLocaleString();
            currentDate.setDate(currentDate.getDate() + 1);
            let calcDueDate = currentDate.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });

            const newTask = {
                "id": uuidv4(),
                "title": title,
                "description": description,
                "status": "Pending",
                "due_date": calcDueDate,
                "backgroundColor": generatebackgroundColor()
            }
            // console.log(newTask)
            tasks.push(newTask)
        }        
        res.status(200).render('index', {tasks: tasks})
    } catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).json({error: err})
    }
})

app.put('/update/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === (req.params.id))
    res.render('update', {task: tasks[index]})
})

app.put('/tasks/:id', (req, res) => {
    try {
        const index = tasks.findIndex(t => t.id === (req.params.id))
        const {title, description} = req.body 
        if (index > -1) {
            tasks[index].title = title
            tasks[index].description = description
        } else {
            res.status(404).send('Task not found')
        }
        res.render('index', {tasks: tasks})
    } catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).json({error: err})
    }
})

app.delete('/tasks/:id', (req, res) => {
    try {
        const index = tasks.findIndex(t => t.id === (req.params.id));
        if (index > -1) {
            tasks.splice(index, 1);
            res.status(200).render('index', {tasks: tasks});
        } else {
            res.status(404).json('Task not found');
        }
    } catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).json({error: err})
    }
})

// app.put("/update/:id",async (req,res)=> {
//     const id = req.params.id;
//     const todo = await List.findOne({ _id: id});
//     return res.render("update",{todo: todo,message:""})
// })

// app.put("/insertUpdated/:id", async (req,res)=> {
//     const id = req.params.id;
//     const title = req.body.todoTitle;
//     const desc = req.body.todoDesc;
//     await List.findOneAndUpdate({ _id: id}, {todoTitle: title, todoDesc: desc});
//     const lists = await List.find({}).sort({ _id: -1 })
//     return res.render("index",{all_lists: lists, message:"ToDo Updated Successfully"})
// })

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})

liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
});
  