import React, {useReducer, createContext, useContext} from "react"

//Prepare the data layer

export const StateContext= createContext();

// wrap our app and provide the data

export const StateProvider = ({reducer,initialState, children})=>(
    <StateContext.Provider value= {useReducer(reducer, initialState)}>
        {children}
        </StateContext.Provider>
)

//Pull information from the data layer

export const useStatevalue =()=> useContext(StateContext)