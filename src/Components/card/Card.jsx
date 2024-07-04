import React from "react";
import {
  Card as RsCard,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";

const Card = ({
  src = "",
  title = "",
  subTitle = "",
  children = <></>,
}) => {
  return (
    <div>
      <RsCard
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={src} />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {subTitle}
          </CardSubtitle>
          {children}
        </CardBody>
      </RsCard>
    </div>
  );
};

export default Card;
