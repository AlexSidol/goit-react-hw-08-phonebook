import React from 'react';

import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.contacts}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contact__list} key={id}>
          <span className={css.contact__item}>{name}: </span>
          <span className={css.contact__item}>{number} </span>
          <button
            className={css.contacts__button}
            type="button"
            onClick={() => {
              const action = deleteContact(id);
              dispatch(action);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
