import React, { useState } from "react";
import styled from "styled-components";
import { Col, Alert } from "react-bootstrap";

import MealDetailsModal from '../MealDetailsModal';
import BadgeList from '../BadgeList';
import Loader from '../../../Shared/Loader';

const FoodList = ({ meals, mealsFail, mealsRequest }) => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ currentMeal, setCurrentMeal ] = useState(null);

  const hits = [
    {
      recipe: {
        calories: 4228.043058200812,
        healthLabels: [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Peanut-Free",
          "Tree-Nut-Free",
        ],
        cuisineType: ["italian"],
        ingredients: [
          { text: "1/2 cup olive oil", food: "olive oil" },
          { food: "garlic", text: "5 cloves garlic, peeled" },
          {
            food: "russet potatoes",
            text: "2 large russet potatoes, peeled and cut into chunks",
          },
          {
            food: "chicken",
            text:
              "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
          },
          { food: "white wine", text: "3/4 cup white wine" },
          { food: "chicken stock", text: "3/4 cup chicken stock" },
          { food: "parsley", text: "3 tablespoons chopped parsley" },
          { food: "dried oregano", text: "1 tablespoon dried oregano" },
          { food: "Salt", text: "Salt and pepper" },
          { food: "frozen peas", text: "1 cup frozen peas, thawed" },
        ],
        label: "Chicken Vesuvio",
        image:
          "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
      },
    },
    {
      recipe: {
        calories: 3033.2012500008163,
        healthLabels: [
          "Vegetarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free",
        ],
        cuisineType: ["italian"],
        ingredients: [
          { text: "1/2 cup olive oil", food: "olive oil" },
          { food: "garlic", text: "5 cloves garlic, peeled" },
          {
            food: "russet potatoes",
            text: "2 large russet potatoes, peeled and cut into chunks",
          },
          {
            food: "chicken",
            text:
              "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
          },
          { food: "white wine", text: "3/4 cup white wine" },
          { food: "chicken stock", text: "3/4 cup chicken stock" },
          { food: "parsley", text: "3 tablespoons chopped parsley" },
          { food: "dried oregano", text: "1 tablespoon dried oregano" },
          { food: "Salt", text: "Salt and pepper" },
          { food: "frozen peas", text: "1 cup frozen peas, thawed" },
        ],
        label: "Chicken Paprikash",
        image:
          "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
      },
    },
    {
      recipe: {
        calories: 3033.2012500008163,
        healthLabels: [
          "Vegetarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free",
        ],
        cuisineType: ["italian"],
        ingredients: [
          { text: "1/2 cup olive oil", food: "olive oil" },
          { food: "garlic", text: "5 cloves garlic, peeled" },
          {
            food: "russet potatoes",
            text: "2 large russet potatoes, peeled and cut into chunks",
          },
          {
            food: "chicken",
            text:
              "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
          },
          { food: "white wine", text: "3/4 cup white wine" },
          { food: "chicken stock", text: "3/4 cup chicken stock" },
          { food: "parsley", text: "3 tablespoons chopped parsley" },
          { food: "dried oregano", text: "1 tablespoon dried oregano" },
          { food: "Salt", text: "Salt and pepper" },
          { food: "frozen peas", text: "1 cup frozen peas, thawed" },
        ],
        label: "Chicken Paprikash",
        image:
          "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
      },
    },
  ];

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

      {!mealsRequest &&
        hits.map(({ recipe }, index) => (
          <Col md={6} xs={12} key={index}>
            <ListItem onClick={() => toggleModal(recipe)}>
              <ItemDetails>
                <div>
                  <h4>{recipe.label}</h4>
                  <BadgeList items={recipe.healthLabels} />
                  <div>
                    <BoldText>Ingredients:</BoldText>
                    {recipe.ingredients.map((ingredient, index) => (
                      <Ingredient key={index}>{ingredient.food}</Ingredient>
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
