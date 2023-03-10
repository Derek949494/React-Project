const AccordionItem = ({ faq, onToggle, active }) => {
    const { name, answer,  } = faq;
    return (
     <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
       {name}
       <span className="control">{active ? "—" : "+"} </span>
      </button>
      <div className={`answer_wrapper ${active ? "open" : ""}`}>
       <div className="answer">{answer}</div>
       {/* <div className="source">{src}</div> */}
      </div>
     </li>
    );
   };
   
   export default AccordionItem;