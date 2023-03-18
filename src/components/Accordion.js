import { faqs } from "../utils/accordionData";
import AccordionItem from "../components/AccordionItem";
import { useState } from "react";

const Accordion = () => {

    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
         return setClicked("0");
        }
        setClicked(index);
       };

    return (
      <ul className="accordion">
        {faqs.map((faq, index) => (
          <AccordionItem 
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index} faq={faq} 
          />
        ))}
      </ul>
    );
  };
  
  export default Accordion;