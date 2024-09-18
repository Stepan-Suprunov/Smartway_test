import React, {useEffect, useState} from "react";
import styles from './style.module.css'
import {Repository} from "./repository";
import axios from "axios";
import {repositoriesStore} from "../../stores/repositories-store";
import {observer} from "mobx-react";
import {requestStore} from "../../stores/request-store";

// type RepositoriesListPropsType = {
//     title: string
// };

// export type apiRepositoryType = {
//     stargazersCount: number
//     forksCount: number
//     repositoryUrl: string
//     repositoryName: string
//     avatarUrl: string
// }

// function RepositoriesListComponent(props: RepositoriesListPropsType) {
function RepositoriesListComponent() {

    useEffect(() => {
        // if (props.title.length > 0) {
        if (requestStore.request.length > 0) {
            // axios.get('https://api.github.com/search/repositories?q=' + props.title,
            axios.get('https://api.github.com/search/repositories?q=' + requestStore.request,
                {withCredentials: false}
            ).then((response) => {
                repositoriesStore.setRepositories(response.data);
            })
            // }}, [props.title]);
            }}, [requestStore.request]);
    return (
        <div className={styles.RepositoriesList}>
            <span className={styles.RepositoriesTitle}>Список репозиториев:</span>
            {repositoriesStore.repositories.items.map((rep:any) => <Repository key={rep.id}
                                                                               repository={rep}/>)}
        </div>
    );
};

export const RepositoriesList = observer(RepositoriesListComponent)