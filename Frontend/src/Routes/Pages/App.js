import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName } from '../../Redux/Actions/authActions';

export class App extends Component {
  render() {
    const { name, addName, history } = this.props;
    console.log(this.props);
    return (
      <div>
        Welcome, Please Enter your name:{' '}
        <input value={name} onChange={(e) => addName(e.target.value)} />
        <button onClick={() => history.push('/room')}>Go</button>
      </div>
    );
  }
}

const mapStateToProps = ({ authReducer }) => {
  const { name } = authReducer;
  return { name };
};

export default connect(mapStateToProps, { addName })(App);
