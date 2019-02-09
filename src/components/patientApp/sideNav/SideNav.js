import React from 'react';
import logo from '../../../logo.svg';

export default class SideNav extends React.Component {
    render() {
        console.log(this.props.userPermissions);
        console.log('currentRoute', this.props.currentRoute);
        return (
            <aside className="side-nav">
                <div className="user-profile">
                    <img src={logo} alt="avatar" className="avatar" />
                    <h4>Hi, {this.props.username}</h4>
                </div>
                <nav>
                    <ul>
                        {this.props.navMenus.map(menu => 
                            ((this.props.userPermissions.includes(menu.permission)) || true)?
                                <li className={menu.permission === this.props.currentRoute ? 'active' : ''}
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