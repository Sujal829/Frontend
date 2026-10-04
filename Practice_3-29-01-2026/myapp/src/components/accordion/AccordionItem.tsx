import type { AccordionCommonProps } from "./type"
import { AccordionHeader } from "./AccordionHeader"
import { AccordionBody } from "./AccordionBody"

export const AccordionItem: React.FC<AccordionCommonProps> = ({ item, isOpen, onToggle }) => {
    return (
        <div className="accordion-item">
            <AccordionHeader item={item} isOpen={isOpen} onToggle={onToggle} />
            <AccordionBody item={item} isOpen={isOpen} onToggle={onToggle} />
        </div>
    )
}