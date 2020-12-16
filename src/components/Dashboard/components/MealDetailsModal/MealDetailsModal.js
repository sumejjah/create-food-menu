import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Field, reduxForm, FieldArray } from "redux-form";
import styled from 'styled-components';
import { MdModeEdit, MdCheck, MdClose } from "react-icons/md";
import { BiPlus } from 'react-icons/bi';

import BadgeList from '../BadgeList';
import FieldInput from '../../../Shared/FieldInput';
import { required } from '../../../../utils/validators';

class MealDetailsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
    };
  }

  toggleFieldArrayEdit = () => {
    const { isEdit } = this.state;
    this.setState({ isEdit: !isEdit });
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
          <RemoveIconWrapper
            onClick={() => fields.length > 1 && fields.remove(index)}
          >
            <MdClose />
          </RemoveIconWrapper>
        </FieldArrayItem>
      ))}
      <LinkButton onClick={() => fields.push()}>
        <BiPlus />
        Add Ingredient
      </LinkButton>
    </div>
  );

  download = () => {
    const { download, formValues, handleClose } = this.props;

    download(formValues);
    handleClose();
  };

  render() {
    const { show, handleClose, formValues, meal, invalid, handleSubmit } = this.props;
    const { isEdit } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          contentClassName="custom-modal-style"
        >
          <Modal.Header closeButton>
            <Modal.Title>Meal details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BoldText>Name</BoldText>
            <Field
              name="label"
              type="text"
              component={FieldInput}
              placeholder="Name"
              validate={required}
            />

            <BadgeWrapper>
              <BadgeList items={meal.healthLabels} />
            </BadgeWrapper>

            <div>
              <BoldText>Energy: {Math.round(meal.calories)} kcal</BoldText>
            </div>

            <LabelIcon>
              <BoldText>Ingredients</BoldText>
              {isEdit ? (
                <MdCheck
                  onClick={this.toggleFieldArrayEdit}
                  className="default_svg"
                />
              ) : (
                <MdModeEdit
                  onClick={this.toggleFieldArrayEdit}
                  className="default_svg"
                />
              )}
            </LabelIcon>
            {isEdit ? (
              <FieldArray
                name="ingredients"
                component={this.renderIngredients}
              />
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
            <LinkButton>
              <Button variant="link" onClick={handleClose}>
                Close
              </Button>
            </LinkButton>
            <Button onClick={this.download} variant="info" disabled={invalid}>
              Download
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
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

const LinkButton = styled.div`
  color: var(--clr-primary-4);
  display: flex;
  align-items: center;
  cursor: pointer;

  > button,
  > button:hover {
    color: var(--clr-primary-5);
  }
`;

const BoldText = styled.div`
  display: inline-flex;
  font-weight: bold;
  margin: 10px 0;
`;

const BadgeWrapper = styled.div`
  margin: 10px 0;
`;

const LabelIcon = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-right: 10px;
  }
`;

export default reduxForm({
  form: "MealDetails"
})(MealDetailsModal);