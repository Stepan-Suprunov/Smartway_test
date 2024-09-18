import styles from "./style.module.css";
import React from "react";
import {favouritesStore} from "../../../stores/favourites-store";
import {observer} from "mobx-react";

type RepositoryPropsType = {
    repository: any
}

export function RepositoryComponent (props: RepositoryPropsType) {

    const onFavouriteButtonClickHandler = () => {
        if (!favouritesStore.includesFavourite(props.repository)) {
            favouritesStore.addFavourite(props.repository);
        } else {
            favouritesStore.removeFavourite(props.repository);
        };
    };

    return (
        <div className={styles.Repository}>
            <a className={styles.RepositoryLink}
               href={props.repository.html_url}>
                {props.repository.full_name}
            </a>
            <span className={styles.StargazersCount}>Число старов: {props.repository.stargazers_count}</span>
            <span className={styles.ForksCount}>Число форков: {props.repository.forks}</span>
            <img className={styles.RepositoryLogo}
                 src={props.repository.owner.avatar_url}/>
            <button className={styles.FavouritesButton}
                    onClick={onFavouriteButtonClickHandler}>
                {favouritesStore.includesFavourite(props.repository)? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
        </div>
    );
};

export const Repository = observer(RepositoryComponent);