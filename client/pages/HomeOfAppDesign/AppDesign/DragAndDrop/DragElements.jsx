import React, { useState } from 'react'
import { useDrag, useDrop } from "react-dnd";
import "./DragElements.css";



const DragElements = ({ ele, id, title }) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'div',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),

  }));



  const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

  return (
    <>
    {/* {hovered && (
        <div className="buttons-container">
          <button onClick={() => console.log("Button 1 clicked")}>Button id {id}</button>
          <button onClick={() => console.log("Button 2 clicked")}>Button 2</button>
        </div>
      )} */}

    <div ref={drag} className={`${isDragging ? 'elements-div' : 'dragging'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      
      {ele && ele}

    </div>
    </>

    

  )
}

export default DragElements