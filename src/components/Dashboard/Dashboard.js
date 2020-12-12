import React from "react";
import styled from "styled-components";

import Search from './components/Search';
import User from './components/User';
import Info from "./components/Info";
import Navbar from "../Navbar";
// import Repos from './components/Repos';

const Dashboard = () => (
  <>
    <Navbar />
    <Search />
    <TwoColumnLayout>
      <User />
      <Info />
    </TwoColumnLayout>
    {/* <Repos /> */}
  </>
);

const TwoColumnLayout = styled.div`
  display: grid;
  grid-auto-columns: minmax(300px, auto);
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 1rem;
  align-items: center;
`;

export default Dashboard;
