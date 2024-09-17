import React, {useEffect, useState} from "react";
import styles from './style.module.css'
import {Repository} from "./repository";
import axios from "axios";

type RepositoriesListPropsType = {
    title: string
};

// export type apiRepositoryType = {
//     stargazersCount: number
//     forksCount: number
//     repositoryUrl: string
//     repositoryName: string
//     avatarUrl: string
// }

export function RepositoriesList(props: RepositoriesListPropsType) {

    const [repositories, setRepositories] = useState({items: []});
    useEffect(() => {
        if (props.title.length > 0) {
        axios.get('https://api.github.com/search/repositories?q=' + props.title,
            {withCredentials: false}
        ) .then((response) => {
            setRepositories(response.data);
        })
    }}, [props.title]);

    return (
        <div className={styles.RepositoriesList}>
            <span className={styles.RepositoriesTitle}>Список репозиториев:</span>
            {repositories.items.map((rep) => <Repository repository={rep}/>)}
        </div>
    );
};