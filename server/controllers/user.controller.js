const { Router } = require('express');
const UserService = require('../services/user.service');

/**addUser,
    updateUser,
    getUserByUsername,
    getUser,

*/
const router = Router();

// router.post('/signup', async (req, res) => {
//     // here need also to generate a jwt and returns it in response
// });

router.get('/', async (req, res) => {
    const id = req.params.id;
    const user = await UserService.getUser(id);
    res.send(user);
})
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserService.getUser(id);
    res.send(user);
})

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await UserService.getUserByUsername(username, password);
    res.send(user); 
});

router.post('/', async (req, res) => {
    try {
        const user = req.body.user;
        const newUser = await UserService.addUser(user);
        res.send(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { user } = req.body;
    const updatedUser = await UserService.updateUser(id, user);
    res.send(updatedUser);
})

module.exports = router;
