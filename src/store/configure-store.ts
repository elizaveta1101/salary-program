/**
 * Create the store with dynamic reducers
 */

import {AnyAction, configureStore, EnhancedStore, Middleware, Dispatch} from '@reduxjs/toolkit';
import {createInjectorsEnhancer} from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import {RootState} from 'types/root-state';

import type {InjectedReducersType} from 'utils/injector-typings';

import {createReducer} from './reducers';

let store: EnhancedStore<unknown, AnyAction, Middleware<unknown, unknown, Dispatch<AnyAction>>[]>;

export function configureAppStore(
    preloadedState: Partial<RootState> = {},
    injectedReducers: InjectedReducersType = {}
): ReturnType<typeof configureStore> {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const {run: runSaga} = sagaMiddleware;

    // Create the store with saga middleware
    const middlewares = [sagaMiddleware /* checkJwtMiddleware */];

    const enhancers = [
        createInjectorsEnhancer({
            createReducer,
            runSaga,
        }),
    ];

    store = configureStore({
        reducer: createReducer(injectedReducers),
        middleware: [...middlewares],
        devTools: process.env.NODE_ENV !== 'production',
        enhancers,
        preloadedState,
    });

    // runSaga(rootSaga);

    return store;
}

export const getStore = (): typeof store => store;
