import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

import { GithubContext } from '../../../../context/context';

const Search = () => {
  const [searchValue, setSearchValue ] = useState('');
  const { searchUser } = useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(searchValue);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Form.Control
          type="text"
          placeholder="Search items"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button type="submit" variant="info">Search</Button>
      </Wrapper>
    </Form>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-left: 25px;
  }
`;

export default Search;