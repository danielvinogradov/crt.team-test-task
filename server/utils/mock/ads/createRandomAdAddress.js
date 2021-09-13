const getRandomNumberInRangeInclusive = require('../../functions/getRandomNumberInRangeInclusive');

/**
 * Создает случайно сгенерированный объект адреса для объявления.
 * @returns {{city: string, street: string, house: string, room: string}}
 */
const createRandomAdAddress = function () {
    const cities = [ 'Москва', 'Санкт-Петербург', 'Сочи', 'Казань', 'Новосибирск', 'Саратов', 'Челябинск', 'Тосно' ];
    const streets = [ 'Ленина', 'Профсоюзная', 'Сибгата Хакима', 'Набережная реки Мойки', 'Площадь Трудящихся', 'Красного Знамени', 'Асафьева', 'Бульвар Интернационалистов', 'Кирова' ];

    return {
        city: cities[getRandomNumberInRangeInclusive({ max: cities.length - 1 })],
        street: streets[getRandomNumberInRangeInclusive({ max: streets.length - 1 })],
        house: String(getRandomNumberInRangeInclusive({ min: 1, max: 500 })),
        room: String(getRandomNumberInRangeInclusive({ min: 1, max: 1000 }))
    }
}

module.exports = createRandomAdAddress