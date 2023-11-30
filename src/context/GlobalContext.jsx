import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalInfoProvider = ({ children }) => {
    const [itemCount, setItemCount] = useState(0);

    return (
        <GlobalContext.Provider
            value={{
                itemTotal: [itemCount, setItemCount],
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalInfoProvider;
