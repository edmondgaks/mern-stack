const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({ message: 'Get goals'})
})

const setGoals = asyncHandler(async (req,res) => {
    console.log(req.body)
    if(!req.body.text) {
        res.status(400) 
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set goals'})
})
const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
})
const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}