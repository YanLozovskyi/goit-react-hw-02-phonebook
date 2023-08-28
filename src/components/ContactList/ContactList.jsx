const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ name, id, number }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
