import { Container, Title, TitleH2 } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import spinner from 'components/spinner/spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import { IsLoading, filteredContacts } from 'redux/selectors';

const ContactsPage = () => {
  const filterListContacts = useSelector(filteredContacts);
  const dispatch = useDispatch();
  const loader = useSelector(IsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      {loader ? spinner() : <ContactList />}
      {!filterListContacts.length && !loader && <h2>No contacts</h2>}
    </Container>
  );
};

export default ContactsPage;
