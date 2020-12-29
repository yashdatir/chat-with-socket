import React from 'react';
import io from 'socket.io-client';
import { SOCKET_URL } from '../../Utils/constants';
import { addMessage, manageMessage } from '../../Redux/Actions/authActions';
import { connect } from 'react-redux';
const socket = io.connect(SOCKET_URL);
class Chat extends React.Component {
  componentDidMount() {
    socket.on('chat-message', (data) => {
      console.log(data);
      this.props.manageMessage(data);
    });
  }
  sendMessage = () => {
    socket.emit('send-message', {
      name: this.props.name,
      message: this.props.message,
    });
  };
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.msg.map((data) => (
          <div key={data.id}>
            <span>{data.name}:</span>
            <span>{data.message}</span>
          </div>
        ))}
        <input
          type="text"
          value={this.props.message}
          onChange={(e) => this.props.addMessage(e.target.value)}
          placeholder="Text Message"
        />
        <button onClick={() => this.sendMessage()}>Send</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ authReducer }) => {
  const { name, message, msg } = authReducer;
  return {
    name,
    message,
    msg,
  };
};

export default connect(mapStateToProps, { addMessage, manageMessage })(Chat);
