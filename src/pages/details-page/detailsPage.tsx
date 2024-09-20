import {DetailedRepository} from "../../components/detailed-repository";
import React, {useEffect} from "react";
import {detailRepositoryStore} from "../../stores";
import {observer} from "mobx-react";
import loader from '../../assets/img/loader.gif'
import styles from './style.module.css'

function DetailsPageComponent () {


    useEffect(() => {
        detailRepositoryStore.getRequest();
    }, []);

    if (detailRepositoryStore.isLoading) {
        return (
                <img className={styles.Loader} src={loader} alt='Loading'/>
        );
    };

    if (detailRepositoryStore.repository) {
        return (
            <DetailedRepository repository={detailRepositoryStore.repository}/>
        );
    } else return null;
};

export const DetailsPage = observer(DetailsPageComponent);