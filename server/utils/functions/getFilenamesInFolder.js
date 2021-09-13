const fs = require('fs');
const appRoot = require('app-root-path');

/**
 * Получить названия файлов в папке. Метод работает синхронно.
 * @param {string} folderPath – Путь к директории относительно корня проекта.
 * @returns {string[]}
 * @see {@link https://www.npmjs.com/package/app-root-path}
 */
const getFilenamesInFolder = function ({ folderPath }) {
    return fs.readdirSync(appRoot + folderPath)
}

module.exports = getFilenamesInFolder