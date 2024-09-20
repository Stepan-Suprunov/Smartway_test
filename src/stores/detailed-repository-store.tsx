import {makeAutoObservable} from "mobx";
import {detailsPageRequest} from "../requests";
import {RepositoryInterface} from "../types";

class DetailedRepositoryStore {
    url: string = '';
    repository: RepositoryInterface = null;

    constructor() {
        makeAutoObservable(this);
    };

    setUrl(url: string) {
        this.url = url;
    };

    setRepository(repository: RepositoryInterface) {
        this.repository = repository;
    }

    getRequest = async () => {
        this.setRepository(await(detailsPageRequest(this.url)))
    };
};

export const detailRepositoryStore = new DetailedRepositoryStore();