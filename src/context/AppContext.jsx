import { createContext } from "react";

export const GlobalContext = createContext()

const injectContext = (Component) => {

    const StoreWrapper = () => {

        /* useState */
        
        /* useEffect */

        return (
            <GlobalContext.Provider value={{ name: 'Luis' }}>
                <Component /> /* children */
            </GlobalContext.Provider>
        )
    }

    return StoreWrapper;
}

export default injectContext;