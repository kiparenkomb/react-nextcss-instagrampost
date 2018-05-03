// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import avatar from 'theme/assets/images/joe';

export default class Profile extends Component {
    render () {
        return (
            <div className = { Styles.profile }>
                <div className = { Styles.layout }>
                    <img src = { avatar } />
                    <div>
                        <div className = { Styles.nickname }>Joey66</div>
                        <div className = { Styles.stats }>
                            <span>39&nbsp;</span>
                            <span>posts</span>
                            <span>1256&nbsp;</span>
                            <span>followers</span>
                            <span>7&nbsp;</span>
                            <span>following</span>
                        </div>
                        <div className = { Styles.name }>Joey Tribbiani</div>
                    </div>
                </div>
            </div>
        );
    }
}
