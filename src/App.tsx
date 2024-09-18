import React from 'react';
import {MainLayout} from "./components/layouts/main-layout";
import {TopLayerLayout} from "./components/layouts/top-layer-layout";
import {Input} from "./components/input";
import {Button} from "./components/button";
import {RepositoriesList} from "./components/repositories-list";

function App() {

    // const [repositoryTitle, setRepositoriesTitle] = React.useState<string>("");

    return (
        <MainLayout>
            <TopLayerLayout>
                <Input placeholder={'Введите название репозитория'}
                       // setTitle={setRepositoriesTitle}
                />
                <Button title={'Найти'} />
            </TopLayerLayout>
            {/*<RepositoriesList title={repositoryTitle}/>*/}
            <RepositoriesList />
        </MainLayout>
    );
}

export default App;
