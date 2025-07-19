// DesignProvider.jsx
import React, { createContext, useContext } from "react";

const DesignContext = createContext();

function DesignProvider({ children }) {
    const designStyles = {
        colors: {
            primaryPink: "#FD007D",
            primaryBlue: "#070B80",
            secondaryPink: "#FD007D80",
            secondaryGray: "#474747",
            tertiaryPink: "#FD007D70",
        },
        spacing: {
            sm: "8px",
            md: "16px"
        },
        borderRadius: {
            btnRect: "12px",
            btnCircle: "50%"
        },
        fontSizes: {
            heading1: "36px",
            heading2: "24px",
            text: "16px",
        }
    };
    
    return (
        <DesignContext.Provider value={designStyles}>
            {children}
        </DesignContext.Provider>
    );
}

export { DesignProvider };



export const useDesign = () => useContext(DesignContext);
