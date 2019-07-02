import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import axios from 'axios';

class Player extends Component {
  state = {
    showPlayerInfo: false
  }
  togglePlayerInfo = () => {
    this.setState({showPlayerInfo: !this.state.showPlayerInfo });
  }
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({type: 'DELETE_PLAYER', payload:id});
    
  }

  render() {
    const { id, name, race, level } = this.props.player;
    const  { showPlayerInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="card card-body">
                <p className="primaryText">Player {id}
                <i
                onClick={this.togglePlayerInfo}
                className="fa fa-chevron-down arrow"
                style={{cursor: 'pointer'}}
                ></i>
                <i
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                className="fa fa-times del-button"
                style={{cursor: 'pointer'}}
                ></i>
                <Link to={`/player/edit/${id}`}>
                  <i 
                    className="fa fa-edit"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '.5rem'
                    }}
                  ></i>
                </Link>
                </p>
                { showPlayerInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Name: {name}</li>
                  <li className="list-group-item">Race: {race}</li>
                  <li className="list-group-item">Level: {level}</li>
                </ul>
                ) : null}
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Player;