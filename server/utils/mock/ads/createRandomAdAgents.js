const getRandomNumberInRangeInclusive = require('../../functions/getRandomNumberInRangeInclusive');
const { nanoid } = require('nanoid');

/**
 * Возвращает случайно сгенерированный массив агентов для объявлений.
 * @param {number} amount – Количество агентов. По дефолту 1.
 * @returns {{agent_id: string, attributes: {first_name: string, last_name: string, middle_name: string}}[]}
 */
const createRandomAdAgents = function ({ amount = 1 }) {
    const firstNames = [ 'Федор', 'Петр', 'Максим', 'Александр', 'Семен' ];
    const lastNames = [ 'Дроздов', 'Смирнов', 'Крокфорд', 'Хавербеке', 'Кантор' ];
    const middleNames = [ 'Михайлович', 'Артурович', 'Степанович', 'Алексеевич', 'Витальевич' ];

    const agents = [];

    for (let i = 0; i < amount; i++) {
        const agent = {
            id: nanoid(),
            attributes: {
                first_name: firstNames[getRandomNumberInRangeInclusive({ max: firstNames.length - 1 })],
                last_name: lastNames[getRandomNumberInRangeInclusive({ max: lastNames.length - 1 })],
                middle_name: middleNames[getRandomNumberInRangeInclusive({ max: middleNames.length - 1 })]
            }
        }

        agents.push(agent)
    }

    return agents
}

module.exports = createRandomAdAgents