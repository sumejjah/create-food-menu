import React, { useState } from "react";
import styled from "styled-components";
import { Col, Alert } from "react-bootstrap";

import MealDetailsModal from '../MealDetailsModal';
import BadgeList from '../BadgeList';
import Loader from '../../../Shared/Loader';

const FoodList = ({ meals, mealsFail, mealsRequest }) => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ currentMeal, setCurrentMeal ] = useState(null);

  const toggleModal = (meal) => {
    setCurrentMeal(meal);
    setModalOpen(!modalOpen);
  }

  return (
    <Wrapper>
      {modalOpen && currentMeal && (
        <MealDetailsModal
          show={modalOpen}
          handleClose={toggleModal}
          meal={currentMeal}
        />
      )}

      {!mealsRequest && mealsFail && (
        <Alert variant="danger">{mealsFail.message}</Alert>
      )}

      {mealsRequest && <Loader />}

      {!mealsRequest && !mealsFail && !meals && (
        <div>Please enter search keyword!</div>
      )}

      {!mealsRequest && meals && meals.hits && meals.hits.length === 0 && (
        <div>No recipes found.</div>
      )}

      {!mealsRequest &&
        meals &&
        meals.hits &&
        meals.hits.map(({ recipe }, index) => (
          <Col md={12} xs={12} key={index}>
            <ListItem onClick={() => toggleModal(recipe)}>
              <ItemDetails>
                <div>
                  <h4>{recipe.label}</h4>
                  <BadgeList items={recipe.healthLabels} />
                  <div>
                    <BoldText>Ingredients:</BoldText>
                    {recipe.ingredients.map((ingredient, index) => (
                      <Ingredient key={index}>
                        {ingredient.food || ingredient.text}
                      </Ingredient>
                    ))}
                  </div>
                </div>
                <BoldText>Energy: {Math.round(recipe.calories)} kcal</BoldText>
              </ItemDetails>

              <img src={recipe.image} alt={recipe.label} />
            </ListItem>
          </Col>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    padding: 0;
  }
`;

const ListItem = styled.div`
  margin: 10px 0;
  padding: 25px;
  border-radius: 4px;
  border: 1px solid var(--clr-grey-7);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  :nth-child(odd) {
    margin-right: 15px;
  }

  :hover {
    box-shadow: var(--light-shadow);
  }

  img {
    margin-left: 12px;
    width: 200px;
    height: 200px;
  }
`;

const ItemDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BoldText = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

const Ingredient = styled.span`
  &:not(:last-child):after {
    content: ', '
  }
`;


export default FoodList;
