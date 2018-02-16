import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from "react-router-dom";
import {Redirect, withRouter, Router} from 'react-router';
import { Feedback,About, Contact, Login, ListFeedback } from '../containers/index'

class MainContent extends Component {
    render(){
        return (
            <section className="Main__content">
                <Route path='/feedback' component={Feedback}/>
                <Route path='/list/feedback' component={ListFeedback}/>
                <Redirect from='/' to='/feedback'/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <section className="Footer">Made with ❤ by Azam using Laravel</section>
            </section>
        )
    }
}

export default MainContent