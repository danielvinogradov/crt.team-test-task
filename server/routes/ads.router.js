const express = require('express');
const router = express.Router();

const getRandomNumberInRangeInclusive = require('../utils/functions/getRandomNumberInRangeInclusive');
const createRandomAds = require('../utils/mock/ads/createRandomAds');

/**
 * Таймаут и псевдостатусы нужны для того, чтобы потестировать в интерфейсе несколько сценариев:
 * - данные загружаются
 * - ошибка сервера
 * - пустой ответ
 * - нормальный ответ
 */
router.get('/', (req, res) => {
    const RESPONSE_DELAY = 3000; // задержка серверного ответа в миллисекундах
    const DEFAULT_ADS_AMOUNT = 10; // столько объявлений вернет сервер, если не будет передан параметр amount

    const adsAmount = req.query?.amount || DEFAULT_ADS_AMOUNT;

    setTimeout(() => {
        /**
         * Рандомное число от 0 до 2.
         * В случае 0 сервер вернет ошибку
         * В случае 1 сервер вернет пустой массив объявлений
         * В случае 2 сервер вернет нормальный массив
         * @type {number}
         */
        const pseudoStatus = getRandomNumberInRangeInclusive({ max: 2 })

        if (pseudoStatus === 0) {
            res.status(500).send('Error!')
        } else if (pseudoStatus === 1) {
            res.json({
                ads: createRandomAds({ amount: adsAmount })
            })
        } else if (pseudoStatus === 2) {
            res.json({
                ads: []
            })
        }

    }, RESPONSE_DELAY)
})

module.exports = router