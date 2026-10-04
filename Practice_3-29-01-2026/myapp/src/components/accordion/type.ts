export interface AccordionItemProps {
    id: string;
    title: string;
    content: string | React.ReactNode;
}

export interface AccordionProps {
    items: AccordionItemProps[];
    allowMultiple?: boolean;
}

export interface AccordionCommonProps {
    item: AccordionItemProps;
    isOpen: boolean;
    onToggle: () => void;
}