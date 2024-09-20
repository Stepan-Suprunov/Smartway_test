import React from "react";
import {MainLayout, BodyLayout} from "../components/layouts/index";
import {SearchBlock, RepositoriesList, FavouritesList} from '../components/index'

export function MainPage() {
    return (
        <MainLayout>
            <SearchBlock/>
            <BodyLayout>
                <RepositoriesList/>
                <FavouritesList/>
            </BodyLayout>
        </MainLayout>
    );
};