import React, { Component } from 'react'
import { isAuth, logout } from '../helpers/auth';
import HeaderLogin from './HeaderLogin';
import HeaderNotLogin from './HeaderNotLogin';

export class Header extends Component {
    render() {
        return (
            <div>
                {isAuth()? 
                <HeaderLogin /> : <HeaderNotLogin />}
            </div>
        )
    }
}

export default Header
