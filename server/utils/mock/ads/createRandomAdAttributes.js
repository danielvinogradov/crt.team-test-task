const getRandomNumberInRangeInclusive = require('../../functions/getRandomNumberInRangeInclusive');
const createRandomAdTitle = require('./createRandomAdTitle');
const createRandomAdAddress = require('./createRandomAdAddress')

/**
 * Возвращает объект атрибутов для объявления (тайтл, кол-во комнат, адрес, площадь, единица измерения площади).
 * @returns {{area: number, rooms: number, unit: string, address: {city: string, street: string, house: string, room: string}, title: string}}
 */
const createRandomAdAttributes = function () {
    const MIN_ROOMS = 1; // минимальное кол-во комнат
    const MAX_ROOMS = 5; // максимальное кол-во комнат
    const MIN_AREA = 20; // минимальная площадь листинга
    const MAX_AREA = 400; // максимальная площадь листинга
    const AREA_UNIT = 'квм'; // единица измерения, в которой указана площадь

    return {
        title: createRandomAdTitle(),
        rooms: getRandomNumberInRangeInclusive({ min: MIN_ROOMS, max: MAX_ROOMS }),
        address: { ...createRandomAdAddress() },
        area: getRandomNumberInRangeInclusive({ min: MIN_AREA, max: MAX_AREA }),
        unit: AREA_UNIT
    }
}

module.exports = createRandomAdAttributes