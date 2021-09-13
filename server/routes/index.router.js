const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Это тестовый бэкенд для задания №2. URL для получения объявлений – /ads')
})

module.exports = router