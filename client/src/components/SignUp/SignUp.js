import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextInputGroup from '../../layout/TextInputGroup';
import API from '../../utils/API';

class SignUp extends Component {
  state = {
    userName: '',
    password: '',
    id: ''
  };

  createUser = data => {
    API.createUser(data).then(results => {
      this.setState({
        id: results.data._id
      });
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    const { userName, password } = this.state;
    e.preventDefault();
    const newUser = {
      userName,
      password
    };
    this.createUser(newUser);
  };

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
            value={password}
            onChange={this.onChange}
            type="password"
          />
          <Link to={`welcome`}>
            <button type="submit" className="btn w-100" onClick={this.onSubmit}>
              Submit
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignUp;
