import { configureStore } from '@reduxjs/toolkit'
import folderDataReducer from './slice/folderDataSlice'
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';


const rootReducers = combineReducers({
    folderDataSlice : folderDataReducer
})

const persistConfig = {
    key: 'finance-tracker',
    storage,
    transforms:[]
}

const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({  
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store);