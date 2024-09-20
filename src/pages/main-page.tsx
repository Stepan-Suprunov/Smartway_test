import React from "react";
import {MainLayout, BodyLayout, TopLayerLayout} from "../components/layouts/index";
import {Input, RepositoriesList, FavouritesList} from '../components/index'

export function MainPage() {
    return (
        <MainLayout>
            <TopLayerLayout>
                <Input placeholder='Введите название репозитория'/>
            </TopLayerLayout>
            <BodyLayout>
                <RepositoriesList/>
                <FavouritesList/>
            </BodyLayout>
        </MainLayout>
    );
};