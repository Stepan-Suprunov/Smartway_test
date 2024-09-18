import styles from './style.module.css'
import {favouritesStore} from "../../stores/favourites-store";
import {Repository} from "../repository";
import {observer} from "mobx-react";

function FavouritesListComponent() {
    if (favouritesStore.favourites.length > 0) {
        return (
            <div className={styles.FavouritesList}>
                <span className={styles.FavouritesTitle}>Избранное</span>
                {favouritesStore.favourites.map((rep: any) => <Repository key={rep.id}
                                                                          repository={rep}/>)}
            </div>
        )
    } else return null;
};

export const FavouritesList = observer(FavouritesListComponent);