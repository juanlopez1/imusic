import {createStore, applyMiddleware, compose} from 'redux';
import {persistState} from 'redux-devtools';
import saga from 'redux-saga';

import DevTools from '../containers/DevTools';
import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = saga();

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

const configureStore = initialState => {
    const store = createStore(reducers, initialState, enhancer);
    sagaMiddleware.run(sagas);
    return store;
};

export default configureStore;
