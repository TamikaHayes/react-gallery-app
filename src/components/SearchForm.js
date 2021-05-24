import React from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import search from './search.svg';

const SearchForm = () => (
    <Form inline>
        <FormGroup controlId="formInlineEmail">
            <FormControl type="search" placeholder="Enter search..." />
        </FormGroup>
        {' '}

        <Button type="submit">
           <img src={search} className="search-icon" alt="search" />
        </Button>
    </Form>
);

export default SearchForm;