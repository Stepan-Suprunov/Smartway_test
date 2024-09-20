import styles from "./style.module.css";
import React, {useCallback} from "react";
import {favouritesStore, detailRepositoryStore} from "../../stores/index";
import {observer} from "mobx-react";
import {NavLink} from "react-router-dom";
import {IRepository} from "../../types";

type RepositoryPropsType = {
    repository: IRepository
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
            <div className={styles.RepositoryLeftColumn}>
                <a className={styles.RepositoryLink}
                   href={repository.html_url}>
                    {repository.full_name}
                </a>
                <span className={styles.StargazersCount}>Число старов: {repository.stargazers_count}</span>
                <span className={styles.ForksCount}>Число форков: {repository.forks}</span>
                <NavLink className={styles.NavLink} onClick={onDetailsButtonClickHandler} to="/detailes/">
                    <button className={styles.DetailsButton}>Подробнее</button>
                </NavLink>
                <button className={styles.FavouritesButton}
                        onClick={onFavouriteButtonClickHandler}>
                    {favouritesStore.includesFavourite(repository.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
                </button>
            </div>
            <div className={styles.RepositoryRightColumn}>
                <img className={styles.RepositoryLogo}
                     src={repository.owner.avatar_url}/>
            </div>
        </div>
    );
};

export const Repository = observer(RepositoryComponent);