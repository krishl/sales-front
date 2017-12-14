import React, { Component } from 'react';
import { Button, Modal, Form, Segment } from 'semantic-ui-react';

class AddCustomerForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastInitial: '',
    };
  }

  submitForm = () => {
    let data = {
      first_name: this.state.firstName,
      last_initial: this.state.lastInitial
    };
    // data = JSON.stringify(data);
    this.props.addCustomer(data);
    this.props.close();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
   
  handleLastInitial = e => this.setState({ [e.target.name]: e.key })

  render() {
    const { show, close } = this.props;
    const { firstName, lastInitial } = this.state;
    return (
      <div>
        <Modal open={show} onClose={close}>
          <Modal.Header>Add A Customer</Modal.Header>
          <Modal.Content>
            <Segment>
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input name='firstName' value={firstName} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Last Initial</label>
                  <input name='lastInitial' value={lastInitial} onKeyDown={this.handleLastInitial} />
                </Form.Field>
              </Form>
            </Segment>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={close}>
              Cancel
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Create Customer" onClick={this.submitForm} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default AddCustomerForm;