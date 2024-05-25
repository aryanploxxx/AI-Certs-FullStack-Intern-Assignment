const express =  require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

function generatebackgroundColor() {
    const colors = ["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"];
    const randomIndexColor = Math.floor(Math.random() * 22);
    const shades = [50,100,200];
    const randomIndexShade = Math.floor(Math.random() * 3);
    const bg = "bg-"+colors[randomIndexColor]+"-"+shades[randomIndexShade];
    return bg;
}
    
// API Endpoint - Displays all available tasks in JSON format
router.get('/', (req, res) => {
    res.json({tasks: tasks})
})

// API Endpoint - Displays an individual task in JSON format
router.get('/:id', (req, res) => {
    try {
        const index = tasks.findIndex(t => t.id === (req.params.id));
        if (index > -1) {
            res.json(tasks[index]);
        } else {
            res.status(404).send('Task not found');
        }
    } catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).json({error: err})
    } 
})

// API Endpoint - Insert a New Task
router.post('/', (req, res) => {
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
            tasks.push(newTask)
        }        
        res.status(200).render('index', {tasks: tasks})
    } catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).json({error: err})
    }
})

// API Endpoint - Edit inidividual tasks
router.put('/:id', (req, res) => {
    try {
        const index = tasks.findIndex(t => t.id === (req.params.id))
        const {title, description, status} = req.body 
        if (index > -1) {
            tasks[index].title = title
            tasks[index].description = description
            tasks[index].status = status
        } else {
            res.status(404).send('Task not found')
        }
        res.render('index', {tasks: tasks})
    } catch(err) {
        console.log(`Error: ${err}`)
        res.status(500).json({error: err})
    }
})

// API Endpoint - Delete a Task
router.delete('/:id', (req, res) => {
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

module.exports = router