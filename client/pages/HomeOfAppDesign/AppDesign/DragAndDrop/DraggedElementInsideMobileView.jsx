import React, { useState } from 'react'
import { useDrag, useDrop } from "react-dnd";
import "./DraggedElementInsideMobileView.css";

const DraggedElementInsideMobileView = ({ ele, id, title, styleObj }) => {
  
  let parsedHtml;
try {
  parsedHtml = new DOMParser().parseFromString(ele && ele, "text/html");
  console.log("Parsed HTML:", parsedHtml);
  console.log("Parsed HTML Body:", parsedHtml.body);
  console.log("Parsed HTML Inner HTML:", parsedHtml.documentElement.innerHTML);
} catch (error) {
  console.error("Error parsing HTML:", error);
  return null; // Render nothing if there's an error parsing HTML
}


  if (!parsedHtml || !parsedHtml.body) {
    console.error("Parsed HTML or its body is undefined:", parsedHtml);
    return null; // Render nothing if parsed HTML or its body is undefined
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Function to recursively render parsed HTML nodes
  const renderHtmlNodes = (nodes) => {
    return Array.from(nodes).map((node, index) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      } else {
        return (
          <div key={index}>
            {node.tagName.toLowerCase() === "img" ? (
              <img src={node.src} alt={node.alt} style={styleObj} />
            ) : (
              renderHtmlNodes(node.childNodes)
            )}
          </div>
        );
      }
    });
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      ref={drag}
      className={`${isDragging ? 'DraggedElementInsideMobileView-elements-div' : 'DraggedElementInsideMobileView-dragging'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderHtmlNodes(parsedHtml.body.childNodes)}
    </div>
  );
};

export default DraggedElementInsideMobileView;
