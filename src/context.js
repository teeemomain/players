import React, { Component} from 'react';
import axios from 'axios';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_PLAYER':
      return {
        ...state,
        players: state.players.filter(
          player => player.id !== action.payload
        )
      };
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [action.payload,
        ...state.players]
      };
    case 'UPDATE_PLAYER':
      return {
        ...state,
        players: state.players.map(player => 
          player.id === action.payload.id
          ? (player = action.payload)
          : player
          )
      };
    default:
      return state;
  }
}
export class Provider extends Component {
  state = {
      players: [],
      dispatch: action => this.setState(state => reducer(state,action))
      // {
      //   id: 1,
      //   name: 'Sara',
      //   race: 'Cat',
      //   level: 29
      // },
      // {
      //   id: 2,
      //   name: 'Il Han',
      //   race: 'God',
      //   level: 1000
      // },
      // {
      //   id: 3,
      //   name: 'Jinwoo',
      //   race: 'Human',
      //   level: 120
      // },
      // {
      //   id: 4,
      //   name: 'Hansoo',
      //   race: 'Human',
      //   level: 90
      // }

  }

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({players: res.data});
  }

  render() {
    return (
      <Context.Provider value = {this.state}>
       {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
