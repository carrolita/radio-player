import React from "react"

class App extends React.Component {
state={
  channels: []
}

  componentWillMount(){
    fetch('http://api.sr.se/api/v2/channels?format=json&size=100')
    .then(data => data.json())
    .then((data) => {
      console.log(data)
      this.setState({
        channels: data.channels
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="channel-container">
          {
            this.state.channels.map(item =>
              <div className="radio-container" style={{
                  backgroundColor: '#' + item.color
                }}>
                <div className="image-container">
                  <img className="radio-image" src={item.image} />
                </div>
                <div className="radio-content-container">
                  <span>{item.name}</span>
                  <audio controls>
                    <source src={item.liveaudio.url} />
                  </audio>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }

}

export default App
