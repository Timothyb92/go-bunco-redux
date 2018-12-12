import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TextInputGroup from '../../layout/TestInputGroup'

class LogIn extends Component {
  state = {
    userName = '',
    password = ''
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { userName, password } = this.state;

    return (
      <div>
        <h2>Log In</h2>
        <form>
          <TextInputGroup
            label="User Name"
            name="userName"
            placeholder="User Name"
            value={userName}
            onChange={this.onChange}
          />
          <TextInputGroup
            label="Password"
            name="password"
            placeholder="Password"
            value={userName}
            onChange={this.onChange}
          />
        </form>
      </div>
    )
  }
}

export default LogIn;