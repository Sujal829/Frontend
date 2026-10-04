import { useAccordion } from "./AccordionContext";

interface Props {
  children: React.ReactNode;
  accordionId: string;
}

export const AccordionBody: React.FC<Props> = ({ children, accordionId }) => {
  const { open } = useAccordion();

  const isOpen = Array.isArray(open)
    ? open.includes(accordionId)
    : open === accordionId;

  return (
    <div className={`accordion-content ${isOpen ? "open" : ""}`}>
      <div className="accordion-body">{children}</div>
    </div>
  );
};
