/**
 * Изменить статус лайка у объявления.
 * @param {object} body – Тело запроса.
 * @param {string} body.id – ID объявления
 * @param {boolean} body.status - true -> лайк, false -> снять лайк
 * @returns {Promise<AxiosResponse<any>>}
 */
export const updateLikeStatus = function ({ body }) {
    const url = 'ads/like';
    const data = JSON.stringify(body);

    return this.api.put(url, data);
}