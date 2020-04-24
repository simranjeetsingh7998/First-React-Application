import React,{Component} from 'react';
import { ModalHeader, ModalBody, Col,Row,Label,Modal,Button } from 'reactstrap';
import { LocalForm, Control,Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        
        this.state={
            isModalOpen: false
        };

        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal()
    {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        console.log("Current State is "+ JSON.stringify(values));
        alert("Current State is "+ JSON.stringify(values));

    }

    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg btn btn-outline-secondary"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row class="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" className="form-control" name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row >
                            <Row class="from-group">
                            <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" name="name" id="name" className="form-control" 
                                                placeholder="Your Name"
                                    validators={{
                                        required,minLength:minLength(3),maxLength:maxLength(15)
                                    }}/> 
                                    <Errors className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required:"Required",
                                        minLength:"Must be greater than 2 characters",
                                        maxLength:"Must be 15 characters or less"
                                    }}/>                                
                                </Col>
                            </Row>
                            <Row class="from-group">
                            <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" name="comment" id="comment" className="form-control" rows="6"/>                                   </Col>
                            </Row>
                            <Row className="form-group mt-2">
                                <Col md={12}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default CommentForm;