import styles from "./style.module.css";
import React, {useCallback} from "react";
import {favouritesStore, detailRepositoryStore} from "../../stores/index";
import {observer} from "mobx-react";
import {NavLink} from "react-router-dom";
import {RepositoryInterface} from "../../types";

type RepositoryPropsType = {
    repository: RepositoryInterface
}

function RepositoryComponent (props: RepositoryPropsType) {
    const {repository} = props;

    const onFavouriteButtonClickHandler = useCallback(() => {
        favouritesStore.addFavourite(repository);
    }, []);

    const onDetailsButtonClickHandler = useCallback(() => {
        detailRepositoryStore.setUrl(repository.url);
    }, []);

    return (
        <div className={styles.Repository}>
            <a className={styles.RepositoryLink}
               href={repository.html_url}>
                {repository.full_name}
            </a>
            <span className={styles.StargazersCount}>Число старов: {repository.stargazers_count}</span>
            <span className={styles.ForksCount}>Число форков: {repository.forks}</span>
            <img className={styles.RepositoryLogo}
                 src={repository.owner.avatar_url}/>
            <NavLink onClick={onDetailsButtonClickHandler} to="/detailes/"><button>Подробнее</button></NavLink>
            <button className={styles.FavouritesButton}
                    onClick={onFavouriteButtonClickHandler}>
                {favouritesStore.includesFavourite(repository.id)? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
        </div>
    );
};

export const Repository = observer(RepositoryComponent);