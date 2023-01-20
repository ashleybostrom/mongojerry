const router = require('express').Router();

const {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users get and post
router.route('/').get(getUser).post(createUser);

// /api/users/:id get one user put and delete
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId post and delete
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

//export
module.exports = router;