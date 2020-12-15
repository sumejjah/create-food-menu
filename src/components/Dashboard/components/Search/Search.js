import React, { useState } from 'react';
import { Form as ReduxForm, Field, reduxForm } from "redux-form";
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import FieldInput from '../../../Shared/FieldInput';
import { required } from '../../../../utils/validators';


const Search = ({onSearchSubmit, invalid}) => {
  const [searchValue, setSearchValue ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchValue);
  }

  return (
    <ReduxForm onSubmit={handleSubmit}>
      <Wrapper>
        <Field
          name="searchKeyword"
          type="text"
          component={FieldInput}
          placeholder="Search meals"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          validate={required}
        />
        <Button type="submit" variant="info" disabled={invalid}>
          Search
        </Button>
      </Wrapper>
    </ReduxForm>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-left: 25px;
  }
`;

export default reduxForm({
  form: "SearchForm",
  enableReinitialize: true,
})(Search);;