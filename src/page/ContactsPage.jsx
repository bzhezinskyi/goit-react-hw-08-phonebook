import { Container } from 'react-bootstrap';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <Container className="text-center">
      <h1>Phonebook</h1>
      <ContactForm />
      <hr />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
export default ContactsPage;
