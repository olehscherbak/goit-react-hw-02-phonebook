import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'i_S',
        name: 'Oleh Scherbak',
        number: '38067-247-62-45',
      },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-11', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-12', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-13', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-14', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-15', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-16', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-17', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-18', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-119', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-120', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-21', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-221', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-231', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  // handleClick = (evt, id) => {
  //   const { contacts } = this.state;
  //   const updatedContacts = contacts.filter(
  //     contact => contact.id !== evt.target.value
  //   );
  //   this.setState({ contacts: updatedContacts });
  // };

  deleteContact = value => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== value);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className="phoneBook">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        <ContactList
          contactArray={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
