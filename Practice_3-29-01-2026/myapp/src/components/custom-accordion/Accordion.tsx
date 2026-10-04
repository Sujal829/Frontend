import AccordionContext from "./AccordionContext";
import type { AccordionContextType } from "./type";
import "./style.css";

interface AccordionProps extends AccordionContextType {
  children: React.ReactNode;
}

const Accordion = ({ open, toggle, children }: AccordionProps) => {
  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
