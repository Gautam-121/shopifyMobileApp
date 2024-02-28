import React, { useState, useEffect, useCallback } from 'react';
import "./DragAndDrop.css";

import DragElements from './DragElements';
import { useDrop } from "react-dnd";
import { Divider, TextField, LegacyStack, RadioButton, Tooltip, Icon, ColorPicker } from '@shopify/polaris';
import { ChromePicker } from 'react-color';
import { dragAndPushElement, removeElementFromDropbox, hideElementFromDropbox } from '../../../../store/draggedElementsSlice';
import { useDispatch, useSelector } from "react-redux";

import { ViewIcon } from '@shopify/polaris-icons';

import styled, { keyframes } from 'styled-components';
import DraggedElementInsideMobileView from "./DraggedElementInsideMobileView";
import ReactDOM from 'react-dom';


const DragAndDrop = () => {


    const dispatch = useDispatch();

    const theDraggedElements = useSelector((state) => state.draggedElementsSlice);

    const draggableELements = [
        {
            id: 1,

            title: "Announcement bar",
            _order: 1,
            isVisible: false,
            displayOrder: 1,
            featureType: "announcement",
            layoutType: "horizontal",
            data: {
                id: 1,
                message: "Up to 50% off New Arrivals",
                textColor: "#000000",
                backgroundColor: "#FFFFFF",
                animationType: "Left To Right",
                updatedAt: "2024-02-21T07:42:55.041Z",
                createdAt: "2024-02-21T07:42:55.041Z"
            },
            style: {
                color: "#000000",
                backgroundColor: "#FFFFFF",
                border:"1px solid red",
                padding: '50px'
            },
            
            element: <div className='dnd-design-block-element-parent-div'>
                <div className='dnd-element-skeleton-div'>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                </div>

            </div>,
        },
        {
            id: 2,
            title: "Image banner slider",
            isVisible: true,
            _order: 2,
            displayOrder: 2,
            featureType: "banner",
            layoutType: "horizontal",
            data: {
                id: 2,

                images: [],
                backgroundColor: "#FE6100",
                updatedAt: "2024-02-21T07:42:55.041Z",
                createdAt: "2024-02-21T07:42:55.041Z"
            },
            element: <div className='dnd-design-block-element-parent-div'>
                <div className='dnd-element-skeleton-div'>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                </div>

            </div>,

        },
        {
            id: 3,
            title: "Image banner",
            isVisible: true,
            _order: 3,
            displayOrder: 3,
            featureType: "banner",
            layoutType: "vertical",
            data: {
                id: 3,

                images: [],
                backgroundColor: "#FE6100",
                updatedAt: "2024-02-21T07:42:55.041Z",
                createdAt: "2024-02-21T07:42:55.041Z"
            },
            element: <div className='dnd-design-block-element-parent-div'>
                <div className='dnd-element-skeleton-div'>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                </div>
            </div>,
        },
        {
            id: 4,
            title: "Collection card slider",
            isVisible: true,
            _order: 4,
            displayOrder: 4,
            featureType: "collection",
            layoutType: "horizontal",
            data: {
                id: 4,

                collection: [],//fetch and store any one of the collections in a slider by default and use in the below element
                backgroundColor: "#FE6100",
                updatedAt: "2024-02-21T07:42:55.041Z",
                createdAt: "2024-02-21T07:42:55.041Z"
            },
            element: <div className='dnd-design-block-element-parent-div'>
                <div className='dnd-element-skeleton-div'>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                </div>

            </div>,
        },

        {
            id: 5,
            title: "Collection grid",
            isVisible: true,
            _order: 5,
            displayOrder: 5,
            featureType: "collection",
            layoutType: "horizontal",
            data: {
                id: 5,

                collection: [],//fetch and store any one of the collection data by default and use in the below element
                backgroundColor: "#FE6100",
                updatedAt: "2024-02-21T07:42:55.041Z",
                createdAt: "2024-02-21T07:42:55.041Z"
            },
            element: <div className='dnd-design-block-element-parent-div'>
                <div className='dnd-element-skeleton-div'>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                </div>

            </div>,
        },
        {
            id: 6,
            title: "Products grid",
            isVisible: true,

            _order: 6,
            displayOrder: 6,
            featureType: "product",
            layoutType: "horizontal",
            data: {
                id: 6,

                collection: [],//fetch and store any one of the collection product data by default and use in the below element
                backgroundColor: "#FE6100",
                updatedAt: "2024-02-21T07:42:55.041Z",
                createdAt: "2024-02-21T07:42:55.041Z"
            },
            element: <div className='dnd-design-block-element-parent-div'>
                <div className='dnd-element-skeleton-div'>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                </div>

            </div>,
        },
        {
            id: 7,
            title: "Products slider",
            isVisible: true,
            _order: 7,
            displayOrder: 7,
            featureType: "product",
            layoutType: "horizontal",
            data: {
                id: 7,

                collection: [],//fetch and store any one of the collection data by default and use in the below element
                backgroundColor: "#FE6100",
                updatedAt: "2024-02-21T07:42:55.041Z",
                createdAt: "2024-02-21T07:42:55.041Z"
            },
            element: <div className='dnd-design-block-element-parent-div'>
                <div className='dnd-element-skeleton-div'>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                </div>

            </div>,
        },
        {
            id: 8,
            title: "Square image grid",
            isVisible: true,
            _order: 8,
            displayOrder: 8,
            featureType: "image",
            layoutType: "horizontal",
            data: {
                id: 8,
                images: [],//fetch and store any one of the collection data by default and use in the below element
                backgroundColor: "#FE6100",
                updatedAt: "2024-02-21T07:42:55.041Z",
                createdAt: "2024-02-21T07:42:55.041Z"
            },
            element: <div className='dnd-design-block-element-parent-div'>
                <div className='dnd-element-skeleton-div'>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                </div>

            </div>,
        },
        {
            id: 19,
            title: "Full-width image",
            isVisible: true,
            _order: 9,
            displayOrder: 9,
            featureType: "images",
            layoutType: "horizontal",
            data: {
                id: 9,

                image: [],//fetch and store any one of the collection data by default and use in the below element
                backgroundColor: "#FE6100",
                updatedAt: "2024-02-21T07:42:55.041Z",
                createdAt: "2024-02-21T07:42:55.041Z"
            },
            element: <div className='dnd-design-block-element-parent-div'>
                <div className='dnd-element-skeleton-div'>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                    <div className='dnd-element-skeleton'></div>
                </div>

            </div>,
        },

    ]


    //filter out the dragged elements from the redux store to persist the page reload
    const filteredDraggedElementsUsingReduxStore = draggableELements?.filter(item1 => theDraggedElements.some(item2 => item1.id === item2.id))


    const [dropBox, setDropBox] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({

        accept: "div",

        drop: (item) => addELementsToDropBox(item.id),

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    //add the dragged elements to the DropBox or to your redux store



    // ISSUE: NOW IT DOESN'T WORK BECASEU YOURE USING THE
    // DROPBOX DATA filteredDraggedElementsUsingReduxStore TO FILTER AND RENDER IN THE MOBILE EMULATOR UI
    // YOU CAN CREATE A NEW ARRAY IN THE STORE AND USE IT TO GET A UPDATED LIST

    const removeElementsFromDropBox = (event, id) => {
        // // Find the element with the specified id
        // const removedElement = draggableELements.find(item => item.id === id);

        // // If the removed element exists, remove it from the drop box
        // if (removedElement) {
        //     const updatedDropBox = dropBox.filter(item => item.id !== id);
        //     setDropBox(updatedDropBox);
        // }
        event.stopPropagation();
        dispatch(removeElementFromDropbox(id));

    };


    const hideElementsFromDropBox = (event, theid) => {

        event.stopPropagation();

        dispatch(hideElementFromDropbox(theid));

    }



    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);



    useEffect(() => {

        const handleResize = () => setDeviceWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);



    //for announcement 
    const [elementToDesign, setElementToDesign] = useState();

    const elementToDesignHandler = (id) => {

        setElementToDesign(id);

    }

    const theElementToDesign = draggableELements.filter(res => res.id === elementToDesign && elementToDesign);


    const [announcementElementText, setAnnouncementElementText] = useState('50% off New Arrivals');

    const handleAnnouncementElementTextChange = useCallback(
        (newValue) => setAnnouncementElementText(newValue),
        [],
    );




    //for announcement animation
    const [animationValue, setAnimationValue] = useState('none');

    const handleAnimationChange = (event) => {
        setAnimationValue(event.target.value);
    };

    //text color input

    //color picker for annoucnement bar

    //for text color
    const [Fcolor, setFColor] = useState('##040303');

    const handleTextFColorInputValueChange = useCallback(
        (newValue) => setFColor(newValue),
        [],
    );

    const handleTextFColorPicker = useCallback(
        (newValue) => setFColor(newValue.hex),
        [],
    );


    //for background color
    const [Bcolor, setBColor] = useState('#ffffff');

    const handleTextBColorPicker = useCallback(
        (newValue) => setBColor(newValue.hex),
        [],
    );

    const handleTexBColorInputValueChange = useCallback(
        (newValue) => setBColor(newValue),
        [],
    );



    //announcementbar object
    const announcementELement = {
        text: announcementElementText && announcementElementText,
        backgroundColor: Bcolor && Bcolor,
        foregroundColor: Fcolor && Fcolor,
        animation: animationValue && animationValue,
    }


    // Define the keyframes for the animation
    const moveText = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(100%);
}
`;

    // Create a styled component for the moving span
    const MovingAnnouncementLeftToRightSpan = styled.span`
display: inline-block;
animation: ${moveText} 5s linear infinite alternate; /* Apply the animation */
`;


    //right-to-eft
    const moveText2 = keyframes`
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(0);
}
`;

    // Create a styled component for the moving span
    const MovingAnnouncementRightToLeftSpan = styled.span`
display: inline-block;
animation: ${moveText} 5s linear infinite alternate; /* Apply the animation */
`;


const serializeJSX = (jsxElement) => {
    const tempElement = document.createElement('div');
    //tempElement.appendChild(jsxElement.cloneNode(true)); // Clone the element to preserve its content
    return tempElement.innerHTML;
  };

    const addELementsToDropBox = (id) => {

        // Filter draggable elements
const elementsList = draggableELements?.filter((item) => item.id === id);

// Ensure elementsList is not empty and retrieve the first element
const selectedElement = elementsList?.[0];

// console.log("selectedElement.element: before", selectedElement.element);
// Check if selectedElement is available
if (selectedElement) {
    // Create the HTML element based on the condition
    selectedElement.element = id === 1 ? 
        <div style={{
                    backgroundColor: announcementELement?.backgroundColor,
                    color: announcementELement?.foregroundColor,
                    padding: '10px',
                    textAlign: 'center',
                }}>
            {selectedElement.data.animationType === 'Left To Right' ? 
                <MovingAnnouncementLeftToRightSpan style={{ color: `${announcementELement?.foregroundColor}` }}>
                    {announcementELement?.text && announcementELement?.text}
                </MovingAnnouncementLeftToRightSpan>
             : 
                <MovingAnnouncementRightToLeftSpan style={{ color: `${announcementELement?.foregroundColor}` }}>
                    {announcementELement?.text && announcementELement?.text}
                </MovingAnnouncementRightToLeftSpan>
            }
        </div>
     : null;

     console.log("selectedElement.element: after", selectedElement.element);

    // // Create a temporary container for serialization
    // const tempContainer = document.createElement('div');

    // // Render the React element into the container
    // ReactDOM.render(selectedElement.element, tempContainer);

    // console.log("tempContainer: ", tempContainer);

    // // Serialize the HTML content
    // const serializedHTML = tempContainer.innerHTML;

    // Update state
    setDropBox((dropBox) => [...dropBox, selectedElement]);

    // Dispatch the action with the serialized HTML
    dispatch(dragAndPushElement({ 
        id: selectedElement.id, 
        title: selectedElement.title, 
        data: selectedElement.data,
        style: selectedElement.style, 
        element: selectedElement?.element,
    }));
} else {
    console.error("No draggable element found with the specified ID");
}
    }




    const announcementElementProperty =
        theElementToDesign.map((res, ind) => {

            return (<div className='dnd-announcement-main-div'>
                <div>

                    <TextField
                        label="Text"
                        value={announcementElementText && announcementElementText}
                        onChange={handleAnnouncementElementTextChange}
                        autoComplete="off"
                    />
                </div>

                <div className='dnd-color-picker-main-div'>

                    <div className='dnd-fore-font-color-picker'>

                        <TextField
                            label="Text color"
                            value={Fcolor && Fcolor ? Fcolor : res?.data?.textColor}
                            onChange={handleTextFColorInputValueChange}
                            autoComplete="off"
                        />
                        <ChromePicker color={Fcolor && Fcolor} onChange={handleTextFColorPicker} />

                    </div>
                    <div className='dnd-fore-font-color-picker'>

                        <TextField
                            label="Background color"
                            value={Bcolor && Bcolor ? Bcolor : res?.data?.backgroundColor}
                            onChange={handleTexBColorInputValueChange}
                            autoComplete="off"
                        />

                        <ChromePicker onChange={handleTextBColorPicker} color={Bcolor && Bcolor} />

                    </div>

                </div>



                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span>Animation</span>
                    <LegacyStack vertical>
                        <label>
                            <input
                                type="radio"
                                value="none"
                                checked={animationValue === 'none'}
                                onChange={handleAnimationChange}
                            />
                            None
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Left to right"
                                checked={animationValue === 'Left to right'}
                                onChange={handleAnimationChange}
                            />
                            Left to right
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Right to left"
                                checked={animationValue === 'Right to left'}
                                onChange={handleAnimationChange}
                            />
                            Right to left
                        </label>

                    </LegacyStack>

                </div>

            </div>)

        });




    const [hoveredElementId, setHoveredElementId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredElementId(id);
    };

    const handleMouseLeave = () => {
        setHoveredElementId(null);
    };


    return (
        <div>

            {/* <div style={{ display: 'flex', flexDirection: 'row' }}>

                {
                    draggableELements?.map(res => <Pictures ele={res?.element} id={res?.id} />)
                }

            </div>
            
            <div className='drop-box' ref={drop}>

                {
                    dropBox?.map((elements)=>{
                        return <Pictures ele={elements?.element} id={elements?.id} /> 
                    })
                }

            </div> */}

            {
                deviceWidth > 850 ?

                    <div className='dnd-container'>
                        {/* <DragAndDrop /> */}

                        <div class="dnd-column dnd-column1">
                            <div className='dnd-column1-main-div'>

                                <div className='dnd-design-block-header-div'>
                                    <span className='dnd-header-design-text'>Design Blocks</span>
                                    <div>
                                        <p className='dnd-header-second-text'>Drag, drop max 20 blocks per design</p>
                                    </div>
                                </div>

                                {/* <div className='dnd-devider'>
                        <Divider />
                        </div> */}

                                <div className='dnd-design-blocks-div'>
                                    <div className='dnd-scroll-content'>

                                        {
                                            draggableELements?.map((res, index) => {

                                                return (
                                                    <div className='dnd-design-the-element-div'>

                                                        <p className='dnd-element-name'>{res?.title}</p>

                                                        <DragElements ele={res?.element} title={res?.title} id={res?.id} />
                                                    </div>
                                                )

                                            })
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div class="dnd-column dnd-column2">

                            <div className='drop-box' ref={drop}>
                                <div className='scrolable-mobile-view'>
                                    {theDraggedElements?.map((elements, index) => {

                                        console.log("elements?.style: ", elements?.style);
                                        
                                        // const retrievedElement = document.createElement('div');
                                        // retrievedElement.innerHTML = elements?.element;

                                        return(
                                        <div className={`dnd-element-with-buttons ${elements?.isVisible ? 'hidden' : ''}`}
                                            key={index}
                                            onClick={() => elementToDesignHandler(elements?.id)}
                                            onMouseEnter={() => handleMouseEnter(elements.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <DraggedElementInsideMobileView
                                                ele={elements?.element?.innerHTML}
                                                styleObj={elements?.style}
                                                title={elements?.title}
                                                id={elements?.id}
                                                
                                            />
                                            {hoveredElementId === elements?.id && (
                                                <div className="dnd-elements-with-buttons-row">
                                                    <Tooltip content="Hide">
                                                        <div className='dnd-element-action-buttons'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none" onClick={(event) => hideElementsFromDropBox(event, elements?.id)}>
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6ZM9.5 6C9.5 6.82843 8.82843 7.5 8 7.5C7.17157 7.5 6.5 6.82843 6.5 6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6Z" fill="#4A4A4A" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.52353 0 3.65153 1.22977 2.42264 2.53216C1.80748 3.18413 1.34017 3.86704 1.02329 4.45447C0.86488 4.74811 0.739729 5.02591 0.652246 5.27169C0.571431 5.49874 0.5 5.76019 0.5 6C0.5 6.23981 0.571431 6.50126 0.652246 6.72831C0.739729 6.97409 0.86488 7.25189 1.02329 7.54553C1.34017 8.13296 1.80748 8.81587 2.42264 9.46784C3.65153 10.7702 5.52353 12 8 12C10.4765 12 12.3485 10.7702 13.5774 9.46784C14.1925 8.81587 14.6598 8.13296 14.9767 7.54553C15.1351 7.25189 15.2603 6.97409 15.3478 6.72831C15.4286 6.50126 15.5 6.23981 15.5 6C15.5 5.76019 15.4286 5.49874 15.3478 5.27169C15.2603 5.02591 15.1351 4.74811 14.9767 4.45447C14.6598 3.86704 14.1925 3.18413 13.5774 2.53216C12.3485 1.22977 10.4765 0 8 0ZM2.00141 6.00207L2.00103 6L2.00141 5.99793C2.00509 5.97812 2.01827 5.90708 2.0654 5.77469C2.12269 5.61374 2.21422 5.40618 2.34345 5.16663C2.60183 4.68764 2.9936 4.11275 3.51365 3.56159C4.55519 2.45773 6.05819 1.5 8 1.5C9.94181 1.5 11.4448 2.45773 12.4864 3.56159C13.0064 4.11275 13.3982 4.68764 13.6566 5.16663C13.7858 5.40618 13.8773 5.61374 13.9346 5.77469C13.9817 5.90708 13.9949 5.97813 13.9986 5.99793L13.999 6L13.9986 6.00207C13.9949 6.02187 13.9817 6.09292 13.9346 6.22531C13.8773 6.38626 13.7858 6.59382 13.6566 6.83337C13.3982 7.31236 13.0064 7.88725 12.4864 8.43841C11.4448 9.54227 9.94181 10.5 8 10.5C6.05819 10.5 4.55519 9.54227 3.51365 8.43841C2.9936 7.88725 2.60183 7.31236 2.34345 6.83337C2.21422 6.59382 2.12269 6.38626 2.0654 6.22531C2.01827 6.09292 2.00509 6.02188 2.00141 6.00207Z" fill="#4A4A4A" />
                                                            </svg>
                                                        </div>

                                                    </Tooltip>

                                                    <Tooltip content="Remove">
                                                        <div className='dnd-element-action-buttons'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none" onClick={(event) => removeElementsFromDropBox(event, elements?.id)}>
                                                                <path d="M8.50006 6.25C8.91427 6.25 9.25006 6.58579 9.25006 7V11.25C9.25006 11.6642 8.91427 12 8.50006 12C8.08585 12 7.75006 11.6642 7.75006 11.25V7C7.75006 6.58579 8.08585 6.25 8.50006 6.25Z" fill="red" />
                                                                <path d="M6.25006 7C6.25006 6.58579 5.91427 6.25 5.50006 6.25C5.08585 6.25 4.75006 6.58579 4.75006 7V11.25C4.75006 11.6642 5.08585 12 5.50006 12C5.91427 12 6.25006 11.6642 6.25006 11.25V7Z" fill="red" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 3.25C4.25 1.73122 5.48122 0.5 7 0.5C8.51878 0.5 9.75 1.73122 9.75 3.25H12.7501C13.1643 3.25 13.5001 3.58579 13.5001 4C13.5001 4.41421 13.1643 4.75 12.7501 4.75H12L11.9999 10.2001C11.9998 11.8802 11.9998 12.7203 11.6728 13.362C11.3852 13.9265 10.9262 14.3854 10.3618 14.673C9.72002 15 8.87995 15 7.19981 15H6.80005C5.11984 15 4.27974 15 3.63799 14.673C3.07349 14.3854 2.61455 13.9264 2.32693 13.3619C1.99995 12.7202 1.99997 11.8801 2 10.1999L2.00011 4.75H1.25006C0.835847 4.75 0.500061 4.41421 0.500061 4C0.500061 3.58579 0.835847 3.25 1.25006 3.25H4.25ZM5.75 3.25C5.75 2.55964 6.30964 2 7 2C7.69036 2 8.25 2.55964 8.25 3.25H5.75ZM3.50013 4.75H10.5L10.4998 10.2001C10.4998 11.0649 10.4986 11.6233 10.4639 12.0483C10.4306 12.4558 10.3741 12.6068 10.3363 12.681C10.1925 12.9632 9.96302 13.1927 9.68077 13.3365C9.60661 13.3743 9.45553 13.4308 9.04804 13.4641C8.62304 13.4988 8.06463 13.5 7.19981 13.5H6.80005C5.93519 13.5 5.37677 13.4988 4.95175 13.4641C4.54424 13.4308 4.39316 13.3743 4.31899 13.3365C4.03674 13.1927 3.80727 12.9632 3.66346 12.681C3.62567 12.6068 3.56916 12.4557 3.53587 12.0482C3.50115 11.6232 3.5 11.0648 3.50002 10.1999L3.50013 4.75Z" fill="red" />
                                                            </svg>
                                                        </div>
                                                    </Tooltip>



                                                </div>
                                            )}
                                        </div>
                                    )
                                    
                                            }
                                            
                                            )}

                                </div>


                            </div>
                        </div>



                        <div class="dnd-column dnd-column3">

                            {

                                true ?

                                    <div className='dnd-announcement-content-div'>
                                        {announcementElementProperty}
                                    </div>

                                    : <div style={{ textAlign: 'center', padding: '95px' }}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 0.5C2.17893 0.5 0.5 2.17893 0.5 4.25V9.75C0.5 11.8211 2.17893 13.5 4.25 13.5H9.75C11.8211 13.5 13.5 11.8211 13.5 9.75V4.25C13.5 2.17893 11.8211 0.5 9.75 0.5H4.25ZM2 4.25C2 3.00736 3.00736 2 4.25 2H7.5V5H2V4.25ZM9 2H9.75C10.9926 2 12 3.00736 12 4.25V8H9V2ZM9 9.5V12H9.75C10.9926 12 12 10.9926 12 9.75V9.5H9ZM7.5 6.5V12H4.25C3.00736 12 2 10.9926 2 9.75V6.5H7.5Z" fill="#4A4A4A" />
                                        </svg>
                                        <p>Click on a block to customize it here.</p>
                                    </div>

                            }

                        </div>



                    </div>

                    :

                    <div className='dnd-internet-msg-div'>
                        <h1 >Use a larger screen for these settings</h1>
                        <h5>For the best design expereience, please expand your browser window or use a device with a minimum width of 752 pixels.</h5>
                    </div>
            }





        </div>
    );

};

export default DragAndDrop;


function HSBtoRGB(h, s, brightness, alpha) {
    let r, g, blue;

    const chroma = brightness * s;
    const hue1 = h / 60;
    const x = chroma * (1 - Math.abs(hue1 % 2 - 1));
    const m = brightness - chroma;

    if (0 <= hue1 && hue1 < 1) {
        [r, g, blue] = [chroma, x, 0];
    } else if (1 <= hue1 && hue1 < 2) {
        [r, g, blue] = [x, chroma, 0];
    } else if (2 <= hue1 && hue1 < 3) {
        [r, g, blue] = [0, chroma, x];
    } else if (3 <= hue1 && hue1 < 4) {
        [r, g, blue] = [0, x, chroma];
    } else if (4 <= hue1 && hue1 < 5) {
        [r, g, blue] = [x, 0, chroma];
    } else if (5 <= hue1 && hue1 < 6) {
        [r, g, blue] = [chroma, 0, x];
    }

    const red = Math.round((r + m) * 255);
    const green = Math.round((g + m) * 255);
    const blu = Math.round((blue + m) * 255);

    return `rgba(${red}, ${green}, ${blu}, ${alpha})`;
}
