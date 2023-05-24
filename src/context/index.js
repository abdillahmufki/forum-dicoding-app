import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export const GlobalProvider = (props) => {
    const [render, setRender] = useState(false);
    function forceRender() {
        return setRender(!render);
    }

    // value
    const value = {
        render, forceRender
    }

    return <GlobalContext.Provider value={value} {...props} />;
}

