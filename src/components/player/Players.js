import React, { Component } from 'react'
import Player from './Player';
import { Consumer } from '../../context';

class Players extends Component {


  render() {
    return (
      <Consumer>
        {value => {
          const { players } = value;
        return (
        <React.Fragment>
          <h1 className="primaryText2 center">Players List</h1>
          {players.map(player => 
            <Player 
            key={player.id}
            player={player}
            />
          )}
        </React.Fragment>
        );
       }}
      </Consumer>
    )
  }
}

export default Players;