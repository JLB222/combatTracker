import { useState, useEffect, useRef } from "react";

export default function Tooltip(props) {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef(null);

const handleDocumentClick = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setVisible(false); // Close if clicking outside
    }
};
//runs anytime the document is clicked (anywhere).  
//If what the user clicks is outside the tooltip container, it hides the active tooltip

useEffect(() => {
    if (visible) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [visible]);
//runs whenever visible changes, because its in the dependency array.  
//When opening a tooltip, adds the click listener to the entire document.
//when closing the tooltip or unmounting the component, it'll remove the event listener to prevent memory leaks or other unwanted behavior
//the cleanup return at the end is to ensure that if the component is removed from the DOM, it won't leave the listener behind

const toggleTooltip = () => {
    setVisible((prev) => !prev);
};
//simply toggles the visibility between true and false

return (
    <div ref={tooltipRef} className="relative inline-block tooltip-container">
      <li
        onClick={toggleTooltip}
        onBlur={() => setVisible(false)}
      >
        {props.children}
      </li>

      {visible && (
        <p className={`tooltip-box ${visible ? "visible" : ""} tooltip-box`}>
            {props.text}
        </p>
        )}
    </div>
  );
}