import React from 'react'
import {NavLink} from "react-router-dom";

export default class SidePanel extends React.Component {
    render(){
        return(
            <section className="Side__panel">
                    <div className="title">Corporate</div>
                    <nav className="Nav__menu">
                        <NavLink className="Nav__item" activeClassName="Nav__item active" to="/feedback">Feedback</NavLink>
                        <NavLink className="Nav__item" activeClassName="Nav__item active" to="/about">About</NavLink>
                        <NavLink className="Nav__item" activeClassName="Nav__item active" to="/contact">Contact</NavLink>
                    </nav>
                    <div className="divided">***</div>
                    <nav className="Nav__menu">
                        <NavLink className="Nav__item" activeClassName="Nav__item active" to="/list/feedback">List of Feedback</NavLink>
                    </nav>
            </section>
        )
    }
}