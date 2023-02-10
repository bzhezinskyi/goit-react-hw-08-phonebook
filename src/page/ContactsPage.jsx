import { Container } from 'react-bootstrap';

import ContsctsFilter from 'components/ContsctsFilter/ContsctsFilter';
import ContactForm from 'components/ContactsForm/ContactsForm';
import ContactList from 'components/ContactsList/ContactList';

const ContactsPage = () => {
  return (
    <Container className="text-center">
      <h1>Phonebook</h1>
      <ContactForm />
      <hr />
      <h2>Contacts</h2>
      <ContsctsFilter />
      <ContactList />
    </Container>
  );
};
export default ContactsPage;
