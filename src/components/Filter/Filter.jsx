import { useDispatch, useSelector } from 'react-redux';

import { Container, Form } from 'react-bootstrap';

import { selectFilter } from 'redux/filter/filter.selector';
import { queryFilterValue } from 'redux/filter/filter.slise';

export default function Filter() {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const hendleChangeFiltr = event => {
    dispatch(queryFilterValue(event.currentTarget.value));
  };

  return (
    <Container>
      <Form.Group className="mb-3 text-start">
        <Form.Label className="ms-3">Find contacts by name</Form.Label>
        <Form.Control
          type="text"
          value={filterValue}
          aria-label="readonly input example"
          onChange={hendleChangeFiltr}
        />
      </Form.Group>
    </Container>
  );
}
