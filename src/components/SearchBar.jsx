import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { searchText: '' };
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
    }
    
    render() {
        return (
            <div>
                <input type="text" 
                    value={this.state.searchText} 
                    onChange={this.handleSearchTextChange} 
                />
                <button onClick={this.handleSearchBtnClick}>Search</button>
            </div>
        );
    }

    handleSearchTextChange(event) {
        this.setState({ searchText: event.target.value });
    }

    handleSearchBtnClick() {
        this.props.searchHandler(this.state.searchText);
    }
}