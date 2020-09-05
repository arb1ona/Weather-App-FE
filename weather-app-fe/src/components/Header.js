import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header-style">
                <div>Strive Weather</div>
            </div>
        )
    }
}

