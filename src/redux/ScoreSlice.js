import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    score:0,
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        addPoints: (state, action) => {
            state.score += action.payload;
        },
        subtractPoint: (state) => {
            state.score -= 1;
        },
        reset: (state) => {
            state.score = 0;
        },  
    },
});

export const { addPoints, subtractPoint, reset} = scoreSlice.actions;

export default scoreSlice.reducer;