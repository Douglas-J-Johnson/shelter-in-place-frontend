import React from 'react';
import './App.css';

const BASE_PATH = "http://localhost:3000/activities"

class App extends React.Component {
  state = {
    activities: [],
    selectedActivity: 0
  }

  componentDidMount() {
    fetch(BASE_PATH)
    .then(response => response.json())
    .then(activities => this.setState({activities}))
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header"></header>
        <body>
          <Card activity={this.state.activities[this.state.selectedActivity]} />
        </body>
      </div>
    );
  }
}

export default App;
