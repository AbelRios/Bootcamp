import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        info: null,
        results: null
    },
    reducers: {
        getData: (state, action) => {
            state.info = action.payload.info
            state.results = action.payload.results
        }
    }
})

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        up: (state) => { (state.counter += 1) },
        down: (state) => { (state.counter -= 1) },
        add: (state, action) => { (state.counter += action.payload) },
        reset: (state) => { (state.counter = 0) }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        data: dataSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const dataActions = dataSlice.actions;

export default store;