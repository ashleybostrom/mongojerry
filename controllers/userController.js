const { User } = require('../models');

module.exports = {
    //All users
    getAllUsers(req, res) {
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //One user
    getUserById(req, res) {
        User.findOne({ _id: req.params.id }).populate('thoughts').populate('friends')
            .then((user) => !user ? res.status(404).json({ message: 'No user found with this id' }) : res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //Create user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //Update user
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, 
            { $set: req.body })
            .then((user) => !user ? res.status(404).json({ message: 'No user found with this id' }) : res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //Delete user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => !user ? res.status(404).json({ message: 'No user found with this id' }) : res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //Add friend
    createFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            {new: true})
            .then((user) => !user ? res.status(404).json({ message: 'No user found with this id' }) : res.json(user))
            .catch((err) => res.status(500).json(err));
        },
    //Delete friend
    deleteFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $pull: { friends: req.params.friendId } })
            .then((user) => !user ? res.status(404).json({ message: 'No user found with this id' }) : res.json(user))
            .catch((err) => res.status(500).json(err))
        },
    };



        
    
