
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider as ReactRedux } from 'react-redux';
import Root from './Root'
import rootReducer from './model/reducers/index'
import ReduxThunk from 'redux-thunk';

require('./bootstrap');

const middleware = applyMiddleware(ReduxThunk)
const store = createStore(rootReducer, middleware)

export default class App extends Component {
    render() {
        return (
            <ReactRedux store={store}>
                <Root/>
            </ReactRedux>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));