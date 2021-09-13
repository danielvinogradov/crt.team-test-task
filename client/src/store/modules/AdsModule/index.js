import { getAds } from './getAds';
import { updateAdLikeStatus } from './updateAdLikeStatus';

export const AdsModule = {
    namespaced: true,
    modules: { getAds, updateAdLikeStatus, }
}