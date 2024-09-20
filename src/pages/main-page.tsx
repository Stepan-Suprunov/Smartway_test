import React from "react";
import {MainLayout, BodyLayout, TopLayerLayout} from "../components/layouts/index";
import {SearchBlock, RepositoriesList, FavouritesList} from '../components/index'

export function MainPage() {
    return (
        <MainLayout>
            <TopLayerLayout>
                <SearchBlock/>
            </TopLayerLayout>
            <BodyLayout>
                <RepositoriesList/>
                <FavouritesList/>
            </BodyLayout>
        </MainLayout>
    );
};