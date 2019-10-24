import React, {Component, Fragment} from "react";
import {Badge} from "reactstrap";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class AppNavbar extends Component {

    state ={
            isOpen:false
        };
    
    
    static propTypes = {
        auth: PropTypes.object.isRequired
    };


toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
}

render(){

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <Fragment>
            <NavItem>
                <span className="navbar-text mr-3">
                    <italics>{user ? `Hello ${user.name}` : ""}</italics>
                </span>
                <Logout />
            </NavItem>
        </Fragment>

    );

    const guestLinks = (
        <Fragment>
            <NavItem>
                <LoginModal />
            </NavItem>
            <NavItem>
                <RegisterModal />
            </NavItem>
        </Fragment>

    );



    return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/"><h2><strong><Badge color="warning">Stealth Rally</Badge></strong></h2></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {isAuthenticated ? authLinks : guestLinks}
                            <NavLink href="https://github.com/SpeedHunterSam/Wakanda">
                                Join Rally
                        </NavLink>
                            <NavLink href="https://github.com/SpeedHunterSam/Wakanda">
                                Create Rally
                        </NavLink>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );

}
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);