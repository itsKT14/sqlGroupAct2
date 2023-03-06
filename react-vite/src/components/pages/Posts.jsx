import React from 'react';
import { TabTitle } from '../../utilities/title';
import Navbar from '../partials/Navbar';

export default function Posts() {
    TabTitle('Posts');
    return (
        <div>
            <Navbar></Navbar>
            Posts
        </div>
    )
}