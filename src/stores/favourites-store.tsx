import {makeAutoObservable} from "mobx";
import {RepositoryInterface} from "../types";

class FavouritesStore {
    favourites: Array<RepositoryInterface> = [];

    constructor() {
        makeAutoObservable(this);
    };

    addFavourite = (repository: RepositoryInterface) => {
        if (!this.includesFavourite(repository.id)) {
            this.favourites.push(repository);
        } else this.removeFavourite(repository);
    };

    removeFavourite = (repository: RepositoryInterface) => {
        this.favourites = this.favourites.filter((rep: RepositoryInterface) => rep !== repository);
    };

    includesFavourite = (id: number) => {
        if (this.favourites.find((rep: RepositoryInterface) => rep.id === id)) {
            return true
        } else return false;
    };
};

export const favouritesStore = new FavouritesStore();