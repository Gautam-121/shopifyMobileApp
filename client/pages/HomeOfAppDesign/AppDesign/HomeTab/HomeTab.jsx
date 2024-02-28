import React from 'react';
import {DndProvider} from 'react-dnd';

import {HTML5Backend} from 'react-dnd-html5-backend';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import "./HomeTab.css";
import DroppableContainer from '../DragAndDropNew/DroppableContainer';


const HomeTab = (props) => {


  



  return (
    <div className='dnd'>
        <DroppableContainer />
    </div>
  )
}

export default HomeTab