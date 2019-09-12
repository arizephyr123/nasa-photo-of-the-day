import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const DataCard = props => {
  return (
    <div>
  <Card>
    <CardTitle>{props.title}</CardTitle>
    <CardSubtitle>{props.date}</CardSubtitle>
    <CardImg top width="90%" src={props.hdurl} alt="outer space" />
    <Button>More About this Photo</Button>
    <CardBody>
      <CardText>{props.explanation}</CardText>
    </CardBody>
  </Card>
</div>
  );
};

export default DataCard;
