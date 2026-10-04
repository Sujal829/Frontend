import type React from "react"

interface Props {
    children: React.ReactNode;
}
export const AccordionItem:React.FC<Props> = ({children}) => {
    return (
        <div className="accordion-item">{children}</div>
    )
}