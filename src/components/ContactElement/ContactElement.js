import React from 'react';
import { FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Contact, Person } from './ContactElement.styled';
import { Button } from '../ContactForm/ContactForm.styled';
import { iconSize } from '../constans';

const ContactElement = ({ visibleContacts, onDeleteContact }) => {
  return (
    <Contact>
      <Person>
        <FaPhone size={iconSize.xs} /> {visibleContacts.name}:
        {visibleContacts.number}
      </Person>
      <Button type="button" onClick={() => onDeleteContact(visibleContacts.id)}>
        Delete
      </Button>
    </Contact>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
