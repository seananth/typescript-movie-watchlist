import React, { createContext, useReducer } from "react";
import { movieProps } from "../interfaces/interfaces";

//initial state
const initialState: stateProps = {
  watchlist: [],
  favorites: [],
};

interface stateProps {
  watchlist: movieProps[];
  favorites: movieProps[];
}

type AppState = typeof initialState;
type Action =
  | { type: "ADD_TO_WATCHLIST"; payload: movieProps }
  | { type: "ADD_TO_FAVORITES"; payload: movieProps }
  | { type: "REMOVE_FROM_WATCHLIST"; payload: number }
  | { type: "REMOVE_FROM_FAVORITES"; payload: number };

interface GlobalProviderProps {
  children: React.ReactNode;
}

//create context
export const GlobalContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie: movieProps) => movie.id !== action.payload
        ),
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie: movieProps) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

//provider
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
