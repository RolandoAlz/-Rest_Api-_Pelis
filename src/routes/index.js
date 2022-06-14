const { Router } = require('express');
const router = Router();

router.get('/test',(req ,res) => {
    const data = {
        "name" : 'rolando',
        "website" : 'rolandodegithub.io'
    }
    res.json(data);
});

module.exports = router;