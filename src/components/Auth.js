import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { login } from '../redux/modules/auth/actions';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = () => {
    const { password, email } = this.state;
    this.props.login({ submittedPassword: password, submittedEmail: email });
    this.props.history.push('/dashboard');
  }

  render() {
    const { password, email } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form size='big' onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { login })(Auth);
