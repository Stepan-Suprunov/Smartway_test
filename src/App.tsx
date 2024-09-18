import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/main-page";
import {DetailsPage} from "./pages/details-page";

function App() {

    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path="/detailes/" element={<DetailsPage/>} />
        </Routes>
    );
}

export default App;
