import React from 'react';
import { TabTitle } from '../../utilities/title';
import Navbar from '../partials/Navbar';

export default function Home() {
    TabTitle('Home');
    return (
        <div>
            <Navbar></Navbar>
            <div className="d-flex align-items-center justify-content-center" style={{height: "92vh"}}>
                <div className="container-fluid bg-dark flex-column d-flex align-items-center justify-content-center homeBanner">
                    <p className="text-white homeHeader">Welcome WD37</p>
                    <p className="text-white homeDetail">Capstone - Group 3</p>
                </div>
            </div>
        </div>
    )
}