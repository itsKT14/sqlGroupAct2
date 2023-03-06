import React from 'react';
import { TabTitle } from '../../utilities/title';
import Navbar from '../partials/Navbar';

export default function Comments() {
    TabTitle('Posts');
    return (
        <div>
            <Navbar></Navbar>
            Comments
        </div>
    )
}