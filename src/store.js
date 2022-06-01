import { createStore , compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//export default function configureStore() {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            }) : compose;
    
    // const enhancer = composeEnhancers(
    //     applyMiddleware()
    // );

    const enhancer = composeEnhancers(
        applyMiddleware(
            thunk
        )
    );

const persistConfig = {
      key: 'root',
      storage,
      whitelist: ['posts'] // which reducer want to store
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

   export const store = createStore(persistedReducer, enhancer);
    export  let persistor = persistStore(store)
