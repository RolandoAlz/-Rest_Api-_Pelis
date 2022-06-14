const { Router } = require('express');
const router = Router();

const Fetch = require('node-fetch');

router.get('/', async (req, res) => { 
    const response = await Fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    console.log(users);
    res.send(users);
});

























module.exports = router;