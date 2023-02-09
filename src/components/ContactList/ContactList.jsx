import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Table } from 'react-bootstrap';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import { fetchContacts } from 'redux/contacts/contacts.operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/contacts.selector';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !contacts.length > 0 && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {contacts.length > 0 && !error && (
        <Table striped>
          <thead>
            <tr>
              <th className="text-start">Name</th>
              <th className="text-start">Number</th>
              <th className="text-end"></th>
            </tr>
          </thead>
          <tbody>
            {contacts &&
              visibleContacts.map(contact => (
                <ContactListItem key={contact.id} {...contact} />
              ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
