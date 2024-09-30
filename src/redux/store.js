import { configureStore } from "@reduxjs/toolkit"
import contactsReducer from "../redux/contacts/slice"
import filterReducer from "../redux/filters/slice"
import { authReducer } from "./auth/slice"

import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistedContactsReducer = persistReducer(
    {
        key: 'contacts', // pзмінити на token
        storage,
        whitelist: ["items"]
    }, // змінити на token
    contactsReducer)


export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: persistedContactsReducer,
        filters: filterReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)