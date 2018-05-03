// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

// Components
import Profile from 'components/Profile';
import Photos from 'components/Photos';

export default class Content extends Component {
    render () {
        return (
            <div className = { Styles.content }>
                <Profile />
                <Photos />
            </div>
        );
    }
}
