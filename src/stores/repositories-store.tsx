import {makeAutoObservable} from "mobx";
import {repositoriesRequest} from "../requests";
import {requestStore} from "./request-store";
import {RepositoriesInterface} from "../types";

class RepositoriesStore {
    repositories: RepositoriesInterface = {
        total_count: 0, incomplete_results: false, items: []
    };

    constructor() {
        makeAutoObservable(this);
    };

    setRepositories = (repositories: RepositoriesInterface) => {
        this.repositories = repositories;
    };

    getRequest = async () => {
        this.setRepositories(await(repositoriesRequest(requestStore.request)))
    };
};

export const repositoriesStore = new RepositoriesStore();