import axios from "axios";
import {RepositoriesInterface, RepositoryInterface} from "../types";

export const detailsPageRequest = async (url: string): Promise<{repository: RepositoryInterface}> => {
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        return {repository: null};
    }
};

export const repositoriesRequest = async (repositoryName: string): Promise<{repositories: RepositoriesInterface}> => {
    try {
        const {data} = await axios.get('https://api.github.com/search/repositories?q=' + repositoryName);
        return data;
    } catch (error) {
        return {repositories:  {
                total_count: 0, incomplete_results: false, items: []
        }};
    };
};