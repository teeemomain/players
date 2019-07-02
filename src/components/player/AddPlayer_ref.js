import React, { Component } from 'react'

class AddPlayer extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.raceInput = React.createRef();
    this.levelInput = React.createRef();
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = e => {
    const player = {
      name: this.nameInput.current.value,
      race: this.raceInput.current.value,
      level: this.levelInput.current.value
    };
    
    console.log(player);

    e.preventDefault();
  }

  static defaultProps = {
    name:'Hansoo',
    race:'Human',
    level:'400'
  }
    render() {
    const {name, race, level} = this.props;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Add Player</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                defaultValue={name}
                ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="race">Race</label>
                <input
                type="text"
                name="race"
                className="form-control form-control-lg"
                placeholder="Enter Race"
                defaultValue={race}
                ref={this.raceInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="level">Level</label>
                <input
                type="text"
                name="level"
                className="form-control form-control-lg"
                placeholder="Enter Level"
                defaultValue={level}
                ref={this.levelInput}
                />
              </div>
              <input type="submit" value="Add Player" className="btn btn-block btn-primary" />
            </form>
          </div>


        </div>
      </div>
    )
  }
}

export default AddPlayer;