import {makeAutoObservable} from "mobx";

class FavouritesStore {
    favourites:any = [];

    constructor() {
        makeAutoObservable(this);
    };

    addFavourite = (repository:any) => {
        if (!this.favourites.includes(repository)) {
            this.favourites.push(repository);
        };
    };

    removeFavourite = (repository:any) => {
        this.favourites = this.favourites.filter((rep:any) => rep !== repository);
    };

    includesFavourite = (repository:any) => {
        if (this.favourites.includes(repository)) {
            return true
        } else return false;
    };
};

export const favouritesStore = new FavouritesStore();