import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage, DetailsPage, PageNotFound} from "./pages/index";

function App() {

    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path="/detailes/" element={<DetailsPage/>} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes >
    );
}

export default App;
