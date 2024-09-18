import {TopLayerLayout} from "../components/layouts/top-layer-layout";
import {Input} from "../components/input";
import {Button} from "../components/button";
import {BodyLayout} from "../components/layouts/body-layout";
import {RepositoriesList} from "../components/repositories-list";
import {FavouritesList} from "../components/favourites-list";
import {MainLayout} from "../components/layouts/main-layout";
import React from "react";

export function MainPage() {
    return (
        <MainLayout>
            <TopLayerLayout>
                <Input placeholder={'Введите название репозитория'}/>
                <Button title={'Копировать'}/>
            </TopLayerLayout>
            <BodyLayout>
                <RepositoriesList/>
                <FavouritesList/>
            </BodyLayout>
        </MainLayout>
    );
};