import React, { useContext } from "react";
import type { AccordionContextType } from "./type";

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export const useAccordion=()=>{
    const context = useContext(AccordionContext);
    if(!context){
        throw new Error("useAccordion must be used within an Accordion Provider")
    }
    return context;
}

export default AccordionContext;