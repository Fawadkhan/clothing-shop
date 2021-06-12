import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import {signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss'

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
      const {value, name} = event.target;
      this.setState({ [name] : value })
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
            label="password"
          />
          <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
