import { useState } from "react"
import type { AccordionItemProps, AccordionProps } from "./type"
import { AccordionItem } from "./AccordionItem";
import './style.css';

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple }) => {
    const [openIds, setOpenIds] = useState<string[]>([]);

    const handleToggle = (id: string) => {
        setOpenIds((prev) =>
            allowMultiple
                ? prev.includes(id)
                    ? prev.filter((item) => item !== id)
                    : [...prev, id]
                : prev.includes(id)
                    ? []
                    : [id]
        )
    }
    return (
        <div className="accordion">
            {items.map((item: AccordionItemProps) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openIds.includes(item.id)}
                    onToggle={() => handleToggle(item.id)}
                />
            ))}
        </div>
    )
}

export default Accordion;