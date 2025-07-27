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
            heroGradient: "linear-gradient(90deg, #0B108DA6, #FD007DB5)"
            
        },
        spacing: {
            xs: "5px",
            sm: "8px",
            md: "16px"
        },
        borderRadius: {
            btnRect: "12px",
            inputRadius: "30px",
            btnCircle: "50%"
        },
        fontSizes: {
            heading1: "60px",
            heading2: "36px",
            heading3: "24px",
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