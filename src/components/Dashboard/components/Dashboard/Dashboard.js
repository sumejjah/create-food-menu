import React from "react";
import styled from "styled-components";

import Search from '../Search';
import FoodList from '../FoodList';
import Navbar from "../../../Navbar";

const Dashboard = ({ getMeals }) => (
  <>
    <Navbar />
    <ContentWrapper>
      <Search onSearchSubmit={getMeals} />
      <FoodList />
    </ContentWrapper>
  </>
);

const ContentWrapper = styled.div`
  margin: 30px 60px;
`;

export default Dashboard;
