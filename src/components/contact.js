import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from './list';
import { users } from '../data/users';
import FavouriteList from "./favourite_list";
import SearchBar from './search_bar';

export default class ContactPage extends Component {

    state = {
        text: '',
        users
    };

    onInputChange = (text) => {
        this.setState({text});
    };

    onButtonClickSort = (array) => {
        let updatedUsers = array.slice();
        updatedUsers.sort((a, b) => {
            let aName = a.lastName.toLowerCase(),
                bName = b.lastName.toLowerCase();

            return aName < bName ? -1 : 1;
        });
        this.setState({users: updatedUsers});
    };

    onButtonClickResort = (array) => {
        let updatedUsers = array.slice();
        updatedUsers.reverse();
        this.setState({users: updatedUsers});
    };

    render() {
        return (
            <section>
                <Link to='/home'>HOME</Link>
                <SearchBar onInputChange={this.onInputChange} />
                <List onButtonClickResort={this.onButtonClickResort}
                      onButtonClickSort={this.onButtonClickSort}
                      text={this.state.text} users={this.state.users}
                />
                <FavouriteList users={this.state.users} />
            </section>
        );
    }
}