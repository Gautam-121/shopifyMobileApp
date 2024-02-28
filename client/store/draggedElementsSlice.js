import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const draggedElementsSlice = createSlice({
    name: 'draggedElementsSlice',
    initialState,
    reducers:{
        dragAndPushElement(state, action){
            // const { element, ...payloadWithoutElement } = action.payload; // Destructure payload into element and other properties
            // state.push(payloadWithoutElement);
            state.push(action.payload);
    },

    removeElementFromDropbox(state, action){
        
        return state.filter(element => element.id !== action.payload);
    },

    hideElementFromDropbox(state, action) {
        const { id } = action.payload;
        const element = state.find(item => item.id === id);
        if (element) {
            element.isVisible = false;
        }
    }
}
});

export const {dragAndPushElement, removeElementFromDropbox, hideElementFromDropbox} = draggedElementsSlice.actions;
export default draggedElementsSlice.reducer;