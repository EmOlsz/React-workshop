import React from 'react';
import FavouriteListElement from './favourite_list_element';

function FavouriteList(props) {
    const favouriteUsers = props.users.filter(user => user.favourite);
    return (
        <ul className="users__list">
            <li className="users__element">
                {favouriteUsers.map(user => <FavouriteListElement key={user.id} item={user} /> )}
            </li>
        </ul>
    )
}

export default FavouriteList;