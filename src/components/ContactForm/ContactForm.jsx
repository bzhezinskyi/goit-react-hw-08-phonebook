import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { toast } from 'react-toastify';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';

import { selectContacts } from 'redux/contacts/contacts.selector';
import { addContact } from 'redux/contacts/contacts.operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    if (!contacts.find(contact => contact.name.includes(name))) {
      toast.promise(dispatch(addContact({ name, phone: number })), {
        pending: `Create a new contact ${name}`,
        success: `New contact ${name}`,
        error: `${name} not create`,
      });
    } else {
      const message = ' is already in contacts';
      toast.warn(name + message);
    }
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="g-2 mb-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Nanme">
              <Form.Control
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter name"
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Number">
              <Form.Control
                onChange={handleChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Enter number"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Button
          variant="primary"
          type="submit"
          disabled={contacts.length === 100}
        >
          Add contact
        </Button>
      </Form>
    </Container>
  );
}
