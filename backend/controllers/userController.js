const registerUser = (req,res) => {
    res.json({ message: 'Register user'})
}

const loginUser = (req,res) => {
    res.json({ message: 'Login user'})
}

const getMe = (req,res) => {
    res.json({ message: 'User data display'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}