export type AccordionId = string;

export interface AccordionContextType {
  open: AccordionId | AccordionId[];
  toggle: (id: AccordionId) => void;
}
