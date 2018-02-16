import React from 'react'
import SidePanel from './components/SidePanel'
import MainContent from './components/MainContent'
import {
    HashRouter
  } from "react-router-dom";
  
export default class Root extends React.Component {
    render(){
        return (
            <HashRouter>
                <div className="Container">
                    <SidePanel/>
                    <MainContent/>
                </div>
            </HashRouter>
        )
    }
}