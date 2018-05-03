// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export default class Photo extends Component {
    state = {
        isOverlayed: false,
    };

    _showOverlay = () => {
        this.setState({
            isOverlayed: true,
        });
    };

    _hideOverlay = () => {
        this.setState({
            isOverlayed: false,
        });
    };

    render () {
        const { src, likes, comments } = this.props;
        const { isOverlayed } = this.state;

        const actions = isOverlayed ? (
            <div className = { Styles.overlay }>
                <span className = { Styles.heart }>{likes}</span>
                <span className = { Styles.comment }>{comments}</span>
            </div>
        ) : null;

        return (
            <div
                className = { Styles.photo }
                onMouseEnter = { this._showOverlay }
                onMouseLeave = { this._hideOverlay }>
                <img src = { src } />
                {actions}
            </div>
        );
    }
}
