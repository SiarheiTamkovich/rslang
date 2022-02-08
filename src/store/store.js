import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { notesReducer } from './notes/notesReducer';
import { movieReducer, movieAboutReducer } from './movie/movieReducer';
import { favoriteReducer } from './movie/favoriteReducer';

const persistConfig = {
  key: 'root',
  storage,
}

export const rootReducer = combineReducers({
  notes: notesReducer,
  movie: movieReducer,
  movie_about: movieAboutReducer,
  movie_favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);
