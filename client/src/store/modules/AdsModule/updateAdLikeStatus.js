/**
 * Модуль для лайков / дислайков у объявлений.
 * Обновляет данные в AdsModule/getAds
 */

import { AdsAPI } from '../../../api/AdsAPI';

export const updateAdLikeStatus = {
    namespaced: true,

    actions: {
        /**
         * Обновить статус лайка у объявления в модуле AdsModule/getAds
         * @param {string} id – id объявления
         * @param {boolean} status – новый статус
         */
        updateAdLikeStatus({ commit }, { id, status }) {
            // используем Optimistic UI для моментального обновления
            commit('AdsModule/getAds/updateAdLikeStatus', { id, status }, { root: true });

            AdsAPI.updateLikeStatus({ body: { id, status } })
                .catch(() => {
                    // если сервер возвращает ошибку, то обновляем интерфейс в
                    // соответствии с новыми данными
                    commit('AdsModule/getAds/updateAdLikeStatus', { id, status: !status }, { root: true });
                })
        }
    }
}