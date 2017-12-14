import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react';
import Auth from '../components/Auth';
import Customers from '../components/Customers';
import Products from '../components/Products';
import Carts from '../components/Carts';
import '../index.css';

// import logo from '../solar.svg';

const Dashboard = () => <h1>Dashboard</h1>;

class App extends Component {
  state = { activeItem: 'home', visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { auth } = this.props;

    const { visible, activeItem } = this.state;

    return (
      <Router>
        <div className="container" style={{ height: '100vh' }}>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical >
              <Menu.Item name='home'>
                <Icon name='diamond' color='violet'/>
              </Menu.Item>
              <Menu.Item as={Link} to="/customers" name='customers' active={activeItem === 'customers'}
                onClick={this.handleItemClick}>
                <Icon name='user' />
                Customers
              </Menu.Item>
              <Menu.Item as={Link} to="/products" name='skus' active={activeItem === 'skus'}
                onClick={this.handleItemClick}>
                <Icon name='cubes' />
                Products
              </Menu.Item>
              <Menu.Item as={Link} to="/carts" name='carts' active={activeItem === 'carts'}
                onClick={this.handleItemClick}>
                <Icon name='cart' />
                Carts
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <header className="header">
                {auth.isAuthenticated ?
                  <Button onClick={this.toggleVisibility} color='violet' size="large">
                    <Icon name='content' size="large" />
                  </Button> : null }
                <h1 className="header_logo">{activeItem.toUpperCase()}</h1>
              </header>
              <Switch>
                <div className="content"
                  style={{
                    marginTop: '10px',
                    paddingTop: '80px',
                    margin: '0 auto',
                    width: '90%'
                  }}>
                  <Route exact path="/" component={Auth} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/customers" component={Customers} />
                  <Route path="/products" component={Products} />
                  <Route path="/carts" component={Carts} />
                </div>
              </Switch>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(App);