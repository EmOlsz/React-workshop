import React from 'react';
import ListElement from './list_element';

function List(props) {

    let filteredByText = props.users.filter(user => user.firstName.indexOf(props.text) > -1
        || user.lastName.indexOf(props.text) > -1
        || user.age.indexOf(props.text) > -1
        || user.occupation.indexOf(props.text) > -1);

    if (props.text === '') {
        filteredByText = [];
    }

    const onButtonClickSort = () => {
        props.onButtonClickSort(filteredByText);
    };

    const onButtonClickResort = () => {
        props.onButtonClickResort(filteredByText);
    };

    return (
        <div>
            <ul className="users__list">
                <li className="users__element">
                    {filteredByText.map(user => <ListElement key={user.id} item={user} /> )}
                </li>
            </ul>
            <button onClick={onButtonClickSort}>Sort!</button>
            <button onClick={onButtonClickResort}>Re-sort!</button>
        </div>
    )
}

export default List;