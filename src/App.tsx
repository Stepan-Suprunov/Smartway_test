import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage, DetailsPage} from "./pages";

function App() {

    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path="/detailes/" element={<DetailsPage/>} />
        </Routes>
    );
}

export default App;
