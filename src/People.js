import React, {Component} from 'react';
import Person from './Person';

class People extends Component {
  renderRemove = () => {
    return this.props.santas.length <= 0;
  }

  render() {
    return (
      <div className="people-container">
        {(this.props.people.length > 0) ?
          this.props.people.map((person, index) =>
              <Person person={person}
                      key={person.name}
                      santa={this.props.santas[index]}
                      number={index + 1}
                      handleDeletePerson={this.props.handleDeletePerson}
                      renderRemove={this.renderRemove()}
                      encryptString={this.props.encryptString}
                      copyText={this.props.copyText}
              /> // pass down name
            )
            : <p className="empty-message">Add a person to get started!</p>
        }

      </div>
    )
  }
}

export default People;