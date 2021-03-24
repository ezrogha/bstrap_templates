import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default ({ text, Icon, type }) => {
  return (
    <InputGroup size="lg" className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroupPrepend">
          <Icon />
        </InputGroup.Text>
      </InputGroup.Prepend>
      {type !== "textarea" ? (
        <Form.Control
          type="text"
          placeholder={text}
          aria-describedby="inputGroupPrepend"
          required
        />
      ) : (
        <Form.Control
          as={type}
          row="3"
          placeholder={text}
          aria-describedby="inputGroupPrepend"
          required
        />
      )}
    </InputGroup>
  );
};
