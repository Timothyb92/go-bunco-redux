import React, { Component } from 'react';
import TextInputGroup from '../../layout/TextInputGroup';

class SignUp extends Component {
  state = {
    userName: '',
    password: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { userName, password } = this.state;

    return (
      <div>
        <h2>Sign Up</h2>
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
    );
  }
}

export default SignUp;
