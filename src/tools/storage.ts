import { ICharacterInfo, IEpisode } from "../Types/types";

export const storage = {
    getCurrentCharacterInfo() {
        const currentCharacterInfoJson = localStorage.getItem("currentCharacterInfo");
        if (currentCharacterInfoJson !== null) {
            return JSON.parse(currentCharacterInfoJson);
        }
    },
    saveCurrentCharacterInfo(item: ICharacterInfo) {
        localStorage.setItem("currentCharacterInfo", JSON.stringify(item));
    },
    getCurrentEpisode() {
        const currentEpisodeJson = localStorage.getItem("currentEpisode");
        if (currentEpisodeJson !== null) {
            return JSON.parse(currentEpisodeJson);
        }
    },
    saveCurrentEpisode(item: IEpisode) {
        localStorage.setItem("currentEpisode", JSON.stringify(item));
    },
    getLocation() {
        const locationJson = localStorage.getItem("location");
        if (locationJson !== null) {
            return JSON.parse(locationJson);
        }
    },
    saveLocation(item: any) {
        localStorage.setItem("location", JSON.stringify(item));
    }
}