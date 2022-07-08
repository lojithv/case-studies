import React, { FC } from "react";
import { useState } from "react";

const initialState = {
    nameList: [] as[],
    test: 'hello'
}

interface Props {
    children: React.ReactNode;
  }

export const Context = React.createContext({} as any)

const ContextInit: React.FC<Props> = ({ children }) => {
    const [stateNew, setStateNew] = useState(initialState)

    return (
        <Context.Provider value= {{stateNew, setStateNew}}>
        { children }
        </Context.Provider>
  )
}