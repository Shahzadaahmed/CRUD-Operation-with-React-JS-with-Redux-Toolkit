// Note Crud component...!

import
React,
{
    Fragment,
    useRef,
    useState
}
    from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    itemAdded,
    itemDeleted,
    itemUpdated,
    allItemsDeleted
}
    from '../../redux/store/action/crud-action';

const Crud = () => {

    // Note: Handeling states here...!
    const [userInput, setUserInput] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editedItemIndex, setEditedItemIndex] = useState(undefined);

    // Note: handeling refrence for input field...!
    const inputRef = useRef(null);

    // Note: Handeling redux here...!
    const dispatch = useDispatch();

    const { crudData } = useSelector(({ crudStates }) => crudStates);
    console.log(crudData);

    // Note: Validation handler...!
    const validator = () => {
        if (userInput.trim().length < 1) return true;
        else return false;
    };

    // Note: If there is no items in the crudData then delete all item button should be disabled...!
    const deleteDataHandler = () => {
        if (crudData.length < 1) return true;
        else return false;
    };

    // Note: Function to add item...!
    const addItem = () => {
        dispatch(itemAdded(userInput));
        setUserInput("");
        inputRef.current.focus();
    };

    // Note: Function to delete item...!
    const deleteItem = (itemIndex) => {
        dispatch(itemDeleted(itemIndex));
        setIsEditing(false);
        setEditedItemIndex(undefined);
        setUserInput("");
    };

    // Note: Function to edit item...!
    const editItem = (data, itemIndex) => {
        // console.log(data, itemIndex);

        setEditedItemIndex(itemIndex);
        setIsEditing(true);
        setUserInput(data);
    };

    // Note: Function to update item...!
    const updateItem = () => {
        let data = {
            newItem: userInput,
            index: editedItemIndex
        };

        dispatch(itemUpdated(data));
        setIsEditing(false);
        setUserInput("");
        setEditedItemIndex(undefined);
    };

    // Note: Function to cancel editing porocess...!
    const cancel = () => {
        setIsEditing(false);
        setEditedItemIndex(undefined);
        setUserInput("");
    };

    // Note: Function to delete all items...!
    const deleteAllItems = () => {
        dispatch(allItemsDeleted());
    };

    return (
        <Fragment>
            <div>
                <h1> Crud Operation using React JS with Redux JS Toolkit </h1>
                <hr />
                <input
                    type={'text'}
                    placeholder="Write Something..."
                    ref={inputRef}
                    value={userInput}
                    onChange={(event) => { setUserInput(event.target.value) }}
                />
                {
                    (isEditing)
                        ?
                        (
                            <div>
                                <button
                                    onClick={updateItem}
                                    disabled={validator()}
                                >
                                    Update Item
                                </button>

                                <button onClick={cancel}>
                                    Cancel
                                </button>
                            </div>
                        )
                        :
                        (
                            <div>
                                <button
                                    onClick={addItem}
                                    disabled={validator()}
                                >
                                    Add Item
                                </button>

                                <button
                                    onClick={deleteAllItems}
                                    disabled={deleteDataHandler()}
                                >
                                    Delete All Items
                                </button>
                            </div>
                        )
                }

                {/* Note: Listing data */}
                <div>
                    {
                        (crudData && crudData.length > 0)
                            ?
                            (
                                crudData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            {item}
                                            <button onClick={() => deleteItem(index)}> Delete Item </button>
                                            <button onClick={() => editItem(item, index)}> Edit Item </button>
                                        </div>
                                    );
                                })
                            )
                            :
                            (<h2> Data not Found! 😢 </h2>)
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Crud;