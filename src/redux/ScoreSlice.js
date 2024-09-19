import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    score:0,
    isAnswerCorrectly: false,
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        addPoints: (state, action) => {
            state.score += action.payload;
            state.isAnswerCorrectly = true;
        },
        subtractPoint: (state) => {
            state.score -= 1;
            state.isAnswerCorrectly = false;
        },
        reset: (state) => {
            state.score = 0;
        },
        resetAnswerState: (state) => {
            state.isAnswerCorrectly = false;
        }  
    },
});

export const { addPoints, subtractPoint, reset, resetAnswerState} = scoreSlice.actions;

export default scoreSlice.reducer;