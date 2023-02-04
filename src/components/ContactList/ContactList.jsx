import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList({ contactArray, deleteContact }) {
  return (
    <ul>
      {contactArray.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}
