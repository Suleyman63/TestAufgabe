import accordionData from "../pages/accordion";
import AccordionDetails from "./AccordionDetails";

const Accordion = () => {
  return (
    <div className="container accordion">
      <div className="accordion-block">
        {accordionData.map((value, index) => {
          return <AccordionDetails {...value} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Accordion;
