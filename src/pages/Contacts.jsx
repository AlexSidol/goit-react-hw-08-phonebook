import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

import { fetchContacts } from 'redux/contacts/operation';
import { useEffect } from 'react';

import css from './Contacts.module.css';

export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phonebook__form}>
      <ToastContainer position="top-center" />
      <h1 className={css.contacts__name}>Phonebook</h1>
      <h2 className={css.contacts__name}>Add new contact</h2>
      <ContactForm />

      {contacts.length > 0 && (
        <div>
          <h2 className={css.contacts__name}>Contacts list</h2>
          <Filter />
          <ContactList />
        </div>
      )}
      {isLoading && !error && <p>Sorry, but i have paws</p>}
    </div>
  );
}
