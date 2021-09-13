/**
 * Модуль для получения всех объявлений.
 */

import { AdsAPI } from '../../../api/AdsAPI';

export const getAds = {
    namespaced: true,
    state() {
        return {
            ads: null,
            loadingStatus: null,
        }
    },

    getters: {
        getAds: (state) => state.ads,
        getLoadingStatus: (state) => state.loadingStatus,
    },

    mutations: {
        setAds: (state, val) => state.ads = val,
        setLoadingStatus: (state, val) => state.loadingStatus = val,

        /**
         * Обновляет значение like в ads
         * @param id
         * @param status
         */
        updateAdLikeStatus(state, { id, status }) {
            const idx = state.ads.findIndex(cv => cv.id === id);
            state.ads[idx].like = status;
        }
    },

    actions: {
        /**
         * Получить все объявления.
         */
        onPageEnter({ commit }) {
            commit('setLoadingStatus', 'loading');

            const params = { amount: 50 };

            AdsAPI.getAll({ params })
                .then(res => {
                    const empty = !res.data.ads.length;
                    commit('setAds', res.data.ads);

                    if (empty) commit('setLoadingStatus', 'empty');
                    else commit('setLoadingStatus', 'ready');
                })
                .catch(() => {
                    commit('setLoadingStatus', 'error');
                })
        },

        /**
         * Удаление данных при закрытии страницы.
         */
        onPageLeave({ commit }) {
            commit('setAds', null);
            commit('setLoadingStatus', null);
        }
    }
}