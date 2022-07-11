/***** Note: All crud action functions are defined here *****/

import {
    ADD_DATA,
    DELETE_DATA,
    UPDATE_DATA,
    DELETE_ALL_DATA
}
    from "../reducer/crud-reducer/crud-reducer";

// Note: Action function to add item...!
const itemAdded = (data) => {
    return (dispatch) => {
        // console.log("Data: " , data);

        dispatch({
            type: ADD_DATA,
            payload: data
        });
    };
};

// Note: Action function to delete item...!
const itemDeleted = (index) => {
    return (dispatch) => {
        // console.log("Item index: ", index);

        dispatch({
            type: DELETE_DATA,
            payload: index
        });
    };
};

// Note: Action function to update item...!
const itemUpdated = (data) => {
    return (dispatch) => {
        // console.log("Data: ", data);

        dispatch({
            type: UPDATE_DATA,
            payload: data
        });
    };
};

// Note: Action function to delete all item...!
const allItemsDeleted = () => {
    return (dispatch) => {
        dispatch({
            type: DELETE_ALL_DATA
        });
    };
};

export {
    itemAdded,
    itemDeleted,
    itemUpdated,
    allItemsDeleted
};