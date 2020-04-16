import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null) {
            return(
                <div>
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

    function RenderComments({commentsArray}) {
        let options = { year: "numeric", month: "short", day: "numeric" };
        let item = null;
        if(commentsArray != null){
            item = commentsArray.map((value)=>{
                return(
                    <div key={value.id}>
                        <ul className="list-unstyled">
                            <li className="mt-3">{value.comment}</li>
                            <li className="mt-3">-- {value.author}{", "}{new Date(value.date).toLocaleDateString("en-US", options)}</li>
                        </ul>
                    </div>
                );
            });
        }
        else {
            return(
                <div></div>
            );
        }
        return(
            <div>
                {item}
            </div>
        );
    }

    const DishDetail = (props) => {
        const DISH = props.selectedDish;
        if(DISH != null) {
            const commentsArray = DISH.comments;
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={DISH} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments commentsArray={commentsArray} />
                        </div>
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