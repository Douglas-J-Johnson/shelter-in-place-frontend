import React from 'react';
import './App.scss';
import Card from './components/Card'
import { act } from 'react-dom/test-utils';

const BASE_PATH = "http://localhost:3000/activities"

class App extends React.Component {
  state = {
    activities: [],
    selectedActivity: -1
  }

  componentDidMount() {
    fetch(BASE_PATH)
    .then(response => response.json())
    .then(activities => this.setState({activities}))
  }

  getRandomActivityByType = (type) => {
    const idsForType = []

    this.state.activities.forEach((activity, index) => {
      if(activity.activity_type === type) {
        idsForType.push(index)
      }
    })

    const randomCardId = idsForType[Math.floor(Math.random()*idsForType.length)]

    this.setState({selectedActivity: randomCardId})
  }

  render() {
    const selectedActivityId = this.state.selectedActivity
    const activities = this.state.activities
    const selectedActivity = activities[selectedActivityId]

    return (
      <div className="App">
        <h1>The Shelter-In-Place App</h1>
        <header className="App-header">
          <div onClick={() => this.getRandomActivityByType("Exercise")}>Active</div>
          <div onClick={() => this.getRandomActivityByType("Watch a Movie")}>Watch a movie</div>
          <div onClick={() => this.getRandomActivityByType("skill")}>Skill</div>
        </header>
        {selectedActivityId >= 0 ? <Card activity={selectedActivity} /> : null}
      </div>
    );
  }
}

export default App;
