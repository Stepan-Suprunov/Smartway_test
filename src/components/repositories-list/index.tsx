import React from "react";
import styles from './style.module.css'
import {Repository} from "../index";
import {repositoriesStore} from "../../stores/index";
import {observer} from "mobx-react";
import {IRepository} from "../../types";

function RepositoriesListComponent() {

    if (repositoriesStore.isLoading) {
        return (
            <span>Loading</span>
        );
    };

    if (repositoriesStore.repositories.items.length > 0) {
        return (
            <div className={styles.RepositoriesList}>
                <span className={styles.RepositoriesTitle}>Список репозиториев</span>
                {repositoriesStore.repositories.items.map((rep: IRepository) => <Repository key={rep.id}
                                                                                            repository={rep}/>)}
            </div>
        );
    } else return null;
};

export const RepositoriesList = observer(RepositoriesListComponent);