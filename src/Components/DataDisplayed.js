import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,  
  CardTitle,
  CardSubtitle,
  Button,
  UncontrolledCollapse
} from "reactstrap";
// import styled from "styled-components";
  

const DataCard = props => {
  return (
    <div>
      <Card>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.date}</CardSubtitle>
        <CardImg top width="90%" src={props.hdurl} alt="outer space" />
      </Card>
        <Button className="bg-info clearfix" id="toggler" style={{ margin: '1rem' }}>
        More About this Photo
    </Button>
    <UncontrolledCollapse toggler="#toggler">
    <Card>
        <CardBody >
        <CardText> © {props.copyright}</CardText>
          <CardText>{props.explanation}</CardText>
        </CardBody>
        </Card>
        </UncontrolledCollapse>
        <Button className="bg-info clearfix" style={{ margin: '1rem' }} href="#">This Day Last Year</Button>
        <Button className="bg-info clearfix" style={{ margin: '1rem' }} href="#">Yesterday</Button>
        
    </div>
  );
};
  
  export default DataCard;
