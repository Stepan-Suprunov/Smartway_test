import {makeAutoObservable} from "mobx";
import {detailsPageRequest} from "../requests";
import {IRepository} from "../types";

class DetailedRepositoryStore {
    url: string = '';
    repository: IRepository | null = null;
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };

    setUrl(url: string) {
        this.url = url;
    };
    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    };

    setRepository(repository: IRepository) {
        this.repository = repository;
    }

    getRequest = async () => {
        this.setIsLoading(true);
        const data = await detailsPageRequest(this.url)
        this.setIsLoading(false);
        if (data) {
            this.setRepository(data);
        };
    };
};

export const detailRepositoryStore = new DetailedRepositoryStore();