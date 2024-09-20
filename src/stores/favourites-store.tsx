import {makeAutoObservable} from "mobx";
import {IRepository} from "../types";

class FavouritesStore {
    favourites: Array<IRepository> = [];

    constructor() {
        makeAutoObservable(this);
    };

    addFavourite = (repository: IRepository) => {
        if (!this.includesFavourite(repository.id)) {
            this.favourites.push(repository);
        } else this.removeFavourite(repository);
    };

    removeFavourite = (repository: IRepository) => {
        this.favourites = this.favourites.filter((rep: IRepository) => rep !== repository);
    };

    includesFavourite = (id: number) => {
        if (this.favourites.find((rep: IRepository) => rep.id === id)) {
            return true
        } else return false;
    };
};

export const favouritesStore = new FavouritesStore();