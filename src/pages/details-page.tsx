import {DetailedRepository} from "../components/detailed-repository";
import React, {useEffect} from "react";
import {detailRepositoryStore} from "../stores";
import {observer} from "mobx-react";

function DetailsPageComponent () {


    useEffect(() => {
        detailRepositoryStore.getRequest();
    }, []);

    if (detailRepositoryStore.isLoading) {
        return (
            <span>Loading</span>
        );
    };

    if (detailRepositoryStore.repository) {
        return (
            <DetailedRepository repository={detailRepositoryStore.repository}/>
        );
    } else return null;
};

export const DetailsPage = observer(DetailsPageComponent);