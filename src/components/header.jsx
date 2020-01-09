import React from 'react';

import {Link} from 'react-router-dom';
// import { withRouter } from "react-router-dom";
// import { connect } from "unistore/react";

// import { actions, getNewsListByCategory } from "../store";

import logo from '../logo.svg';
import '../css/header.css';

class Header extends React.Component{

    render() {
        return (
            <header>
                <div className="container">
                    {/* <div className="row align-items-center"> */}
                    <div className="row">
                        <div className="col-md-2">
                            <a href="" className="header-logo">
                                <img src={logo} />
                            </a>
                        </div>
                        <div className="col-md-10">
                            <div className="header-nav">
                                <ul className="header-nav__list list-unstyled">  
                                    {/* <li>
                                        <SearchBox {...this.props}/>
                                    </li> */}
                                    <li> 
                                        <Link to="/">Home</Link>
                                    </li>                                   
                                    <li>
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/" onClick={this.props.storeHandleLogout}>LOGOUT</Link>
                                    </li> */}
                                </ul>
                            </div> 
                        </div>
                        
                    </div>
                </div>
            </header>          
        );
    }
}

export default Header;




    

    

    