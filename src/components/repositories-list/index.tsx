import React, {useEffect} from "react";
import styles from './style.module.css'
import {Repository} from "./repository";
import axios from "axios";
import {repositoriesStore} from "../../stores/repositories-store";
import {observer} from "mobx-react";
import {requestStore} from "../../stores/request-store";

function RepositoriesListComponent() {

    useEffect(() => {
        if (requestStore.request.length > 0) {
            axios.get('https://api.github.com/search/repositories?q=' + requestStore.request,
                {withCredentials: false}
            ).then((response) => {
                repositoriesStore.setRepositories(response.data);
            })
            }}, [requestStore.request]);

    if (requestStore.request.length > 0) {
        return (
            <div className={styles.RepositoriesList}>
                <span className={styles.RepositoriesTitle}>Список репозиториев</span>
                {repositoriesStore.repositories.items.map((rep: any) => <Repository key={rep.id}
                                                                                    repository={rep}/>)}
            </div>
        );
    } else return null;
};

export const RepositoriesList = observer(RepositoriesListComponent);