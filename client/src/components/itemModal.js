import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";


class ItemModal extends Component {
    state = {
        modal: false,
        name: ""
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }

        //add item with an addItem action
        this.props.addItem(newItem);

        //close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ?

                    <Button
                        color="success"
                        style={{ marginBottom: "2rem" }}
                        onClick={this.toggle}
                    >Add Location</Button>
            
            :<strong className="mb-3 ml-4">Please login to modify your Waypoint</strong>}


                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add Current Location</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Paste Waypoint Below</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add GPS Location or Landmark"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: "2rem" }}
                                    block
                                >Add to Route</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated

})

export default connect(mapStateToProps, { addItem })(ItemModal);