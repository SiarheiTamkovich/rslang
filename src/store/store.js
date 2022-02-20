import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { notesReducer } from './notes/notesReducer';
import { usersReducer } from './users/usersReducer';
import { wordsReducer } from './words/wordsReducer';

const persistConfig = {
  key: 'root',
  storage,
}

export const rootReducer = combineReducers({
  notes: notesReducer,
  users: usersReducer,
  words: wordsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);
