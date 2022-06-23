import accordionData from "../pages/accordion";
import AccordionDetails from "./AccordionDetails";

const Accordion = () => {
  return (
    <>
      <div className="accordion-block">
        <div>
          {accordionData.map((value, id) => {
            return <AccordionDetails {...value} key={id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
