import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';


    function RenderDish({dish}) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
        let options = { year: "numeric", month: "short", day: "numeric" };
        if(comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment)=>{
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}{", "}{new Date(comment.date).toLocaleDateString("en-US", options)}</p>
                                </li>    
                            );
                        })}
                    </ul>
                    <CommentForm />
                </div>
            );
        else 
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {
        if(props.selectedDish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>
                        <hr></hr>
                    </div>
                </div>
                    <div className="row">
                        <RenderDish dish={props.selectedDish} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


export default DishDetail;