import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Outlet } from 'react-router-dom';

//Layout è la struttura base della nostra applicazione

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <main>
                {/* Outlet rappresenta il contenitore dove iniettare il contenuto della pagina */}
                <Outlet />
            </main>
        </>
    );
};

export default DefaultLayout