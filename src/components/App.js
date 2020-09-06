import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
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
