import { useDispatch, useSelector } from 'react-redux';

import { IoPersonRemove } from 'react-icons/io5';
import { Btn, Item, List } from './ContactList.styled';

// redux
import { deleteContacts } from '../../redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const getContacts = () => {
    if (filter === '' || !filter) {
      return contacts.items;
    }

    return contacts.items.filter(contact => contact.name.includes(filter));
  };
  const onDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };
  const phone = getContacts();
  return (
    <List>
      {phone.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <Btn type="button" onClick={() => onDeleteContact(id)}>
              <IoPersonRemove size="14" />
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};
