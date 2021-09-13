/**
 * Получить объявления.
 * @param {object} [params] – параметры запроса.
 * @param {number} [params.amount] – кол-во объявлений.
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getAll = function ({ params }) {
    const url = 'ads';
    const options = { params };

    return this.api.get(url, options)
}