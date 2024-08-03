import { defineStore } from 'pinia'

export const useCurrentTrackStore = defineStore('currenttrack', {
    state: () => {
        return {
            'trackId': '#none',
            'trackName': '',
        }
    }
})