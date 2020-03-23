import React from 'react';
import './App.css';
import Card from './components/Card'

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
    const selectedActivity = this.state.selectedActivity
    console.log(selectedActivity)

    return (
      <div className="App">
        <header className="App-header">
          <div onClick={() => this.getRandomActivityByType("active")}>Active</div>
          <div onClick={() => this.getRandomActivityByType("passive")}>Passive</div>
          <div onClick={() => this.getRandomActivityByType("skill")}>Skill</div>
        </header>
        {selectedActivity >= 0 ? <Card activity={this.state.activities[this.state.selectedActivity]} /> : null}
      </div>
    );
  }
}

export default App;
