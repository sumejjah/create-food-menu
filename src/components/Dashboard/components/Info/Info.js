import React, { useContext } from "react";
import { GoRepoForked } from 'react-icons/go';
import { FaUsers, FaUserPlus } from "react-icons/fa";
import { GithubContext } from "../../../../context/context";
import styled from "styled-components";

const Info = () => {
  const { githubUser } = useContext(GithubContext);
  const { public_repos, followers, following } = githubUser; 

  const items = [
    {
      id: 1,
      icon: <GoRepoForked className="icon" />,
      label: "Repos",
      value: public_repos,
    },
    {
      id: 2,
      icon: <FaUsers className="icon" />,
      label: "Followers",
      value: followers,
    },
    {
      id: 3,
      icon: <FaUserPlus className="icon" />,
      label: "Following",
      value: following,
    },
  ];

  return (
    <Wrapper>
      {items.map(({ id, color, value, label, icon }) => (
        <Item key={id}>
          <Icon>{icon}</Icon>
          <Text>
            <h4>{value} {label}</h4>
          </Text>
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h4 {
    display: inline;
  }
`;

const Item = styled.div`
  border-radius: 4px;
  border: 1px solid #eaedf3;
  margin: 10px 90px 10px 10px;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  border: 1px solid var(--clr-primary-4);
  border-radius: 50%;
  padding: 8px;
  display: inline-flex;
  align-items: center;

  svg {
    height: 25px;
    width: 25px;
    path {
      fill: var(--clr-primary-4);
    }
  }
`;

const Text = styled.span`
  margin-left: 10px;
`;

export default Info;
