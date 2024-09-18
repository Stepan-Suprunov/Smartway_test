import React from 'react';
import {MainLayout} from "./components/layouts/main-layout";
import {TopLayerLayout} from "./components/layouts/top-layer-layout";
import {Input} from "./components/input";
import {Button} from "./components/button";
import {RepositoriesList} from "./components/repositories-list";
import {BodyLayout} from "./components/layouts/body-layout";
import {FavouritesList} from "./components/favourites-list";

function App() {

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
}

export default App;
