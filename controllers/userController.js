const { User } = require('../models');

module.exports = {
    //All users
    getAllUsers(_req, res) {
        User.find({})
            .then((users) => !users ? res.status(404).json({ message: 'No users found' }) : res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //One user
    getUserById({ params }, res) {
        User.findOne({ _id: params.id }).populate('thoughts').populate('friends')
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
            { $set: req.body },
            { runValidators: true, new: true })
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
            { runValidators: true, new: true })
            .then((user) => !user ? res.status(404).json({ message: 'No user found with this id' }) : res.json(user))
            .catch((err) => res.status(500).json(err));
        },
    //Delete friend
    deleteFriend(req, res) {
        User.findOneAndDelete({ _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true })
            .then((user) => !user ? res.status(404).json({ message: 'No user found with this id' }) : res.json(user))
            .catch((err) => res.status(500).json(err))
        },
    };



        
    
