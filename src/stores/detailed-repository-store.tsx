import {makeAutoObservable} from "mobx";

class DetailedRepositoryStore {
    repository: any = {};

    constructor() {
        makeAutoObservable(this);
    };

    setRepository = (repository: any) => {
        this.repository = repository;
        console.log(this.repository)
    };
};

export const detailRepositoryStore = new DetailedRepositoryStore();