import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="container">
                <Header />
                <MainContent />
            </div>
        )
    }
}

export default App;