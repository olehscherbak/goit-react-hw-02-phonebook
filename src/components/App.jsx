import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GiRotaryPhone } from 'react-icons/gi';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
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

  handleClick = (evt, id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(
      contact => contact.id !== evt.target.value
    );
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
        {/* <input type="text" name="filter" onChange={this.handleChange} /> */}
        <Filter onChange={this.changeFilter} />
        <ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <GiRotaryPhone /> {name} {number}
                <button type="button" value={id} onClick={this.handleClick}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
