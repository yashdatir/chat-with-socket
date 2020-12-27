import React from 'react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');
class App extends React.Component {
  state = {
    name: 'Yash',
    msg: [],
    message: '',
  };
  componentDidMount() {
    socket.on('chat-message', (data) => {
      console.log(data);
      this.setState({ ...this.state, msg: data });
    });
  }
  sendMessage = () => {
    socket.emit('send-message', {
      name: this.state.name,
      message: this.state.message,
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.msg.map((data) => (
          <div key={data.id}>
            <div>{data.name}</div>
            <div>{data.message}</div>
          </div>
        ))}
        <input
          type="text"
          value={this.state.message}
          onChange={(e) =>
            this.setState({ ...this.state, message: e.target.value })
          }
          placeholder="Text Message"
        />
        <button onClick={() => this.sendMessage()}>Send</button>
      </React.Fragment>
    );
  }
}
export default App;
