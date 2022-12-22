import { createContext, useReducer, useContext } from "react";

const initialState = {
    id: null
}

const reducer = (state= initialState, action) => {
    console.log(action)
    switch(action.type) {

        case "ADD_USER_ID":
            return  { ...state, id: action.payload._id }

        default:
            return state;
}

}

export const FormContext = createContext()

export const FormContextProvider  = ({ children }) => (<FormContext.Provider value={useReducer(reducer, initialState)}>
{children}</FormContext.Provider>)

export const useId = () => useContext(FormContext);