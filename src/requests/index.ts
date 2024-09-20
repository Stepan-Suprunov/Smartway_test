import axios from "axios";
import {IRepositories, IRepository} from "../types";

export const detailsPageRequest = async (url: string): Promise<IRepository | null> => {
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        return null;
    }
};

export const repositoriesRequest = async (repositoryName: string): Promise<IRepositories> => {
    try {
        const {data} = await axios.get('https://api.github.com/search/repositories?q=' + repositoryName);
        return data;
    } catch (error) {
        return {
                total_count: 0, incomplete_results: false, items: []
        };
    };
};