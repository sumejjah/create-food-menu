import React, { Component } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";
import { connect } from 'react-redux';
import fs from 'fs';
import { Form, Field, reduxForm, FieldArray, Fields, change, untouch } from "redux-form";
import styled from 'styled-components';
import { MdModeEdit, MdCheck, MdClose } from "react-icons/md";

import RemoveIcon from '../../../../assets/svgs/RemoveIcon.svg';

const FieldInput = ({ input, meta, type, placeholder, min, max }) => {
  return (
    <FormControl
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      value={input.value}
      onChange={input.onChange}
    />
  );
};

class MealDetailsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    }
  }

  toggleFieldArrayEdit = () => {
    const { isEdit } = this.state;
    this.setState({ isEdit: !isEdit })
  };

  renderIngredients = ({ fields }) => (
    <div>
      {fields.map((ingredient, index) => (
        <FieldArrayItem key={index}>
          <Field
            name={`${ingredient}.text`}
            type="text"
            component={FieldInput}
            placeholder="Ingredient"
          />
          <RemoveIconWrapper onClick={() => fields.remove(index)}>
            <MdClose />
          </RemoveIconWrapper>
        </FieldArrayItem>
      ))}
      <Button onClick={() => fields.push()}>Add Ingredient</Button>
    </div>
  );

  downloadFormValues = () => {
    fs.writeFile(
      "/test.txt",
      "Cool, I can do this in the browser!",
      function (err) {
        fs.readFile("/test.txt", function (err, contents) {
          console.log(contents.toString());
        });
      }
    );
  }

  render() {
    const { show, handleClose, formValues } = this.props;
    const { isEdit } = this.state;

    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Meal details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Name</strong>
          <Field
            name="label"
            type="text"
            component={FieldInput}
            placeholder="Name"
          />

          <strong>Ingredients</strong>
          {isEdit ? (
            <MdCheck onClick={this.toggleFieldArrayEdit} />
          ) : (
            <span>
              <MdModeEdit onClick={this.toggleFieldArrayEdit} />
            </span>
          )}
          {isEdit ? (
            <FieldArray name="ingredients" component={this.renderIngredients} />
          ) : (
            <List>
              {formValues &&
                formValues.ingredients &&
                formValues.ingredients.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
            </List>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={this.downloadFormValues} variant="info">
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

const List = styled.ul`
  margin-left: 20px;
`;

const FieldArrayItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3px 0;

  input {
    margin-right: 3px;
  }
`;

const RemoveIconWrapper = styled.span`
  cursor: pointer;

  svg {
    fill: var(--clr-red-dark);
  }
`;

export default reduxForm({
  form: "MealDetails",
  // onSubmit: submitForm,
  enableReinitialize: true,
})(MealDetailsModal);