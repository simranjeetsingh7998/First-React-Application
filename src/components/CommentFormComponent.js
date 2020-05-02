import React, {Component} from 'react';
import {Button, Modal, ModalHeader,ModalBody, Label, Row } from 'reactstrap';
import {Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false
        };

        this.toggleForm=this.toggleForm.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    toggleForm() {
        this.setState({
            isFormOpen: !this.state.isFormOpen 
        });
    }

    handleSubmit(values) {
        this.toggleForm();
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment);
    }

    render() {
        return (
            <>
            <div>
            <Button outline className="btn-secondary" onClick={this.toggleForm}>
                <span className="fa fa-pencil"></span> Submit Comment
            </Button>
            </div>
            <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating"
                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmFor="author">Your name</Label>
                                <Control.text model=".author" name="author" model=".author"
                                placeholder ="Your name" 
                                className="form-control"
                                validators={{
                                    minLength: minLength(3),maxLength:maxLength(15)
                                }} 
                                />
                                <Errors 
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" name="comment" rows="6"
                                className="form-control" />
                            </Row>
                            <Button type="submit" value="submit" color="primary">
                                Login
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}


export default CommentForm;