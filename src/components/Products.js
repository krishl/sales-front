import React from 'react'
import { Button, Checkbox, Icon, Table, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct } from '../redux/modules/products/actions';
import AddProductForm from './AddProductForm';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      delete: ''
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
    console.log(this.props)
  }
 

  closeForm = () => {
    this.setState({ show: false });
  }

  openForm = () => {
    this.setState({ show: true });
  }
 
  delete = (productId) => {
    this.props.deleteProduct(productId);
    this.setState({ delete: '' });
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    const renderProducts = products.map((product) => {
      return (
        <Table.Row key={product.id}>
          <Table.Cell collapsing>
            <Checkbox slider onChange={e=> this.setState({ delete: product.id })} />
            <Modal open={this.state.delete === product.id} basic>
              <Modal.Content>
                <p>Are you sure you want to delete this product?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button basic color='red' inverted>
                  <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={e => this.delete(product.id)}>
                  <Icon name='checkmark' /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </Table.Cell>
          <Table.Cell>{product.id}</Table.Cell>
          <Table.Cell>{product.name}</Table.Cell>
          <Table.Cell>{product.description}</Table.Cell>
        </Table.Row>
      );
    });
    return (
      <div className="products-page">
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
    
          <Table.Body>
            {renderProducts}
          </Table.Body>
    
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
                <Button floated='right' icon labelPosition='left' primary size='small'
                  onClick={this.openForm} >
                  <Icon name='user' /> Add Product
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <AddProductForm addProduct={this.props.addProduct} show={this.state.show} close={this.closeForm} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products
  };
}

export default connect(mapStateToProps, { addProduct, fetchProducts, deleteProduct })(Products);