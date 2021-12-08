import React, { Component } from 'react';
import plus from './images/plus.svg';

class AddPerson extends Component {
    handleAddPersonChild = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        const wishlist = e.target.elements.wishlist.value;
        this.props.handleAddPersonParent({name, wishlist});
        document.getElementById("name-form").reset();
    }

    render() {
        return (
            <div className="form-wrap">
                <form autoComplete="off" onSubmit={this.handleAddPersonChild} id="name-form" className="form">
                    <input type="text" name="name" className="input" placeholder="Enter a name..."/>
                    <button type="submit" className="add">
                        <img src={plus} className="add-icon" alt="plus-icon"/>
                        Add
                    </button>
                    <textarea className="wishlist" name="wishlist" placeholder="Wishlist"/>
                </form> 
            </div>
        )
    }
}

export default AddPerson;