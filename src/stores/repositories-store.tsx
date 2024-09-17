import {makeAutoObservable} from "mobx";

class RepositoriesStore {
    repositories: any = {items: []};

    constructor() {
        makeAutoObservable(this);
    };

    setRepositories = (repositories: any ) => {
        this.repositories = repositories;
    };
};

export const repositoriesStore = new RepositoriesStore();