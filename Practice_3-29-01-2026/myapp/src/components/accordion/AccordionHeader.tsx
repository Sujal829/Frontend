import type { AccordionCommonProps } from "./type"

export const AccordionHeader: React.FC<AccordionCommonProps> = ({ item, isOpen, onToggle }) => {
    return (
        <button className="accordion-header" onClick={onToggle}>
            {item.title}
            <span className={`arrow ${isOpen ? "open" : ""}`}>v</span>
        </button>
    )
}