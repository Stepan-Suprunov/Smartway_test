import {makeAutoObservable} from "mobx";
import {repositoriesRequest} from "../requests";
import {IRepositories} from "../types";

class RepositoriesStore {
    repositories: IRepositories = {
        total_count: 0, incomplete_results: false, items: []
    };
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };

    setRepositories = (repositories: IRepositories) => {
        this.repositories = repositories;
    };

    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    };

    getRequest = async (request: string) => {
        this.setIsLoading(true);
        const data = await repositoriesRequest(request);
        this.setIsLoading(false);
        if (data) {
            this.setRepositories(data);
        };
    };
};

export const repositoriesStore = new RepositoriesStore();