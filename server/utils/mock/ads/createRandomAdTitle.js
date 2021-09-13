const getRandomNumberInRangeInclusive = require('../../functions/getRandomNumberInRangeInclusive');

/**
 * Возвращает случайно сгенерированный заголовок объявления.
 * @returns {string}
 */
const createRandomAdTitle = function () {
    const titleBeginnings = [ 'Отличный вариант', 'Шикарная квартира', 'Просторный дом', 'Уютный уголок', 'Роскошный апартамент' ];
    const titleEndings = [ 'на Ленина', 'на Коммунальной', 'рядом с Национальным театром', 'около городской библиотеки', 'вблизи ж/д вокзала', 'на углу с инфекционной больницей', 'рядом с центральным рынком' ];

    // случайный элемент из массива titleBeginnings
    const beginning = titleBeginnings[getRandomNumberInRangeInclusive({ max: titleBeginnings.length - 1 })];
    // случайный элемент из массива titleEndings
    const ending = titleEndings[getRandomNumberInRangeInclusive({ max: titleEndings.length - 1 })];

    return `${beginning} ${ending}`
}

module.exports = createRandomAdTitle