const express =  require('express')
const router = express.Router()

// Renders Home Page - Displays all available tasks
router.get('/', (req, res) => {
    res.render('index', {tasks: tasks})
})

// Renders Update Task Page
router.put('/update/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === (req.params.id))
    res.render('update', {task: tasks[index]})
})

module.exports = router
