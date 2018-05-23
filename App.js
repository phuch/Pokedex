import React from 'react';
import AppNavigator from './navigators/AppNavigator';

import { Provider } from 'react-redux';
import configureStore from './configure-store';

const store = configureStore();

export default () => {
    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    )
}