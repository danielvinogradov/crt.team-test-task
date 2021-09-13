const { nanoid } = require('nanoid');
const getRandomNumberInRangeInclusive = require('../../functions/getRandomNumberInRangeInclusive');
const getFileNamesInFolder = require('../../functions/getFilenamesInFolder');
const createRandomAdAttributes = require('./createRandomAdAttributes');
const createRandomAdAgents = require('./createRandomAdAgents');

/**
 * Функция генерации рандомных объявлений.
 * @param {number} amount – Количество объявлений, которые нужно сгенерировать. По дефолту 10.
 * @returns {object[]}
 */
const createRandomAds = function ({ amount = 10 }) {
    const IMG_FOLDER_PATH = '/public/img/ads'; // путь к изображениям листингов относительно project root
    const AGENTS_AMOUNT = 5; // кол-во объектов агентов, которые нужно сгенерировать

    const agents = createRandomAdAgents({ amount: AGENTS_AMOUNT }); // массив с агентами
    const imgURIs = getFileNamesInFolder({ folderPath: IMG_FOLDER_PATH }) // массив с uri изображений для листингов

    const ads = []; // объявления

    for (let i = 0; i < amount; i++) { // пушим рандомизированный объект объявления в ads
        ads.push({
            type: 'flat',
            id: nanoid(),
            attributes: { ...createRandomAdAttributes() },
            relationships: {
                agents: [ agents[getRandomNumberInRangeInclusive({ max: agents.length - 1 })] ]
            },
            imgURI: 'http://localhost:3000/img/ads/' + imgURIs[getRandomNumberInRangeInclusive({ max: imgURIs.length - 1 })],
            like: false,
        })
    }

    return ads;
}

module.exports = createRandomAds