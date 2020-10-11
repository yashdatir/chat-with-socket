import React from 'react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001')
class App extends React.Component {
  componentDidMount(){
    socket.on('chat-message', data => {
    console.log(data)
  })
  }
  render(){
  return (
    <React.Fragment>
      <input type="text" placeholder="Text Message" /><button>Send</button>
    </React.Fragment>
  );
  }
}
export default App;