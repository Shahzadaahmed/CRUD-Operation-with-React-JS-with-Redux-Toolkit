/***** Note: All crud cases are defined here *****/

// Note: This is the old but not outdated way to write reducers in Redux JS using Redux JS Thunk...!
/*
import {
}
    from "../../constant/action-types";

// Note: States of crud reducer...!
const INIT_STATE = {
    crudData: []
};

const crudReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

export default crudReducer;
*/

// Note: This is the new and updated way to write reducers in Redux JS using Redux JS Toolkit...!
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    crudData: []
};

export const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {
        ADD_DATA: (state, action) => {
            // console.log(action);

            let { payload } = action;
            let crudDataClone = [...state.crudData];
            crudDataClone.push(payload);
            state.crudData = crudDataClone;
        },

        DELETE_DATA: (state, action) => {
            // console.log(action);

            let { payload } = action;
            let crudDataClone = [...state.crudData];
            crudDataClone.splice(payload, 1);
            state.crudData = crudDataClone;
        },

        UPDATE_DATA: (state, action) => {
            // console.log(action);

            let { payload } = action;
            let { index, newItem } = payload;
            let crudDataClone = [...state.crudData];
            crudDataClone.splice(index, 1, newItem);
            state.crudData = crudDataClone;
        },

        DELETE_ALL_DATA: (state) => {
            let crudDataClone = [...state.crudData];
            crudDataClone = [];
            state.crudData = crudDataClone;
        },
    }
});

// Action creators are generated for each case reducer function
export const
    {
        ADD_DATA,
        DELETE_DATA,
        UPDATE_DATA,
        DELETE_ALL_DATA
    }
        = crudSlice.actions;

export default crudSlice.reducer;