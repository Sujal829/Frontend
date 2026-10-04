import { useAccordion } from "./AccordionContext";

interface Props {
  children: React.ReactNode;
  targetId: string;
}
export const AccordionHeader: React.FC<Props> = ({ children, targetId }) => {
  const { toggle } = useAccordion();
  return (
    <button
      className="accordion-header"
      onClick={() => toggle(targetId)}
      type="button"
    >
      {children}
    </button>
  );
};
