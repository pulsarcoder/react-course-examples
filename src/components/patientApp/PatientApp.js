import React from 'react';
import './patientApp.css';
import SideNav from './sideNav/SideNav';
import Auth from '../auth/Auth';
import Router from '../router/Router';
import PatientLanding from './PatientLanding';
import NotFound from './NotFound';
import NotAuthorised from './NotAuthorised';
import { initialState, AppContext } from './PatientContext';

const navMenus = [
    { label: 'Dashboard', permission: 'dashboard' },
    { label: 'Hospital Inventory', permission: 'inventory' },
    { label: 'Patient Data', permission: 'patient-data' },
    { label: 'Laboratory', permission: 'laboratory' },
    { label: 'Hospital Settings', permission: 'hospital-settings' },
    { label: 'Account Settings', permission: 'account-settings' }
];
const permissions = [
    'dashboard',
    'inventory',
    'laboratory',
    'patient-data',
    'account-settings',
    'hospital-settings'
];
const routes = [
    { path: 'patient-data', component: PatientLanding }
];
const rolePermissions = {
    'admin': [...permissions],
    'doctor': [...permissions.slice(0, 5)],
    'nurse': [...permissions.slice(0, 4)]
};

const users = [
    { username: 'admin', role: 'admin' },
    { username: 'doctor', role: 'doctor' },
    { username: 'nurse', role: 'nurse' }
];


export default class PatientApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: '',
            userRole: '',
            userPermissions: [],
            currentRoute: '',
            routedComponent: '',
            theme: 'light'
        };
    }

    login = (username) => {
        const userRole = users.find(u => u.username === username).role;
        const userPermissions = rolePermissions[userRole];
        console.log(userPermissions);
        this.setState({ loggedIn: true, username, userRole, userPermissions });
    }

    logout = () => {
        this.setState({ username: 'imnew', theme: 'dark' });
    }

    onNavClick = (routeName) => {
        console.log(routeName);
        const userPermissions = this.state.userPermissions;
        const route = routes.find(r => r.path === routeName);
        const permExists = userPermissions.includes(routeName);
        const routedComponent = route ? route.component : permExists ? NotFound : NotAuthorised;
        this.setState({ routedComponent, currentRoute: routeName });
    }

    render() {
        const RoutedComponent = this.state.routedComponent;
        const appComponent = (
            <AppContext.Provider value={this.state}>
                <div className="flex-container">
                    <SideNav
                        navMenus={navMenus}
                        onNavClick={this.onNavClick}
                        logout={this.logout} />
                    <Router>
                        {RoutedComponent === '' ? '' : <RoutedComponent />}
                    </Router>
                </div>
            </AppContext.Provider>
        );
        return this.state.loggedIn ? appComponent : <Auth login={this.login} users={users} />;
    }
}