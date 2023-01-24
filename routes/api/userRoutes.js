const router = require('express').Router();

// import user controller
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/userController');

// get all users
router.route('/').get(getAllUsers).post(createUser);

// getUserById and updateUser and deleteUser
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// createFriend and deleteFriend
router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend);

//export
module.exports = router;