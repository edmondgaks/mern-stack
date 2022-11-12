const getGoals = (req,res) => {
    res.status(200).json({ message: 'Get goals'})
}

const setGoals = (req,res) => {
    console.log(req.body)
    if(!req.body.text) {
        res.status(400) 
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set goals'})
}
const updateGoal = (req,res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
}
const deleteGoal = (req,res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}