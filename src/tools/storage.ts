import { ICharacterInfo } from "../Types/episodes";

export const storage = {
    getCurrentCharacterInfo() {
        const currentCharacterInfoJson = localStorage.getItem("currentCharacterInfo");
        if (currentCharacterInfoJson !== null) {
            return JSON.parse(currentCharacterInfoJson);
        }
    },
    saveCurrentCharacterInfo(item: ICharacterInfo) {
        localStorage.setItem("currentCharacterInfo", JSON.stringify(item));
    }
}