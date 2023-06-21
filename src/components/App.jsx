import { useState, useEffect} from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { Division } from './App.styled';


export function App() {
  
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');


  const formSubmitHandler = (contact, newName) => {
    // console.log(contact, newName)

    if (contacts.some(contact => contact.name.toLowerCase() === newName.toLowerCase())) {
      return alert(`${newName} is already in the contact list`)
    } else {
      setContacts(prevState => [contact, ...prevState.contacts])
    }
  }


  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };
  

  const deleteContact = contactId => {
    setContacts(prevState => (prevState.contacts.filter(contact => contact.id !== contactId)));
  };

  const getVisibleContacts = () => {
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalazedFilter));
  }

  const visibleContacts = getVisibleContacts();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   // console.log(parsedContacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {

  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts))
  //   }
  // }
  
  
   



  return (
     <Division>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList visibleContacts={visibleContacts} onDeleteContact={deleteContact}/>
    </Division>
  )
};
