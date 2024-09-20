import styles from './style.module.css'
import {favouritesStore} from "../../stores/index";
import {Repository} from "../index";
import {observer} from "mobx-react";
import {RepositoryInterface} from "../../types";

function FavouritesListComponent() {
    if (favouritesStore.favourites.length > 0) {
        return (
            <div className={styles.FavouritesList}>
                <span className={styles.FavouritesTitle}>Избранное</span>
                {favouritesStore.favourites.map((rep: RepositoryInterface) => <Repository key={rep.id}
                                                                          repository={rep}/>)}
            </div>
        )
    } else return null;
};

export const FavouritesList = observer(FavouritesListComponent);