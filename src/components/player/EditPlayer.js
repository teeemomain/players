import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
// import uuid from 'uuid';
import axios from 'axios';



class EditPlayer extends Component {
  state = {
    name:'',
    race:'',
    level:'',
    errors: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const player = res.data;

    this.setState({
      name: player.name
    })
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

    const updatePlayer = {
      name,
      race,
      level
    }

    const { id } = this.props.match.params;
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatePlayer);

    dispatch({type: 'UPDATE_PLAYER', payload: res.data});
    
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
                <div className="card-header primaryText2 center">Edit Player</div>
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
                    <input type="submit" value="Update Player" className="btn btn-block btn-primary" />
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

export default EditPlayer;