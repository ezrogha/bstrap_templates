import React from "react";
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default ({ bgColor, title, count, Icon }) => {
  return (
    <Card className={`text-center ${bgColor} text-white mb-3`}>
      <Card.Body>
        <h3>{title}</h3>
        <h4 className="display-4">
          <Icon /> {count}
        </h4>
        <Link to={`/bjorn/${title.toLowerCase()}`} className="btn btn-outline-light">View</Link>
      </Card.Body>
    </Card>
  );
};
