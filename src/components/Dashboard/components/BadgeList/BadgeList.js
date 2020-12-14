import React from 'react';
import styled from 'styled-components';
import { Badge } from "react-bootstrap";

const BadgeList = ({ items }) => (
  <div>
    {items.map((item, index) => (
      <BadgeWrapper key={index}>
        <Badge variant="info">{item}</Badge>
      </BadgeWrapper>
    ))}
  </div>
);

const BadgeWrapper = styled.span`
  margin-right: 5px;
`;

export default BadgeList;