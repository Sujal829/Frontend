import type { AccordionCommonProps } from "./type"

export const AccordionBody: React.FC<AccordionCommonProps> = ({ item, isOpen, onToggle }) => {
    return (
        <div className={`accordion-content ${isOpen ? "open" : ""}`}>
            <div className="accordion-body">
                {item.content}
            </div>
        </div>
    )
}