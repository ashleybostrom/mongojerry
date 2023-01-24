const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/userController');

// getAllUsers and createUser
router.route('/').get(getAllUsers).post(createUser);

// getUserById and updateUser and deleteUser
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// createFriend and deleteFriend
router.route('/:id/friends/:friendId').post(createFriend).delete(deleteFriend);

//export
module.exports = router;