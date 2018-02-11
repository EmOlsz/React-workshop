import React from 'react';

function ListElement(props) {
    return (
        <div className="user">
            <h1 className="user__heading">User details</h1>
            <ul className="user__list">
                <li className="user__element">first name: { props.item.firstName }</li>
                <li className="user__element">last name: { props.item.lastName }</li>
                <li className="user__element">age: { props.item.age }</li>
                <li className="user__element">occupation: { props.item.occupation }</li>
            </ul>
        </div>
    );
}

export default ListElement;