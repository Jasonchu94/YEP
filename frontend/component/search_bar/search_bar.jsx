import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
    }

    update(field) {
        return e => this.setState({
            [field] : e.currentTarget.value
        })
    }

    render(){
        return(
            <form className='search-bar'>
                <label className='find-box'>
                    <span className='find-text'>Find</span>
                    <input className='input-field'type='text' placeholder='nail salons, plumbers, takeout...'></input>
                </label>
                <label className='near-box'>
                    <span className='near-text'>Near</span>
                    <input className='input-near'type = "text" placeholder='San Jose, CA 95132'></input>
                </label>
                    <button type='submit' className='search-submit'>🔍</button>
            </form>
        )
    }
}

export default SearchBar;