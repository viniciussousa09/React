import { createContext } from "react";

export const Somecontext = createContext();


export const HookUseContext = ({ children }) => {
    const contextValue = "testing context";
    return (
        <Somecontext.Provider value={{ contextValue }}>
            {children}
        </Somecontext.Provider>
    );
};

export default HookUseContext;
