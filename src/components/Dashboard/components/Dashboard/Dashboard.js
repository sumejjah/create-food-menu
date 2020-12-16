import React from "react";
import styled from "styled-components";

import Search from '../Search';
import FoodList from '../FoodList';
import Navbar from "../../../Navbar";

const Dashboard = ({ getMeals }) => {
  const onSearchSubmit = (q) => {

    getMeals({ q });
  };

  return (
    <>
      <Navbar />
      <ContentWrapper>
        <Search onSearchSubmit={onSearchSubmit} />
        <FoodList />
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  margin: 30px 60px;
`;

export default Dashboard;
