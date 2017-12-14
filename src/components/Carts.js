import React from 'react'
import { Table, Segment, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';

class Carts extends React.Component {
  render() {
    const { customers } = this.props;
    const  renderCarts = customers.map((customer) => {
      return (
        <Segment  key={customer.id}>
          <Container text>
          {customer.first_name}'s Cart
          </Container>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            </Table.Body>
          </Table>
        </Segment>
      );
    });
    return (
      <div className="customers-page">
        {renderCarts}
      </div>
    );
  }
} 

function mapStateToProps(state) {
  return {
    customers: state.customers.customers
  };
}

export default connect(mapStateToProps)(Carts)