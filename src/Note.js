import React from 'react';
import present from './images/present.svg';

const Note = (props) => {
  const person = props.decryptHash(props.mykey);
  return (
    <div className="people-container">
      <div className="note">
        <h5 className="note__title">Hi {props.name.replace("%20", " ")},</h5>
        <h5>you've been assigned <span className="note__santa">{person.name}</span>.</h5>
        <h5>Here's wish list:</h5>
        <h5 dangerouslySetInnerHTML={{__html: person.wishlist}}/>
        <img src={present} className="note__image" alt="present"/>
        <h5>Good luck!</h5>
      </div>
    </div>
  )
}

export default Note;