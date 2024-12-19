import { createContext, useContext } from "react";

const widthContext = createContext("");

export default widthContext.Provider;

export function useWidth() {
    return useContext(widthContext);
}
