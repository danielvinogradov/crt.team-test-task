const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const adID = req.query.hasOwnProperty('id') && req.query.id; // id объявления, которому надо поставить лайк

    if (Math.random() > 0.5) { // Math.random() > 0.5 добавлен, чтобы потестировать ситуацию если сервер вернет ошибку
        res.status(500).json({
            status: 'error',
            message: 'Ошибка сервера.'
        })
    } else if (adID) {
        res.json({
            status: 'success'
        })
    } else {
        res.json({
            status: 'error',
            message: 'Неправильный ID.'
        })
    }
})

module.exports = router