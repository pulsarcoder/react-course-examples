import React from 'react';
import logo from '../../../logo.svg';
import { AppContext } from '../PatientContext';

export default class SideNav extends React.Component {
    static contextType = AppContext;
    render() {
        const {username, userPermissions, currentRoute} = this.context;
        console.log(this.context);
        console.log('currentRoute', currentRoute);
        return (
            <aside className="side-nav">
                <div className="user-profile">
                    <img src={logo} alt="avatar" className="avatar" />
                    <h4>Hi, {username}</h4>
                </div>
                <nav>
                    <ul>
                        {this.props.navMenus.map(menu => 
                            ((userPermissions.includes(menu.permission)) || true)?
                                <li className={menu.permission === currentRoute ? 'active' : ''}
                                    onClick={() => this.props.onNavClick(menu.permission)}>
                                    {menu.label}
                                </li>
                                : ''                            
                        )}
                        <li onClick={this.props.logout}>Logout</li>
                    </ul>
                </nav>
            </aside>
        );
    }
}