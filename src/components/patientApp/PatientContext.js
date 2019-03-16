import React from 'react';

export const initialState = {
    loggedIn: false,
    username: '',
    userRole: '',
    userPermissions: [],
    currentRoute: '',
    routedComponent: ''
};

export const AppContext = React.createContext(initialState);