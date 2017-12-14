import React from 'react'
import { Button, Checkbox, Icon, Table, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchCustomers, addCustomer, deleteCustomer } from '../redux/modules/customers/actions';
import AddCustomerForm from './AddCustomerForm';

class Customers extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      delete: ''
    };
  }

  componentDidMount() {
    this.props.fetchCustomers();
  }
 

  closeForm = () => {
    this.setState({ show: false });
  }

  openForm = () => {
    this.setState({ show: true });
  }
 
  delete = (customerId) => {
    this.props.deleteCustomer(customerId);
    this.setState({ delete: '' });
    this.props.fetchCustomers();
  }

  render() {
    const { customers } = this.props;
    const renderCustomers = customers.map((customer) => {
      return (
        <Table.Row key={customer.id}>
          <Table.Cell collapsing>
            <Checkbox slider onChange={e=> this.setState({ delete: customer.id })} />
            <Modal open={this.state.delete === customer.id} basic>
              <Modal.Content>
                <p>Are you sure you want to delete this customer?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button basic color='red' inverted>
                  <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={e => this.delete(customer.id)}>
                  <Icon name='checkmark' /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </Table.Cell>
          <Table.Cell>{customer.id}</Table.Cell>
          <Table.Cell>{customer.first_name}</Table.Cell>
          <Table.Cell>{customer.last_initial}</Table.Cell>
        </Table.Row>
      );
    });
    return (
      <div className="customers-page">
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Initial</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
    
          <Table.Body>
            {renderCustomers}
          </Table.Body>
    
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
                <Button floated='right' icon labelPosition='left' primary size='small' 
                  onClick={this.openForm} >
                  <Icon name='user' /> Add Customer
                </Button>
                <Button size='small' onClick={this.deleteCustomers} >Delete Selected</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <AddCustomerForm addCustomer={this.props.addCustomer} show={this.state.show} close={this.closeForm} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers.customers
  };
}

export default connect(mapStateToProps, { addCustomer, fetchCustomers, deleteCustomer })(Customers);