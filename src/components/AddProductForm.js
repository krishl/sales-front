import React, { Component } from 'react';
import { Button, Modal, Form, Segment } from 'semantic-ui-react';

class AddProductForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
    };
  }

  submitForm = () => {
    const data = {
      first_name: this.state.name,
      last_initial: this.state.description
    };
    this.props.addProduct(data);
    this.props.close();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { show, close } = this.props;
    const { name, description } = this.state;
    return (
      <div>
        <Modal open={show} onClose={close}>
          <Modal.Header>Add A Product</Modal.Header>
          <Modal.Content>
            <Segment>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input name='name' value={name} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <input name='description' value={description} onChange={this.handleChange} />
                </Form.Field>
              </Form>
            </Segment>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={close}>
              Cancel
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Create Product" onClick={this.submitForm} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default AddProductForm;