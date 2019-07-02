import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
// import uuid from 'uuid';
import axios from 'axios';



class AddPlayer extends Component {
  state = {
    name:'',
    race:'',
    level:'',
    errors: {}
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    
    const {name, race, level} = this.state;

    // Check for Errors
    if(name === '') {
      this.setState({errors: { name: 'Name is Required' }});
      return;
    }
    if(race === '') {
      this.setState({errors: { race: 'Race is Required' }});
      return;
    }
    if(level === '') {
      this.setState({errors: { level: 'Level is Required' }});
      return;
    }


    const newPlayer = {
      // id: uuid(),
      name,
      race,
      level
    };

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newPlayer);
         dispatch({type: 'ADD_PLAYER', payload: res.data});

    // dispatch({type: 'ADD_PLAYER', payload: newPlayer});
    // Clear Input Field
    this.setState({
      name:'',
      race:'',
      level:'',
      errors: {}
    });

    this.props.history.push('/');

    
  }

    render() {
    const {name, race, level, errors} = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card mb-3">
                <div className="card-header primaryText2 center">Add Player</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Race"
                      name="race"
                      placeholder="Enter Race"
                      value={race}
                      onChange={this.onChange}
                      error={errors.race}
                    />
                    <TextInputGroup
                      label="Level"
                      name="level"
                      placeholder="Enter Level"
                      value={level}
                      onChange={this.onChange}
                      error={errors.level}
                    />
                    <input type="submit" value="Add Player" className="btn btn-block btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddPlayer;